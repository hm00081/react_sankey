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
    const propNodeHeight = nodeHeight * (height / 100);
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
        x: 0,
        y: 0,
        width: propNodeWidth,
        height: propNodeHeight,
    }));

    // Calc value for each node
    links.forEach((link) => {
        extendedNodes[link.source].output += link.value;
        extendedNodes[link.target].input += link.value;
    });

    extendedNodes.forEach((node) => (node.value = Math.max(node.input, node.output)));

    // Filter all columns
    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);
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
        const columnNodes = extendedNodes.filter((node) => node.type === column);
        let columnXPos = 0;

        // Set x pos only for center and last nodes
        if (i === columns.length - 1) columnXPos = columnWidth * i - propNodeWidth;
        else if (i > 0) columnXPos = columnWidth * i + propNodeWidth / 2;

        // Calculate starting position for node - alignment center
        const entityHeight = (propMaxLinkBreadth && propMaxLinkBreadth > propNodeHeight ? propMaxLinkBreadth : propNodeHeight) + propNodeMargin;

        const startP = height / 2 - (entityHeight * columnNodes.length) / 2 + propPaddingTop;

        let currYPos = startP;
        let currXPos = startP;

        const nextPos = propMaxLinkBreadth && propMaxLinkBreadth > propNodeHeight ? propMaxLinkBreadth + propNodeMargin : propNodeHeight + propNodeMargin;

        const y0Pos = propMaxLinkBreadth ? (propMaxLinkBreadth - propNodeWidth) / 2 + propPaddingTop : propPaddingTop;

        // Add node x pos and calc node y pos
        columnNodes.forEach((node) => {
            // Get Extended Node
            const extendedNode = extendedNodes[node.index];

            // Assign values
            extendedNode.x = columnXPos;
            extendedNode.y = currYPos;

            // Temp for nicer view
            // if (node.type === 'Intermediation') extendedNode.y = currYPos + height / 4 + 90;
            // if (node.type === 'Target') extendedNode.x = currXPos - 35;
            // if (node.type === 'Intermediation') extendedNode.x = currXPos + 180;
            // if (node.type === 'Representation') extendedNode.x = currXPos + 630;
            // if (node.type === 'Vis_var&tech') extendedNode.x = currXPos + height * 1.32;
            // if (node.type === 'Representation') extendedNode.x = currXPos + 200;
            if (node.type === 'Target' && node.subtype === '0') extendedNode.y = currYPos - 18;
            if (node.type === 'Target' && node.subtype === '1') extendedNode.y = currYPos - 14;
            if (node.type === 'Target' && node.subtype === '2') extendedNode.y = currYPos - 10;
            if (node.type === 'Target' && node.subtype === '3') extendedNode.y = currYPos - 6;
            if (node.type === 'Target' && node.subtype === '4') extendedNode.y = currYPos - 2;
            if (node.type === 'Intermediation' && node.subtype === '0') extendedNode.y = currYPos - 45;
            if (node.type === 'Intermediation' && node.subtype === '1') extendedNode.y = currYPos - 30;
            if (node.type === 'Intermediation' && node.subtype === '2') extendedNode.y = currYPos - 15;
            if (node.type === 'Intermediation' && node.subtype === '3') extendedNode.y = currYPos - 0;
            if (node.type === 'Intermediation' && node.subtype === '4') extendedNode.y = currYPos + 15;
            if (node.type === 'Representation' && node.subtype === '0') extendedNode.y = currYPos - 20;
            if (node.type === 'Representation' && node.subtype === '1') extendedNode.y = currYPos - 5;
            if (node.type === 'Representation' && node.subtype === '2') extendedNode.y = currYPos + 10;
            if (node.type === 'Representation' && node.subtype === '3') extendedNode.y = currYPos + 25;
            if (node.type === 'Vis_var&tech' && node.subtype === '0') extendedNode.y = currYPos - 50;
            if (node.type === 'Vis_var&tech' && node.subtype === '1') extendedNode.y = currYPos + 50;

            // Filter Nodes with no output that or not end nodes
            if (node.output === 0 && node.input !== 0 && node.type !== 'vis_var&vis_tech') {
                // extendedNode.y = y0Pos;
                // extendedNode.x = columnXPos + columnWidth / 3;
            }

            currYPos += nextPos;
        });

        // Fix collisions for node with y = 0
        const y0Nodes = extendedNodes.filter((node) => node.y === y0Pos);

        y0Nodes.forEach((node) => {
            const y0ColumnNodes = y0Nodes.filter((y0Node) => y0Node.x === node.x);
            if (y0ColumnNodes.length < 2) return;

            let yPos = y0Pos;

            y0ColumnNodes.forEach((y0ColumnNode) => {
                extendedNodes[y0ColumnNode.index].y = yPos;

                yPos += nextPos;
            });
        });

        // Error Checking
        if (entityHeight * columnNodes.length > height) throw new Error('With the given proportional sizes, the height of the largest column exceeds the size of the sankey diagram');
    });

    /* Sort nodes
  const sortSchema = ["primary", "secondary", "utility", "end"];

  extendedNodes.sort((a, b) => {
    return sortSchema.indexOf(a.type) - sortSchema.indexOf(b.type);
  }); */

    // Return calculated nodes
    return extendedNodes;
};
