// Libraries
import { linkHorizontal, line, curveCardinal } from 'd3-shape';

// Types
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended } from '../../types';
import _, { forEach } from 'lodash';
import { link } from 'fs';

export const calcSankeyLinks = (data: SankeyData, height: number, nodes: SankeyNodeExtended[], nodeWidth: number, minLinkBreadth?: number, maxLinkBreadth?: number): SankeyLinkExtended[] => {
    // Extract to const so its in a closure
    const { links } = data;
    // console.log(data);
    // Calc proportional size value
    const proportionalNodeWidth = nodeWidth * (height / 100);
    const proportionalMaxLinkBreadth = maxLinkBreadth && maxLinkBreadth * (height / 100);
    const proportionalMinLinkBreadth = minLinkBreadth && minLinkBreadth * (height / 100);

    const totalValue = nodes.map((node) => node.value).reduce((acc, cur) => (acc += cur), 0);

    // Extend Links to add additional data
    const extendedLinks = links.map((link) => {
        const sourceNode = nodes.filter((node) => node.index === link.source)[0];
        const targetNode = nodes.filter((node) => node.index === link.target)[0];
        const breadth = (link.value / totalValue) * height;
        const maxBreadth = proportionalMaxLinkBreadth ? Math.min(breadth, proportionalMaxLinkBreadth) : breadth;
        const minBreadth = proportionalMinLinkBreadth ? Math.max(breadth, proportionalMinLinkBreadth) : breadth;
        const linkBreadth = breadth > maxBreadth ? maxBreadth : minBreadth;
        const extendedLink: SankeyLinkExtended = {
            ...link,
            sourceNode,
            sourceNodeLink: 0, // 링크 분리를 위한 값(type) 추가  0으로 해도 상관 없음.
            targetNode,
            targetNodeLink: 0, // 링크 분리를 위한 값(type) 추가
            breadth: linkBreadth ? linkBreadth : 0,
            path: '',
            valueid: '' || undefined,
            sourceOrderIndex: 0,
            targetOrderIndex: 0,
            sourceNodeOrderIndex: 0,
            targetNodeOrderIndex: 0,
        };
        // sourceNode.sourceNodeType += link.value;
        // targetNode.targetNodeType += link.value;

        return extendedLink;
    });

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

    // console.log(extendedLinks[0].sourceNode.name);
    // valueid가 빈 string ''이 아닌 애들을 우선순위로 두기.
    // 딕셔너리 or 해시테이블
    const sourceNodeNameLinksDict: { [node: string]: SankeyLinkExtended[] } = {};
    // console.log(sourceNodeNameLinksDict);
    extendedLinks.forEach((link) => {
        // console.log(link.sourceNode.name);
        if (link.sourceNode.name! in sourceNodeNameLinksDict) {
            sourceNodeNameLinksDict[link.sourceNode.name!].push(link);
            // sourceNodeNameLinksDict[link.targetNode.name!].push(link);
        } else {
            sourceNodeNameLinksDict[link.sourceNode.name!] = [link];
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

    // console.log(sourceNodeNameLinksDict);
    // sort [key, value] entries.
    for (const [nodeName, linksOfNode] of Object.entries(sourceNodeNameLinksDict)) {
        linksOfNode.sort((a, b) => b.value - a.value);
        linksOfNode.sort(function (a, b) {
            return a.valueid && b.valueid === 'repb' ? 0 : a.valueid ? -1 : 1;
        });

        linksOfNode.forEach((link, orderIndex) => {
            link.sourceNodeLink = link.sourceNode.sourceNodeType;
            link.sourceNode.sourceNodeType += link.value;
            link.sourceNodeOrderIndex = link.sourceNode.value;
            link.sourceOrderIndex = orderIndex;
        });
    }

    for (const [nodeName, linksOfNode] of Object.entries(sourceNodeNameLinksDict)) {
        linksOfNode.sort(function (a, b) {
            return a.valueid && b.valueid === 'repb' ? 0 : a.valueid ? -1 : 1;
        });
        linksOfNode.sort((a, b) => b.value - a.value);

        linksOfNode.forEach((link, orderIndex) => {
            link.targetNodeLink = link.targetNode.targetNodeType;
            link.targetNode.targetNodeType += link.value;
            link.targetNodeOrderIndex = link.targetNode.value;
            link.targetOrderIndex = orderIndex;
        });
    }

    // for (const [nodeLinkId, linksOfValue] of Object.entries(sourceNodeNameLinksDict)) {
    //     linksOfValue.sort((a, b) => b.value - a.value);
    //     linksOfValue.forEach((link, orderIndex) => {
    //         link.sourceNodeLink = link.sourceNode.sourceNodeType;
    //     })
    // }

    extendedLinks.forEach((link) => {
        // source, targetCenter는 link의 좌표를 나타냄
        const sourceCenter = (d: typeof extendedLinks[0]) => [d.sourceNode.x + proportionalNodeWidth, d.sourceNode.y + d.sourceNodeLink + d.value / 2];
        const targetCenter = (d: typeof extendedLinks[0]) => [d.targetNode.x, d.targetNode.y + d.targetNodeLink + d.value / 2];

        // d3-linkHorizontal
        let path = linkHorizontal<typeof extendedLinks[0], {}>().source(sourceCenter).target(targetCenter)(link);

        // if(link.source.length === n);
        if (!path) return;

        link.path = path;
    });

    return extendedLinks;
};
