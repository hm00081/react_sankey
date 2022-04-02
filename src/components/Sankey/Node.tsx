// Types
import { SankeyNodeExtended, SankeyLinkExtended, SankeyData, SankeyNode, SankeyLink, SankeyStatus } from '../../types/sankey';
import './Sankey.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from './Link';
// styled
import styled from 'styled-components';

//@ts-ignore
const Rect = styled.rect`
    &: hover {
        opacity: 1;
    }
`;

const NodeName = styled.text`
    margin-top: 12px;
`;

const NodePos = styled.g`
    position: fixed;
    margin-top: 102px;
`;

// Props
type Props = {
    node: SankeyNodeExtended;
    link: SankeyLinkExtended;
    data: SankeyData;
    nodes: SankeyNode;
    links: SankeyLink;
    depth: number;
    index: number;
    x0: number;
    x1: number;
    y0: number;
    y1: number;
    value: number;
    color: string;
    label: string;
    formattedValue: string;
    layer: number;
    x: number;
    y: number;
    width: number;
    height: number;
};

// //@ts-ignore
// const useHover = (onClick) => {
//     const element = useRef();
//     useEffect(() => {
//         // Mount 상태에서만 동작한다. didUpdate
//         if (element.current) {
//             //@ts-ignore
//             element.current.addEventListener('mouseenter', onClick);
//         }
//         return () => {
//             // WillUnMount 때 호출 한다.
//             if (element.current) {
//                 //@ts-ignore
//                 element.current.removeEventListener('mouseenter', onClick);
//             }
//         };
//     }, []);
//     return element;
// };

function useHovers() {
    const [hovered, setHovered] = useState<boolean>();
    const eventHandlers = useMemo(
        () => ({
            onMouseOver() {
                setHovered(true);
                console.log(1);
            },
            onMouseOut() {
                setHovered(false);
                console.log(2);
            },
        }),
        []
    );

    return [hovered, eventHandlers];
}

//@ts-ignore
const Item = ({ children }) => {
    const [hovered, eventHandlers] = useHovers();

    return <li {...eventHandlers}>Item: {hovered && children}</li>;
};

// Component
export const Node = ({ node, width, height }: Props) => {
    const endNode = node.x + node.width > width - node.width;
    const size = width < height ? width : height;
    // Calculate Text Properties
    const textX = !endNode ? node.x + node.width : node.x;
    const textAnchor = !endNode ? 'start' : 'end';
    const textMargin = !endNode ? 4 : -4;
    // const textTitleSize = (size / 100) * 1.35;
    const textTitleSize = Math.log(10) * 4;
    // const textTitleSize = node.value / 3;
    const textValueSize = (size / 100) * 1;
    let textXPosition = textX + textMargin + node.width * 0.3;
    let textYPosition = node.y + node.value / 2 + textMargin * 1;
    const [hover, setHover] = useState<boolean>(false);

    const handleMouseIn = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    // console.log(node.type);
    if (node.type === 'Vis_var&tech') {
        textXPosition = textX + textMargin;
        // textYPosition = textYPosition - textMargin * 3.6;
    }
    if (node.value == 0) {
        node.value = 2;
    }

    return (
        <NodePos>
            <rect onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} x={node.x} y={node.y} width={node.width} height={node.value} fill={node.color}>
                <title>{`${node.name}: ${node.value}`}</title>
            </rect>
            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                {/* <NodeName style={{ {fontSize: (node.value > 1) textTitleSize}, fontWeight: 550, textTransform: 'uppercase' }} textAnchor={textAnchor}> */}
                <NodeName style={{ fontSize: node.value > 8 ? textTitleSize : textTitleSize, fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
                {/* <text y={textValueSize} style={{ fontSize: textValueSize }} textAnchor={textAnchor}>
                    {node.value}
                </text> */}
            </g>
        </NodePos>
    );
};
