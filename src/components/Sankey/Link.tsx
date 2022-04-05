// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './sandbox-styles.css';
import { FC } from 'react';
import { Utility } from '../../utils/sankey/basics';
import { SourceTargetIdLinksDict } from './Sankey';
import { useState } from 'react';
import { link } from 'fs';

export const LinkGrayColor: FC = () => (
    <linearGradient id="grayLinkColor">
        <stop offset="100%" stopColor={'hsl(0, 0%, 91%)'} />
        <stop offset="100%" stopColor={'hsl(0, 0%, 91%)'} />
    </linearGradient>
);

export const LinkBlueColor: FC = () => (
    <linearGradient id="blueLinkColor">
        <stop offset="100%" stopColor={'hsl(210, 80%, 60%)'} />
        <stop offset="100%" stopColor={'hsl(210, 80%, 60%)'} />
    </linearGradient>
);

export const LinkDeepBlueColor: FC = () => (
    <linearGradient id="deepBlueLinkColor">
        <stop offset="100%" stopColor={'hsl(225, 100%, 39%)'} />
        <stop offset="100%" stopColor={'hsl(225, 100%, 39%)'} />
    </linearGradient>
);

export const LinkLightBlueColor: FC = () => (
    <linearGradient id="lightBlueLinkColor">
        <stop offset="100%" stopColor={'hsl(110, 50%, 50%)'} />
        <stop offset="100%" stopColor={'hsl(110, 50%, 50%)'} />
    </linearGradient>
);

export const LinkRedColor: FC = () => (
    <linearGradient id="redLinkColor">
        <stop offset="100%" stopColor={'hsl(0, 60%, 55%)'} />
        <stop offset="100%" stopColor={'hsl(0, 60%, 55%))'} />
    </linearGradient>
);

// Props
interface Props {
    link: SankeyLinkExtended;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

// Component
export const Link = ({ link, originData, sourceTargetIdLinksDict, setOriginData }: Props) => {
    const [isHovering, setIsHovering] = useState(0);
    const styledRenderingData: SankeyData = { ...originData };
    styledRenderingData.positionStatus = 'clicked';
    styledRenderingData.links = styledRenderingData.links.map((link) => {
        return { ...link };
    });
    const styledSelectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];
    styledSelectedLinkParts.forEach((styledLink) => {
        if (styledLink.color !== 'grayLinkColor') return true;
        else return false;
    });
    const styled = { ...styledSelectedLinkParts };
    return (
        <>
            <path
                className="link"
                d={link.path}
                stroke={`url(#${link.color})`}
                strokeWidth={link.value}
                fill="none"
                // 링크 스타일함수만들고 거기에 적용
                // style={{ opacity: styled ? 0.5 : 1,  }}
                // onMouseOver={() => styled}
                // onMouseOut={() => styled}
                // style={() => {}}
                onClick={() => {
                    console.log('clicked link', link);
                    const renderingData: SankeyData = { ...originData };
                    renderingData.positionStatus = 'clicked';
                    renderingData.links = renderingData.links.map((link) => {
                        return { ...link };
                    });

                    const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];

                    renderingData.links.forEach((renderingLink) => {
                        renderingLink.color = 'grayLinkColor'; // 초기 칼라

                        renderingLink.status = undefined; // 초기 상태

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                if (
                                    (renderingLink.valueid === 'repb' && renderingLink.paperName === 'CAA20') ||
                                    'SCS19' ||
                                    'JTM11' ||
                                    'MDD10' ||
                                    'LJC18' ||
                                    'CGK21' ||
                                    'YSK14' ||
                                    'GYS14' ||
                                    'MDJW07' ||
                                    'MDDD16'
                                ) {
                                    if (renderingLink.source > 50) {
                                        renderingLink.color = `lightBlueLinkColor`;
                                        renderingLink.status = 'selected';
                                        if (renderingLink.status === 'selected') {
                                        }
                                    } else renderingLink.color = `blueLinkColor`;
                                    renderingLink.status = 'selected';
                                } else if ((renderingLink.valueid === 'repea' && renderingLink.paperName === 'GGS12ST') || 'YFS10' || 'LGX16' || 'FAKM15' || 'FA20' || 'WHWS12') {
                                    if (renderingLink.valueid === 'repea') {
                                        console.log('red');
                                        renderingLink.color = `redLinkColor`;
                                        renderingLink.status = 'selected';
                                    } else if (renderingLink.valueid !== 'repea') {
                                        renderingLink.color = `redLinkColor`;
                                        renderingLink.status = 'selected';
                                    }
                                }
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
                    // console.log('selectedLinkParts', selectedLinkParts);
                    setOriginData(renderingData);
                }}
            >
                <title>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
            </path>
        </>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const frontLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName) {
            renderingLink.color = `blueLinkColor`;
            renderingLink.valueid = 'selected';
            if (renderingLink.source >= 100) {
                renderingLink.color = `lightBlueLinkColor`;
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
        }); //recursive function
    });
}

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
            renderingLink.color = `blueLinkColor`;
            renderingLink.valueid = 'selected';
            if (renderingLink.source >= 50) {
                renderingLink.color = `lightBlueLinkColor`;
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
        }); //recursive function
    });
}
