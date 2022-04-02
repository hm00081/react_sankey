// Libraries
import { linkHorizontal, line, curveCardinal } from 'd3-shape';

// Types
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from '../../types';
import _, { forEach } from 'lodash';
import { link } from 'fs';
import { Utility } from './basics';

export const calcSankeyLinks = (
    data: SankeyData,
    height: number,
    nodes: SankeyNodeExtended[],
    nodeWidth: number,
    minLinkBreadth?: number,
    maxLinkBreadth?: number,
    isSort: boolean = true
): SankeyLinkExtended[] => {
    // Extract to const so its in a closure
    const { links } = data;
    // Calc proportional size value

    const proportionalNodeWidth = nodeWidth * (height / 100);
    const proportionalMaxLinkBreadth = maxLinkBreadth && maxLinkBreadth * (height / 100);
    const proportionalMinLinkBreadth = minLinkBreadth && minLinkBreadth * (height / 100);
    const totalValue = nodes.map((node) => node.value).reduce((acc, cur) => (acc += cur), 0);

    // Extend Links to add additional data
    const extendedLinks = links.map((link) => {
        const sourceNode = nodes.filter((node) => node.index === link.source)[0];
        const targetNode = nodes.filter((node) => node.index === link.target)[0];
        const valueid = link.valueid;
        const color = link.color;
        const overlapid = link.overlapid;
        const breadth = (link.value / totalValue) * height;
        const maxBreadth = proportionalMaxLinkBreadth ? Math.min(breadth, proportionalMaxLinkBreadth) : breadth;
        const minBreadth = proportionalMinLinkBreadth ? Math.max(breadth, proportionalMinLinkBreadth) : breadth;
        const linkBreadth = breadth > maxBreadth ? maxBreadth : minBreadth;
        const extendedLink: SankeyLinkExtended = {
            ...link,
            sourceNode,
            sourceNodeYPosition: 0, // 링크 분리를 위한 값(type) 추가  0으로 해도 상관 없음.
            targetNode,
            valueid,
            targetNodeYPosition: 0, // 링크 분리를 위한 값(type) 추가
            breadth: linkBreadth ? linkBreadth : 0,
            path: '',
            overlapid,
            color,
        };
        // sourceNode.sourceNodeType += link.value;
        // targetNode.targetNodeType += link.value;

        return extendedLink;
    });
    // console.log(extendedLinks[0].valueid);
    // Calculate the path based on the positions of source and target node

    extendedLinks.forEach((link) => {
        if (link.sourceNode.x === link.targetNode.x) {
            // console.log(link.sourceNode.subtype);
            const startPoint = [link.sourceNode.x + proportionalNodeWidth, link.sourceNode.height / 2 + link.sourceNode.y - nodeWidth / 2] as const;
            const endPoint = [link.targetNode.x + proportionalNodeWidth, link.targetNode.height / 2 + link.targetNode.y - nodeWidth / 2] as const;
            // console.log(startPoint);
            const data = [startPoint, [startPoint[0] + 5, startPoint[1]], [startPoint[0] + 20, (endPoint[1] - startPoint[1]) / 2 + startPoint[1]], [endPoint[0] + 5, endPoint[1]], endPoint] as [
                number,
                number
            ][];

            // d3-line, curveCardinal
            const path = line().curve(curveCardinal.tension(0.2))(data);
            // console.log(path);
            if (!path) return;

            link.path = path;

            return;
        }
    });

    //node.breadth === value의 값이 높은 순으로 나열.
    //같은 source, target에서의 값이 여러개일 경우 조건을 주기!!

    // source, targetCenter는 link의 좌표를 나타냄
    //노드 세로 길이 / 2만큼 위치를 조절??

    // const linksByEachGroup =
    //     {
    //         node1: [link, link, link],
    //         node2: [],
    //         node3: []
    //     }
    // 딕셔너리 or 해시테이블
    // const presourceNodeNameLinksDict: { [node: string]: SankeyLinkExtended[] } = {};

    // extendedLinks.forEach((link) => {
    //     // console.log(link.sourceNode.name);
    //     if (link.sourceNode.name! in presourceNodeNameLinksDict) {
    //         presourceNodeNameLinksDict[link.sourceNode.name!].push(link);
    //     } else {
    //         presourceNodeNameLinksDict[link.sourceNode.name!] = [link];
    //     }
    // });
    // console.log(presourceNodeNameLinksDict); // 각 link의 모든 정보를 담은 dictionary.

    // console.log(extendedLinks[0]);
    // valueid가 빈 string ''이 아닌 애들을 우선순위로 두기.
    // 딕셔너리 or 해시테이블
    const sourceNodeNameLinksDict: { [node: string]: SankeyLinkExtended[] } = {};

    extendedLinks.forEach((link) => {
        if (link.sourceNode.name! in sourceNodeNameLinksDict) {
            sourceNodeNameLinksDict[link.sourceNode.name!].push(link);
        } else {
            sourceNodeNameLinksDict[link.sourceNode.name!] = [link];
        }
    });

    const targetNodeNameLinksDict: { [node: string]: SankeyLinkExtended[] } = {};
    // console.log(sourceNodeNameLinksDict);
    extendedLinks.forEach((link) => {
        // console.log(link.sourceNode.name);
        if (link.targetNode.name! in targetNodeNameLinksDict) {
            targetNodeNameLinksDict[link.targetNode.name!].push(link);
            // sourceNodeNameLinksDict[link.targetNode.name!].push(link);
        } else {
            targetNodeNameLinksDict[link.targetNode.name!] = [link];
        }
    });

    // const targetNodeNameLinksDict: { [node: string]: SankeyLinkExtended[] } = {};
    // extendedLinks.forEach((link) => {
    //     // console.log(link.sourceNode.name);
    //     if (link.targetNode.name! in sourceNodeNameLinksDict) {
    //         targetNodeNameLinksDict[link.targetNode.name!].push(link);
    //     } else {
    //         targetNodeNameLinksDict[link.targetNode.name!] = [link];
    //     }
    // });

    // sort [key, value] entries.
    for (const [nodeName, linksOfNode] of Object.entries(sourceNodeNameLinksDict)) {
        // linksOfNode.sort((a, b) => b.value - a.value);
        // 현재는 크기가 큰 순서대로 소팅이 되고있는 상황.
        if (isSort) {
            linksOfNode.sort((a, b) => {
                let tempNumber = 0;
                // if (a.valueid === 'repb' || a.valueid === 'repea') {
                //     if (b.valueid === 'repb' || b.valueid === 'repea') {
                if (a.color !== 'grayLinkColor') {
                    if (b.color !== 'grayLinkColor') {
                        // tempNumber = b.value - a.value;
                        //@ts-ignore
                        tempNumber = a.target - b.target;
                    } else {
                        tempNumber = -1;
                        // tempNumber = a.value - b.value;
                    }
                } else {
                    // if (b.valueid === 'repb' || b.valueid === 'repea') {
                    if (b.color !== 'grayLinkColor') {
                        tempNumber = 1;
                    } else {
                        // tempNumber = b.value - a.value;
                        //@ts-ignore
                        tempNumber = a.target - b.target;
                    }
                }
                return tempNumber;
            });
        }
        // 밸류가 큰게아닌 타겟의 넘버가 작은 순으로 들어가게 소팅에서 변경
        // 논문 소스노드가 작은 순으로 먼저 들어가게 오더링 변경하기.
        // 각 링크를 분리하기 위한 forEach문.
        // sourceNode 순(숫자가 작은 순으로 배치).
        let tempYPosition: number = 0;
        linksOfNode.forEach((link, orderIndex) => {
            // 같은 target에서 받은 source 에서 나오는 링크들은 같은 y축(sourceOrderIndex)에서 나오게 수정하기. (노드 양쪽에서 그렇게 나오게 해야할 듯 하다.)
            // 아래와 같이 하나의 id가 있어야만 한 노드의 위치에서 link.value가 나가야함.
            // if(link.subvalueid === 'overlap') {
            //     link.sourceNode.sourceNodeType = link.value;
            // } else {
            //     link.sourceNode.sourceNodeType += link.value;
            // }
            link.sourceNodeYPosition = tempYPosition;
            tempYPosition += link.value;
        });
    }
    console.log(sourceNodeNameLinksDict);
    // 각 논문축의 sourcenode & targetvalue => 논문의 targeetvalue == target의 source  === .....~~~~~ 계속 이런식으로 줄다리기.

    for (const [nodeName, linksOfNode] of Object.entries(targetNodeNameLinksDict)) {
        if (isSort) {
            linksOfNode.sort((a, b) => {
                let tempNumber = 0;

                if (a.color !== 'grayLinkColor') {
                    if (b.color !== 'grayLinkColor') {
                        //@ts-ignore
                        tempNumber = a.source - b.source;
                    } else {
                        tempNumber = -1;
                    }
                } else {
                    if (b.color !== 'grayLinkColor') {
                        tempNumber = 1;
                    } else {
                        //@ts-ignore
                        tempNumber = a.source - b.source;
                    }
                }
                return tempNumber;
            });
        }
        let tempYPosition: number = 0;
        linksOfNode.forEach((link, orderIndex) => {
            link.targetNodeYPosition = tempYPosition;
            tempYPosition += link.value;
        });
    }

    extendedLinks.forEach((link) => {
        // source, targetCenter는 link의 좌표를 나타냄
        const sourceCenter = (d: typeof extendedLinks[0]) => [d.sourceNode.x + proportionalNodeWidth, d.sourceNode.y + d.sourceNodeYPosition + d.value / 2];
        const targetCenter = (d: typeof extendedLinks[0]) => [d.targetNode.x, d.targetNode.y + d.targetNodeYPosition + d.value / 2];

        // d3-linkHorizontal
        let path = linkHorizontal<typeof extendedLinks[0], {}>().source(sourceCenter).target(targetCenter)(link);

        // if(link.source.length === n);
        if (!path) return;

        link.path = path;
    });

    extendedLinks.sort((link) => (link.color === 'blueLinkColor' ? 1 : -1));

    return extendedLinks;
};
