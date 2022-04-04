// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { LinkColor, SankeyData } from './types/sankey';
import { SankeyLink, SankeyStatus, SankeyLinkExtended } from '../src/types';

// Data
import { PaperNode } from './data/PaperNode';
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, OriginRepBs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys } from './data/AllPaperData';

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
const basicData: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[0],

    //@ts-ignore
    status: Status[0],

    positionStatus: 'init',
};

const targetaa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[1],
    //@ts-ignore
    status: Status[1],

    positionStatus: 'init',
};

const targetab = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
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
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepAs)) {
            color = 'blueLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
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

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repa') {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],
};

const repb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),

    links: RepBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepBs)) {
            color = 'blueLinkColor'; // 하늘색
        } else {
            color = 'grayLinkColor'; // 회색
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        // 뭔가 각 link마다 식별할 수 있는 id 같은게 있으면 될것 같소 ㅋㅋ (현재 모든 value에 의해 색상이 칠해지고 있음..)
        // 각 link마다 id가 있지만 현재 모든 동일 value를 합치며 link가 그려지는 중이여서
        //그 link내에서 해당 id를 가지는 link만을 구현을 하지 못하는 것 같음.
        // 줌링크 영상 한번 다시 보기.
        // 내일은 꼭 일찍 일어나서 일찍와야지 그냥.
        // dict로 다양한 활용방법 생각해보기.
        // AllPaperData와 CalcSankey는 문제없어 보임. 뭐가 문젤까.....
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                    hasLink = true;
                } else hasLink = false;
            }

            return hasLink;
        }
    }),

    //@ts-ignore
    status: Status[7],

    positionStatus: 'init',
};

const repc = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
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
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEAs)) {
            color = 'blueLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
            // console.log('gray');
        }
        return { ...link, color };

        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repea') {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[10],
};

const repeb = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

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

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[13],
    //@ts-ignore
    status: Status[13],
};

export { basicData, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty };
