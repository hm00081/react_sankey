// Types
import { SankeyNodeExtended, SankeyLinkExtended, SankeyData, SankeyNode, SankeyLink, LinkColor } from '../../types/sankey';
import './Sankey.css';
import { SourceTargetIdLinksDict } from './Sankey';
import { useState, useEffect, useRef, useMemo } from 'react';

// styled
import styled from 'styled-components';

//@ts-ignore
// const Rect = styled.rect`
//     &: hover {
//         opacity: 1;
//     }
// `;

const NodeName = styled.text`
    margin-top: 12px;
`;

const NodePos = styled.g`
    position: fixed;
    margin-top: 102px;
`;

// Props
interface Props {
    node: SankeyNodeExtended;
    link: SankeyLinkExtended;
    exlink: SankeyLinkExtended[];
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
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

// Component
export const Node = ({ node, width, height, originData, sourceTargetIdLinksDict, setOriginData, exlink, link }: Props) => {
    const endNode = node.x + node.width > width - node.width;
    const size = width < height ? width : height;
    // Calculate Text Properties
    const textX = !endNode ? node.x + node.width : node.x;
    const textAnchor = !endNode ? 'start' : 'end';
    const textMargin = !endNode ? 4 : -4;
    const textTitleSize = Math.log(10) * 4;
    const textValueSize = (size / 100) * 1;
    let textXPosition = textX + textMargin + node.width * 0.3;
    let textYPosition = node.y + node.value / 2 + textMargin * 1;

    if (node.type === 'Vis_var&tech') {
        textXPosition = textX + textMargin;
    }
    if (node.value == 0) {
        node.value = 2;
    }

    return (
        //노드에 link와 같이 클릭시 노드에 있는 링크들만 보여주도록 표현.
        <NodePos>
            <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.value}
                fill={node.color}
                onClick={() => {
                    console.log('originData', originData);
                    const renderingData: SankeyData = { ...originData };
                    renderingData.positionStatus = 'clicked';
                    renderingData.links = renderingData.links.map((link) => {
                        return { ...link };
                    });
                    const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];

                    renderingData.links.forEach((renderingLink) => {
                        renderingLink.color = 'grayLinkColor';
                        renderingLink.valueid = undefined; // 초기 상태

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                if ((renderingLink.color = 'blueLinkColor')) renderingLink.color = 'blueLinkColor';
                                renderingLink.subcolor = 'blueLightLinkColor';
                                renderingLink.valueid = 'selected';
                                // blueFlag = true;
                                // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
                                // renderingLink.valueid = 'selected';
                                // redFlag = true;
                                // renderingLink.color = renderingLink.color = 'blueLinkColor' ? 'blueLinkColor' : 'redLinkColor';
                                if (renderingLink.source >= 50 && renderingLink.source < 100) renderingLink.color = 'greenLinkColor';
                                renderingLink.subcolor = 'greenLightLinkColor';
                                renderingLink.valueid = 'selected';
                                if (renderingLink.source >= 100) renderingLink.color = 'greenLinkColor'; //색상 변경 필요하면 변경.
                                renderingLink.subcolor = 'greenLightLinkColor';
                                renderingLink.valueid = 'selected';
                            }
                        });
                    });

                    selectedLinkParts.forEach((selectedLinkPart) => {
                        findFrontLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                        findBackLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                    });
                    console.log('selectedLinkParts', selectedLinkParts);
                    setOriginData(renderingData);
                }} // onClick
            >
                <title>{`${node.name}: ${node.value}`}</title>
            </rect>
            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                <NodeName style={{ fontSize: node.value > 8 ? textTitleSize : textTitleSize, fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
            </g>
        </NodePos>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const frontLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName) {
            if ((renderingLink.color = 'blueLinkColor')) renderingLink.color = 'blueLinkColor';
            linkPart.subcolor = 'blueLightLinkColor';
            renderingLink.valueid = 'selected';
            // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
            // renderingLink.valueid = 'selected';
            if (renderingLink.source >= 50) {
                renderingLink.color = 'greenLinkColor';
                linkPart.subcolor = 'greenLightLinkColor';
                renderingLink.valueid = 'selected';
            } else return true;
        } else {
            return false;
        }
    });

    frontLinks.forEach((linkPart) => {
        findFrontLinks({
            linkPart,
            renderingData,
        }); //recursive forward calculate function
    });
}

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
            if ((renderingLink.color = 'blueLinkColor')) renderingLink.color = 'blueLinkColor';
            renderingLink.subcolor = 'blueLightLinkColor';
            renderingLink.valueid = 'selected';
            // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
            // renderingLink.valueid = 'selected';
            if (renderingLink.source >= 50) {
                renderingLink.color = 'greenLinkColor';
                renderingLink.subcolor = 'greenLightLinkColor';
                renderingLink.valueid = 'selected';
            } else return true;
        } else {
            return false;
        }
    });

    backLinks.forEach((linkPart) => {
        findBackLinks({
            linkPart,
            renderingData,
        }); //recursive backward calculate  function
    });
}
