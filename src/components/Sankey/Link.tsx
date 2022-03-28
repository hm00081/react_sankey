// Types
import { path } from 'd3-path';
import { SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from '../../types/sankey';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from '../WordCloud/Word';
import './sandbox-styles.css';
import ReactWordcloud from 'react-wordcloud';

const WordCloud = styled.div`
    width: 100px;
    height: 100px;
    background: white;
`;

const Path = styled(motion.path)`
    background-color: white;
`;

// Props
type Props = {
    link: SankeyLinkExtended;
    links: SankeyLink[];
    node: SankeyNodeExtended;
    color: string;
    valueid?: string;
};

const linkVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1,

        transition: {
            delay: 1,
            duaration: 1,
            type: 'tween',
        },
        background: 'white',
    },
};

// const color = `hsl(210, 80%, 0%)`;
// const colors = `hsl(210, 80%, 0%)`;

// Component
export const Link = ({ node, link }: Props) => {
    const gradId = `grad-${link.source}-${link.target}`;
    const [leaving, setLeaving] = useState<boolean>(false);
    const [hover, setHover] = useState(false);
    const onMouseOver = () => setHover(true);
    const onMouseLeave = () => setHover(false);
    const toggleLeaving = () => setLeaving((prev) => !prev);
    const word = <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize>;
    // console.log(link.value);
    return (
        <>
            <linearGradient id={gradId}>
                <stop offset="0%" stopColor={link.color} />
                <stop offset="100%" stopColor={link.color} />
            </linearGradient>
            <AnimatePresence initial={false}>
                <Path whileHover="hover" initial="normal" transition={{ type: 'tween' }} variants={linkVariants} d={link.path} stroke={`url(#${gradId})`} strokeWidth={link.value} fill="none">
                    <title>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
                </Path>
            </AnimatePresence>
        </>
    );
};
