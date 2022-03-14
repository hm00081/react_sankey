// Types
import { path } from 'd3-path';
import { SankeyLinkExtended, SankeyNodeExtended } from '../../types/sankey';

// Props
type Props = {
    link: SankeyLinkExtended;
    node: SankeyNodeExtended;
};

// Component
export const Link = ({ node, link }: Props) => {
    const gradId = `grad-${link.source}-${link.target}`;

    return (
        <>
            <linearGradient id={gradId}>
                <stop offset="0%" stopColor={link.sourceNode.color} />
                <stop offset="100%" stopColor={link.targetNode.color} />
            </linearGradient>
            <svg>
                <path d={link.path} stroke={`url(#${gradId})`} strokeWidth={link.value / 1} fill="none">
                    <title>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
                </path>
            </svg>
        </>
    );
};
