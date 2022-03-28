// Types
import { SankeyData, SankeyNode, SankeyLink, SankeyStatus } from '../../types/sankey';
import { useState, useEffect } from 'react';
// Components
import { Link } from './Link';
import { Node } from './Node';
import './Sankey.css';
// Utils
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from '../WordCloud/Word';
import './sandbox-styles.css';
import { toUnitless } from '@mui/material/styles/cssUtils';
// Styles
// styled
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { Papers } from '../../data/AllPaperData';

const Links = styled.path``;

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
    // console.log(nodes);
    const [hover, setHover] = useState(false);
    const onMouseOver = () => setHover(true);
    const onMouseLeave = () => setHover(false);
    const links = calcSankeyLinks(data, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);
    // console.log(data);
    const word = <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize>;
    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);
    const title = [{ name: 'paper' }, { name: 'target' }, { name: 'intermediation' }, { name: 'representation' }, { name: 'vis_var&tech' }];
    const titles = ['paper', 'target', 'intermediation', 'representation', 'vis_tar&tech'];
    //@ts-ignore

    return (
        <svg className="hello" width={width} height={height}>
            {columns.map((column, i) => (
                <>
                    {/* <rect x={(width / columns.length) * i} y={-15} width={width / columns.length} height={height} fill="#eee"></rect> */}
                    <text className="font" x={(width / columns.length) * i + width / columns.length / 2} y={height * 0.03} textAnchor="middle"></text>
                </>
            ))}

            {links.map((link, i) => (
                //@ts-ignore
                <Link className="link" key={`link-${i}`} link={link}></Link>
            ))}
            <>
                {nodes.map((node, i) => (
                    // @ts-ignore
                    <Node className="node" key={`node-${i}`} node={node} width={width} height={height}>
                        {/* {data.nodes.map((node, i) => {
                            for (let i = 0; i < 1; i++) {
                                console.log('0382');
                            }
                        })}*/}
                    </Node>
                ))}
            </>
        </svg>
    );
};
