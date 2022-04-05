// Types
import { SankeyData, SankeyNode, SankeyLink, SankeyStatus, SankeyNodeExtended, SankeyLinkExtended } from '../../types/sankey';
import { useState, useEffect } from 'react';
// Components
import { Link, LinkBlueColor, LinkGrayColor, LinkLightBlueColor, LinkRedColor, LinkDeepBlueColor } from './Link';
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
import styled from 'styled-components';
import { Papers } from '../../data/AllPaperData';

const Links = styled.path``;

// Props
interface Props {
    width: number;
    height: number;
    paddingTop?: number;
    paddingLeft?: number;
    originData: SankeyData;
    nodeWidth?: number;
    nodeHeight?: number;
    nodeMargin?: number;
    minLinkBreadth?: number;
    maxLinkBreadth?: number;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

export interface SourceTargetIdLinksDict {
    [sourceTargetId: string]: SankeyLink[];
}

// Component
export const Sankey = ({ width, height, originData, paddingTop = 0, paddingLeft = 0, nodeWidth = 20, nodeHeight = 20, nodeMargin = 5, minLinkBreadth, maxLinkBreadth, setOriginData }: Props) => {
    const [nodes, setNodes] = useState<SankeyNodeExtended[]>([]);
    const [links, setLinks] = useState<SankeyLinkExtended[]>([]);
    const [renderingData, setRenderingData] = useState<SankeyData>({ ...originData });
    const [sourceTargetIdLinksDict, setSourceTargetIdLinksDict] = useState<SourceTargetIdLinksDict>({});

    useEffect(() => {
        const sourceTargetIdLinksDict: SourceTargetIdLinksDict = {};

        originData.links.forEach((link1) => {
            originData.links.forEach((link2) => {
                if (link1.source === link2.source && link1.target === link2.target && link1.valueid === link2.valueid) {
                    const sourceTargetId = `${link2.source}-${link2.target}-${link2.valueid}`;

                    if (sourceTargetId in sourceTargetIdLinksDict) {
                        const alreadySameLink = sourceTargetIdLinksDict[sourceTargetId].find((alreadyLink) => alreadyLink === link2);
                        if (!alreadySameLink) {
                            sourceTargetIdLinksDict[sourceTargetId].push(link2);
                        }
                    } else {
                        sourceTargetIdLinksDict[sourceTargetId] = [link2];
                    }
                }
            });
        });

        const mergedLinks = [] as SankeyLink[];
        for (const [sourceTargetId, sameSourceTargetLinks] of Object.entries(sourceTargetIdLinksDict)) {
            const mergedLink = sameSourceTargetLinks.reduce<SankeyLink>(
                (mergedLink, partLink) => {
                    mergedLink.value += partLink.value;
                    return mergedLink;
                },
                { ...sameSourceTargetLinks[0], value: 0 }
            );
            mergedLinks.push(mergedLink);
        }

        const renderingData: SankeyData = { ...originData };
        renderingData.links = mergedLinks;
        setSourceTargetIdLinksDict(sourceTargetIdLinksDict);
        const nodes = calcSankeyNodes(renderingData, width, height, paddingTop, paddingLeft, nodeWidth, nodeHeight, nodeMargin, maxLinkBreadth);
        // console.log('nodes', nodes);
        setNodes(nodes);
        // const links = calcSankeyLinks(renderingData, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth, renderingData.positionStatus === 'init'); // 이거로 하면 모든 링크 위치 분리되어 나타냄
        const links = calcSankeyLinks(renderingData, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);
        // console.log('links', links);
        setLinks(links);
    }, [originData]);
    // console.log(sourceTargetIdLinksDict);

    return (
        <svg className="hello" width={width} height={height}>
            <LinkGrayColor />
            <LinkBlueColor />
            <LinkDeepBlueColor />
            <LinkLightBlueColor />
            <LinkRedColor />
            {links.map((link, i) => (
                <Link key={`link-${i}`} link={link} originData={originData} sourceTargetIdLinksDict={sourceTargetIdLinksDict} setOriginData={setOriginData} />
            ))}
            {nodes.map((node, i) => (
                // @ts-ignore
                <Node className="node" key={`node-${i}`} node={node} width={width} height={height} />
            ))}
        </svg>
    );
};
