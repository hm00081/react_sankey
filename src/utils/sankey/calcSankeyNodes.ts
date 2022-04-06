import { link } from 'fs';
import { SankeyData, SankeyNodeExtended } from '../../types';

export const calcSankeyNodes = (
    data: SankeyData,
    width: number,
    height: number,
    paddingTop: number,
    paddingLeft: number,
    nodeWidth: number,
    nodeHeight: number,
    nodeMargin: number,
    maxLinkBreadth?: number
): SankeyNodeExtended[] => {
    // Extract to const so its in a closure
    const { nodes, links } = data;

    // Calc proportional size value
    const propPaddingTop = paddingTop * (height / 100);
    const propNodeWidth = nodeWidth * (height / 100);
    let propNodeHeight = nodeHeight * (height / 100);
    const propNodeMargin = nodeMargin * (height / 100);
    const propMaxLinkBreadth = maxLinkBreadth && maxLinkBreadth * (height / 100);

    // Extend nodes data
    //@ts-ignore
    const extendedNodes: SankeyNodeExtended[] = nodes.map((node, i) => ({
        ...node,
        index: i,
        input: 0,
        output: 0,
        value: 0,
        links,
        x: 0,
        y: 0,
        width: propNodeWidth,
        height: propNodeHeight,
        sourceNodeType: 0,
        targetNodeType: 0,
        nodeOrderIndex: 0,
    }));

    // Calc value for each node
    links.forEach((link) => {
        //@ts-ignore
        extendedNodes[link.source].output += link.value;
        //@ts-ignore
        extendedNodes[link.target].input += link.value;
    });

    extendedNodes.forEach((node) => (node.value = Math.max(node.input, node.output)));

    // Filter all columns
    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);
    // 각 column마다 노드의 value값에 맞게 내림, 오름차순 정렬기능 생성.
    // const sourceNodeNameDict: {[node: string]: SankeyNodeExtended[]   }={};
    // const extendedNodes = node.map(())
    // Calc largest column value
    let largestColumnValue = 0;

    columns.forEach((column) => {
        const columnNodes = extendedNodes.filter((node) => node.type === column);

        // Calc value of column
        let columnValue = 0;

        columnNodes.forEach((node) => {
            columnValue += node.value;
        });

        if (columnValue > largestColumnValue) largestColumnValue = columnValue;
    });

    // Calc column width
    const columnWidth = width / (columns.length - 1);
    // console.log(columnWidth);
    // Calc nodes positions
    columns.forEach((column, i) => {
        // 각 columnNodes의 객체 데이터로 필터링해줌
        // extendedNodes의 value별로 다시 filtering을 해주어야 하는 함수를 생성.
        const columnNodes = extendedNodes.filter((node) => node.type === column);
        let columnXPos = 0;

        // Set x pos only for center and last nodes
        if (i === columns.length - 1) columnXPos = columnWidth * i - propNodeWidth;
        else if (i > 0) columnXPos = columnWidth * i + propNodeWidth;

        // Calculate starting position for node - alignment center
        const entityHeight = (propMaxLinkBreadth && propMaxLinkBreadth > propNodeHeight ? propMaxLinkBreadth : propNodeHeight) + propNodeMargin;
        // start Node y position
        const startP = height / 2 - (entityHeight * columnNodes.length) / 2 + propPaddingTop;

        let currYPos = startP;
        let currXPos = startP;

        //node margin
        const nextPosition = propMaxLinkBreadth && propMaxLinkBreadth > propNodeHeight ? propMaxLinkBreadth + propNodeMargin + 3 : propNodeHeight + propNodeMargin + 3;
        const y0Pos = propMaxLinkBreadth ? (propMaxLinkBreadth - propNodeWidth) / 2 + propPaddingTop : propPaddingTop;

        // Add node x pos and calc node y pos
        columnNodes.forEach((node) => {
            // Get Extended Node
            const extendedNode = extendedNodes[node.index];

            // if (propNodeHeight === 0) {
            //     propNodeHeight = 1;

            // }
            // Assign values
            extendedNode.x = columnXPos;
            extendedNode.y = currYPos;

            // Temp for nicer view
            if (node.type === 'Paper') extendedNode.y = currYPos + y0Pos * 7;
            if (node.type === 'Paper') extendedNode.x = columnXPos - columnXPos;
            if (node.type === 'Target' && node.subtype === '0') extendedNode.y = currYPos - 25;
            if (node.type === 'Target' && node.subtype === '1') extendedNode.y = currYPos - 10;
            if (node.type === 'Target' && node.subtype === '2') extendedNode.y = currYPos + 5;
            if (node.type === 'Target' && node.subtype === '3') extendedNode.y = currYPos + 20;
            if (node.type === 'Target' && node.subtype === '4') extendedNode.y = currYPos + 35;
            if (node.type === 'Target') extendedNode.x = columnXPos + currXPos * 3.0;
            if (node.type === 'Intermediation' && node.subtype === '0') extendedNode.y = currYPos - 200;
            if (node.type === 'Intermediation' && node.subtype === '1') extendedNode.y = currYPos - 170;
            if (node.type === 'Intermediation' && node.subtype === '2') extendedNode.y = currYPos - 140;
            if (node.type === 'Intermediation' && node.subtype === '3') extendedNode.y = currYPos - 110;
            if (node.type === 'Intermediation' && node.subtype === '4') extendedNode.y = currYPos - 80;
            if (node.type === 'Intermediation') extendedNode.x = columnXPos + currXPos * 1.05;
            if (node.type === 'Representation' && node.subtype === '0') extendedNode.y = currYPos - 70;
            if (node.type === 'Representation' && node.subtype === '1') extendedNode.y = currYPos - 50;
            if (node.type === 'Representation' && node.subtype === '2') extendedNode.y = currYPos - 30;
            if (node.type === 'Representation' && node.subtype === '3') extendedNode.y = currYPos - 10;
            if (node.type === 'Representation') extendedNode.x = columnXPos + currXPos * 1.7;
            if (node.type === 'Vis_var&tech' && node.subtype === '0') extendedNode.y = currYPos - 80;
            if (node.type === 'Vis_var&tech' && node.subtype === '1') extendedNode.y = currYPos - 30;
            if (node.type === 'Vis_var&tech') extendedNode.x = columnXPos * 1.22;

            // Filter Nodes with no output that or not end nodes

            const nextPos = node.value + propNodeMargin;
            currYPos += nextPos;
        });

        // node.value가 높은 순으로 각 열에서 나열
        const nodeValueDict: { [node: string]: SankeyNodeExtended[] } = {};
        extendedNodes.forEach((node) => {
            if (node.name! in nodeValueDict) {
                nodeValueDict[node.name!].push(node);
            } else {
                nodeValueDict[node.name!] = [node];
            }
        });
        // sort [key, value] entires.
        for (const [nodeName, nodeValue] of Object.entries(nodeValueDict)) {
            nodeValue.sort((a, b) => b.value - a.value);
            // console.log(nodeValue);
            nodeValue.forEach((node, orderIndex) => {
                //node value 크기의 순서대로 재배열 진행.
                // node.value = node.nodeOrderIndex;
                // node.nodeOrderIndex = orderIndex;
            });
        }

        // Fix collisions for node with y = 0
        const y0Nodes = extendedNodes.filter((node) => node.y === y0Pos);

        y0Nodes.forEach((node) => {
            const y0ColumnNodes = y0Nodes.filter((y0Node) => y0Node.x === node.x);
            if (y0ColumnNodes.length < 2) return;

            let yPos = y0Pos;

            y0ColumnNodes.forEach((y0ColumnNode) => {
                extendedNodes[y0ColumnNode.index].y = yPos;

                yPos += nextPosition;
            });
        });

        // Error Checking
        // if (entityHeight * columnNodes.length > height) throw new Error('With the given proportional sizes, the height of the largest column exceeds the size of the sankey diagram');
    });

    /* Sort nodes
  const sortSchema = ["primary", "secondary", "utility", "end"];

  extendedNodes.sort((a, b) => {
    return sortSchema.indexOf(a.type) - sortSchema.indexOf(b.type);
  }); */

    // Return calculated nodes
    return extendedNodes;
};
