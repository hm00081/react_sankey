// Libraries
import { linkHorizontal, line, curveCardinal } from 'd3-shape';

// Types
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended } from '../../types';

export const calcSankeyLinks = (data: SankeyData, height: number, nodes: SankeyNodeExtended[], nodeWidth: number, minLinkBreadth?: number, maxLinkBreadth?: number): SankeyLinkExtended[] => {
    // Extract to const so its in a closure
    const { links } = data;

    // Calc proportional size value
    const proportionalNodeWidth = nodeWidth * (height / 100);
    const proportionalMaxLinkBreadth = maxLinkBreadth && maxLinkBreadth * (height / 100);
    const proportionalMinLinkBreadth = minLinkBreadth && minLinkBreadth * (height / 100);

    const totalValue = nodes.map((node) => node.value).reduce((acc, cur) => (acc += cur));

    // Extend Links to add additional data
    const extendedLinks = links.map((link) => {
        const sourceNode = nodes.filter((node) => node.index === link.source)[0];
        const targetNode = nodes.filter((node) => node.index === link.target)[0];

        const breadth = (link.value / totalValue) * height;

        const maxBreadth = proportionalMaxLinkBreadth ? Math.min(breadth, proportionalMaxLinkBreadth) : breadth;

        const minBreadth = proportionalMinLinkBreadth ? Math.max(breadth, proportionalMinLinkBreadth) : breadth;

        const linkBreadth = breadth > maxBreadth ? maxBreadth : minBreadth;

        return {
            ...link,
            sourceNode,
            targetNode,
            breadth: linkBreadth ? linkBreadth : 0,
            path: '',
        };
    });
    // Calculate the path based on the positions of source and target node
    extendedLinks.forEach((link) => {
        if (link.sourceNode.x === link.targetNode.x) {
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

        // source, targetCenter는 link의 좌표를 나타냄
        const sourceCenter = (d: typeof extendedLinks[0]) => [d.sourceNode.x + proportionalNodeWidth, d.sourceNode.height / 2 + d.sourceNode.y - nodeWidth / 2];
        const targetCenter = (d: typeof extendedLinks[0]) => [d.targetNode.x, d.targetNode.height / 2 + d.targetNode.y - nodeWidth / 2];

        // d3-linkHorizontal
        let path = linkHorizontal<typeof extendedLinks[0], {}>().source(sourceCenter).target(targetCenter)(link);

        // if(link.source.length === n);
        if (!path) return;

        link.path = path;
    });

    return extendedLinks;
};
