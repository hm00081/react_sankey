// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './sandbox-styles.css';
import { FC } from 'react';
import { Utility } from '../../utils/sankey/basics';
import { SourceTargetIdLinksDict } from './Sankey';

export const LinkGrayColor: FC = () => (
    <linearGradient id="grayLinkColor">
        <stop offset="100%" stopColor={'hsl(0, 0%, 80%)'} />
        <stop offset="100%" stopColor={'hsl(0, 0%, 80%)'} />
    </linearGradient>
);

export const LinkBlueColor: FC = () => (
    <linearGradient id="blueLinkColor">
        <stop offset="100%" stopColor={'hsl(210, 100%, 50%)'} />
        <stop offset="100%" stopColor={'hsl(210, 100%, 50%)'} />
    </linearGradient>
);

export const LinkLightBlueColor: FC = () => (
    <linearGradient id="lightBlueLinkColor">
        <stop offset="100%" stopColor={'hsl(210, 100%, 80%)'} />
        <stop offset="100%" stopColor={'hsl(210, 100%, 80%)'} />
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
                        // if (renderingLink.color === `blueLinkColor`) {
                        //     renderingLink.color = 'lightBlueLinkColor';
                        // } else {
                        //     renderingLink.color = 'grayLinkColor';
                        // }
                        renderingLink.color = 'grayLinkColor';

                        renderingLink.valueid = undefined;

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                renderingLink.color = `blueLinkColor`;
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
            return true;
        } else {
            return false;
        }
    });

    frontLinks.forEach((linkPart) => {
        findFrontLinks({
            linkPart,
            renderingData,
        });
    });
}

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;

    const backLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
            renderingLink.color = `blueLinkColor`;
            renderingLink.valueid = 'selected';
            return true;
        } else {
            return false;
        }
    });

    backLinks.forEach((linkPart) => {
        findBackLinks({
            linkPart,
            renderingData,
        });
    });
}
