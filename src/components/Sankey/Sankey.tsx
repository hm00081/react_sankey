// Types
import { SankeyData, SankeyNode, SankeyLink, SankeyStatus } from '../../types/sankey';

// Components
import { Link } from './Link';
import { Node } from './Node';
import './Sankey.css';
// Utils
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';
import styled from 'styled-components';

const BigBox = styled.g`
    background-color: #eee;
`;

// Props
type Props = {
    width: number;
    height: number;
    paddingTop?: number;
    paddingLeft?: number;
    data: SankeyData;
    // nodes?: SankeyNode;
    // links?: SankeyLink | undefined;
    // status?: SankeyStatus | undefined;
    /** Node width is proportional to the height of the Sankey diagram */
    nodeWidth?: number;
    nodeHeight?: number;
    nodeMargin?: number;
    minLinkBreadth?: number;
    maxLinkBreadth?: number;
};

// Component
export const Sankey = ({ width, height, data, paddingTop = 0, paddingLeft = 0, nodeWidth = 20, nodeHeight = 20, nodeMargin = 5, minLinkBreadth, maxLinkBreadth }: Props) => {
    const nodes = calcSankeyNodes(data, width, height, paddingTop, paddingLeft, nodeWidth, nodeHeight, nodeMargin, maxLinkBreadth);

    const links = calcSankeyLinks(data, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);
    // console.log(links);
    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);

    return (
        <svg className="hello" width={width} height={height}>
            {columns.map((column, i) => (
                <>
                    <rect x={(width / columns.length) * i} y={-15} width={width / columns.length} height={height} fill="#eee" />
                    <text className="font" x={(width / columns.length) * i + width / columns.length / 2} y={height * 0.03} textAnchor="middle">
                        {column}
                    </text>
                </>
            ))}
            {links.map((link, i) => (
                //@ts-ignore
                <Link key={`link-${i}`} link={link} />
            ))}
            {nodes.map((node, i) => (
                //@ts-ignore
                <Node key={`node-${i}`} node={node} width={width} height={height} />
            ))}
        </svg>
    );
};
