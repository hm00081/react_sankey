// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { SankeyData } from './types/sankey';
import { SankeyLink, SankeyStatus } from '../src/types';

// Data
import { PaperNode } from './data/PaperNode';
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys } from './data/AllPaperData';

// import { CAA20 as rawData } from './data/CAA20';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { nodeModuleNameResolver } from 'typescript';
import { NONAME } from 'dns';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// console.log(Status.length);
//@ts-ignore
const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys];
const datas = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(311, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[0],
    //@ts-ignore
    status: Status[0],
};

const targetaa = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[1],
    //@ts-ignore
    status: Status[1],
};

const targetab = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[2],
    //@ts-ignore
    status: Status[2],
};

const targetba = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[3],
    //@ts-ignore
    status: Status[3],
};

const targetbb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[4],
    //@ts-ignore
    status: Status[4],
};

const targetca = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[5],
    //@ts-ignore
    status: Status[5],
};

const repa = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[6],
    //@ts-ignore
    status: Status[6],
};

const repb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),

    links: AllPaperDatas.map((link) => {
        let color: string = '';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, AllPaperDatas)) {
            color = `hsl(210, 100%, 50%)`;
            // console.log('blue');
        } else {
            color = `hsl(0, 0%, 80%)`;
            // console.log('gray');
        }
        return { ...link, color };
        // 뭔가 각 link마다 식별할 수 있는 id 같은게 있으면 될것 같소 ㅋㅋ (현재 모든 value에 의해 색상이 칠해지고 있음..)
        // 각 link마다 id가 있지만 현재 모든 동일 value를 합치며 link가 그려지는 중이여서
        //그 link내에서 해당 id를 가지는 link만을 구현을 하지 못하는 것 같음.
        // 줌링크 영상 한번 다시 보기.
        // 내일은 꼭 일찍 일어나서 일찍와야지 그냥.
        // dict로 다양한 활용방법 생각해보기.
        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;
            // console.log(linkGroup[0]);
            // console.log(RepBs);
            // console.log(wantedLink);
            // console.log(linkGroup[0].valueid);
            // console.log(typeof 'repb');
            // console.log(wantedLink.valueid);
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repb') {
                    // if (wantedLink.source == linkGroup[i].source && linkGroup[i].value < wantedLink.value) {
                    // if (wantedLink.value > linkGroup[i].value) {
                    // console.log('hello');
                    hasLink = true;
                    // console.log(wantedLink);
                } else hasLink = false;
            }
            return hasLink;
        }
    }),

    //@ts-ignore
    status: Status[7],
};

// const RepBss = () => {
//     for (let i = 0; i < AllPaperDatas.length; i++) {
//         RepBs;
//     }
// };
// const ex = RepBs.map((link) => {
//     return link;
// });
// console.log(ex);

const repc = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[8],
    //@ts-ignore
    status: Status[8],
};

const repd = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[9],
    //@ts-ignore
    status: Status[9],
};

const repea = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[10],
    //@ts-ignore
    status: Status[10],
};

const repeb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[11],
    //@ts-ignore
    status: Status[11],
};

const repf = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[12],
    //@ts-ignore
    status: Status[12],
};

const empty = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        // if (node.type === 'Target' && node.subtype === '0') {
        //     color = `hsl(318, 87%, 32%)`;
        // } else if (node.type === 'Target' && node.subtype === '1') {
        //     color = `hsl(327, 85%, 41%)`;
        // } else if (node.type === 'Target' && node.subtype === '2') {
        //     color = `hsl(343, 100%, 59%)`;
        // } else if (node.type === 'Target' && node.subtype === '3') {
        //     color = `hsl(11, 100%, 55%)`;
        // } else if (node.type === 'Target' && node.subtype === '4') {
        //     color = `hsl(27, 100%, 69%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '0') {
        //     color = `hsl(46, 100%, 60%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '1') {
        //     color = `hsl(55, 90%, 55%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '2') {
        //     color = `hsl(75, 77%, 42%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '3') {
        //     color = `hsl(80, 45%, 41%)`;
        // } else if (node.type === 'Intermediation' && node.subtype === '4') {
        //     color = `hsl(87, 50%, 61%)`;
        // } else if (node.type === 'Representation' && node.subtype === '0') {
        //     color = `hsl(100, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '1') {
        //     color = `hsl(140, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '2') {
        //     color = `hsl(190, 100%, 40%)`;
        // } else if (node.type === 'Representation' && node.subtype === '3') {
        //     color = `hsl(220, 100%, 40%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
        //     color = `hsl(250, 90%, 45%)`;
        // } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
        //     color = `hsl(280, 80%, 60%)`;
        // }
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[13],
    //@ts-ignore
    status: Status[13],
};

export { datas, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty };
