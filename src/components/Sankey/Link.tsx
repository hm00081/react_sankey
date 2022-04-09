// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './sandbox-styles.css';
import { FC } from 'react';
import { Utility } from '../../utils/sankey/basics';
import { SourceTargetIdLinksDict } from './Sankey';
import { useState } from 'react';
import { link } from 'fs';
import { setOriginalNode } from 'typescript';

export const LinkGrayColor: FC = () => (
    <linearGradient id="grayLinkColor">
        <stop offset="100%" stopColor={'hsl(10, 0%, 85%)'} />
        <stop offset="100%" stopColor={'hsl(10, 0%, 85%)'} />
    </linearGradient>
);

export const LinkDarkGrayColor: FC = () => (
    <linearGradient id="grayDarkLinkColor">
        <stop offset="100%" stopColor={'hsl(10, 0%, 50%)'} />
        <stop offset="100%" stopColor={'hsl(10, 0%, 50%)'} />
    </linearGradient>
);

export const LinkBlackColor: FC = () => (
    <linearGradient id="blackLinkColor">
        <stop offset="100%" stopColor={'hsl(10, 0%, 80%)'} />
        <stop offset="100%" stopColor={'hsl(10, 0%, 80%)'} />
    </linearGradient>
);

export const LinkBlueColor: FC = () => (
    <linearGradient id="blueLinkColor">
        <stop offset="100%" stopColor={'hsl(210, 80%, 55%)'} />
        <stop offset="100%" stopColor={'hsl(210, 80%, 55%)'} />
    </linearGradient>
);

export const LinkDeepBlueColor: FC = () => (
    <linearGradient id="blueLightLinkColor">
        <stop offset="100%" stopColor={'hsl(210, 80%, 77%)'} />
        <stop offset="100%" stopColor={'hsl(210, 80%, 77%)'} />
    </linearGradient>
);

export const LinkGreenColor: FC = () => (
    <linearGradient id="greenLinkColor">
        <stop offset="100%" stopColor={'hsl(110, 50%, 55%)'} />
        <stop offset="100%" stopColor={'hsl(110, 50%, 55%)'} />
    </linearGradient>
);

export const LinkLightGreenColor: FC = () => (
    <linearGradient id="greenLightLinkColor">
        <stop offset="100%" stopColor={'hsl(110, 50%, 60%)'} />
        <stop offset="100%" stopColor={'hsl(110, 50%, 60%)'} />
    </linearGradient>
);

export const LinkOrangeColor: FC = () => (
    <linearGradient id="orangeLinkColor">
        <stop offset="100%" stopColor={'hsl(37, 100%, 44%)'} />
        <stop offset="100%" stopColor={'hsl(37, 100%, 44%)'} />
    </linearGradient>
);

export const LinkRubyColor: FC = () => (
    <linearGradient id="rubyLinkColor">
        <stop offset="100%" stopColor={'hsl(353, 86%, 38%)'} />
        <stop offset="100%" stopColor={'hsl(353, 86%, 38%)'} />
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
    // const [isHovering, setIsHovering] = useState(0);
    // const [clickedColor, setClickedColor] = useState<SankeyData>(originData);
    return (
        <>
            <path
                className="link"
                d={link.path}
                stroke={`url(#${link.color})`}
                strokeWidth={link.value}
                fill="none"
                onClick={() => {
                    console.log('clicked link', link);
                    const renderingData: SankeyData = { ...originData };
                    renderingData.positionStatus = 'clicked';
                    renderingData.links = renderingData.links.map((link) => {
                        return { ...link };
                    });

                    const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];

                    renderingData.links.forEach((renderingLink) => {
                        renderingLink.color = 'grayLinkColor';
                        renderingLink.valueid = undefined; // 초기 상태
                        renderingLink.status = undefined;

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                if ((renderingLink.color = 'blueLinkColor')) {
                                    renderingLink.color = 'blueLinkColor';
                                    renderingLink.valueid = 'selected';
                                    renderingLink.status = 'selected';
                                } else renderingLink.color = 'blueLightLinkColor';
                                // blueFlag = true;
                                // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
                                // renderingLink.valueid = 'selected';
                                // redFlag = true;
                                // renderingLink.color = renderingLink.color = 'blueLinkColor' ? 'blueLinkColor' : 'redLinkColor';
                                if (renderingLink.target >= 76 && renderingLink.target < 83) renderingLink.color = 'orangeLinkColor';
                                renderingLink.status = 'selected';
                                renderingLink.status = 'selected';
                                if (renderingLink.target > 82 && renderingLink.target < 100) renderingLink.color = 'rubyLinkColor';
                                renderingLink.status = 'selected';
                                renderingLink.status = 'selected';
                                if (renderingLink.source >= 100) renderingLink.color = 'greenLinkColor'; //색상 변경 필요하면 변경.
                                renderingLink.valueid = 'selected';
                                renderingLink.status = 'selected';
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
            if ((renderingLink.color = 'blueLinkColor')) renderingLink.color = 'blueLinkColor';
            renderingLink.valueid = 'selected';
            renderingLink.status = 'selected';
            // if ((renderingLink.status = undefined)) {
            //     renderingLink.color = 'blueLightLinkColor';
            // }
            // if ((renderingLink.valueid = undefined)) renderingLink.color = 'blueLightLinkColor';
            // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
            // renderingLink.valueid = 'selected';
            if (renderingLink.source >= 50) {
                renderingLink.color = 'greenLinkColor';
                renderingLink.status = 'selected';
                renderingLink.valueid = 'selected';
                // if ((renderingLink.status = undefined)) {
                //     renderingLink.color = 'greenLightLinkColor';
                // }
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
            if (renderingLink.source < 50) renderingLink.color = 'blueLinkColor';
            renderingLink.valueid = 'selected';
            renderingLink.status = 'selected';
            // if ((renderingLink.status = undefined)) {
            //     renderingLink.color = 'blueLightLinkColor';
            // }
            if (renderingLink.target >= 76 && renderingLink.target < 83) {
                renderingLink.color = 'orangeLinkColor';
                renderingLink.valueid = 'selected';
                renderingLink.status = 'selected';
            } else if (renderingLink.target > 82 && renderingLink.target < 100) {
                renderingLink.color = 'rubyLinkColor';
                renderingLink.valueid = 'selected';
                renderingLink.status = 'selected';
            } else if (renderingLink.source >= 100) {
                renderingLink.color = 'greenLinkColor';
                renderingLink.valueid = 'selected';
                renderingLink.status = 'selected';
            } else renderingLink.color = 'blueLinkColor';
            renderingLink.valueid = 'selected';
            renderingLink.status = 'selected';
            return true;
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
