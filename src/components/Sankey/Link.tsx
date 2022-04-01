// Types
import { path } from 'd3-path';
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData } from '../../types/sankey';
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
    links: SankeyLinkExtended[];
    // links: SankeyLink[];
    node: SankeyNodeExtended;
    nodes: SankeyNodeExtended[];
    color: string;
    valueid?: string;
    data: SankeyData;
};

const linkVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1,

        transition: {
            delay: 5,
            duaration: 10,
            type: 'tween',
        },
        background: 'white',
    },
};

// const color = `hsl(210, 80%, 0%)`;
// const colors = `hsl(210, 80%, 0%)`;

// Component
export const Link = ({ node, nodes, link }: Props) => {
    const gradId = `grad-${link.source}-${link.target}`;
    const [leaving, setLeaving] = useState<boolean>(false);
    const [hover, setHover] = useState(false);
    const onMouseOver = () => setHover(true);
    const onMouseLeave = () => setHover(false);
    const toggleLeaving = () => setLeaving((prev) => !prev);

    // const extendedLinks = links.map((link) => {
    //     const sourceNode = nodes.filter((node) => node.index === link.source)[0];
    //     const targetNode = nodes.filter((node) => node.index === link.target)[0];
    //     const valueid = link.valueid;
    //     const extendedLink: SankeyLinkExtended = {
    //         ...link,
    //         sourceNode,
    //         sourceNodeLink: 0, // 링크 분리를 위한 값(type) 추가  0으로 해도 상관 없음.
    //         targetNode,
    //         valueid,
    //         targetNodeLink: 0, // 링크 분리를 위한 값(type) 추가

    //         path: '',
    //         sourceOrderIndex: 0,
    //         targetOrderIndex: 0,
    //         sourceNodeOrderIndex: 0,
    //         targetNodeOrderIndex: 0,
    //     };
    //     // sourceNode.sourceNodeType += link.value;
    //     // targetNode.targetNodeType += link.value;

    //     return extendedLink;
    // });
    // link로 새로운 딕셔너리 만들어서 각 link간의 연결성 구하고
    const linkDict: { [node: string]: SankeyLinkExtended[] } = {};
    // // console.log(link.sourceNode.name);
    // links.forEach((link) => {
    //     if (link.sourceNode.name! in linkDict) {
    //         linkDict[link.sourceNode.name!].push(link);
    //     } else {
    //         linkDict[link.sourceNode.name!] = [link];
    //     }
    // });

    const word = <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize>;
    // console.log(link.value);
    // linearGradient id 안에 path에 저장
    // how to merge condition path ??
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
