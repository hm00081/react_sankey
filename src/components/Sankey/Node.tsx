// Types
import { SankeyNodeExtended, SankeyLinkExtended } from '../../types/sankey';
import styled from 'styled-components';
import './Sankey.css';
import { useState, useEffect, useRef } from 'react';

const Rect = styled.rect``;

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

//@ts-ignore
const useHover = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // Mount 상태에서만 동작한다. didUpdate
        if (element.current) {
            //@ts-ignore
            element.current.addEventListener('mouseenter', onClick);
        }
        return () => {
            // WillUnMount 때 호출 한다.
            if (element.current) {
                //@ts-ignore
                element.current.removeEventListener('mouseenter', onClick);
            }
        };
    }, []);
    return element;
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
    const textXPosition = textX + textMargin;
    const textYPosition = node.y + node.height / 2 + 3.5;
    var hover = {
        opacity: 1,
    };
    const [state, setState] = useState(0);
    // console.log(node.type);

    return (
        <NodePos>
            <rect x={node.x} y={node.y} width={node.width} height={node.height} fill={node.color}>
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
