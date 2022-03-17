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

// Data
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys, ChangeRepEAs } from './data/AllPaperData';

// import { CAA20 as rawData } from './data/CAA20';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { nodeModuleNameResolver } from 'typescript';
import { NONAME } from 'dns';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// console.log(Status.length);
//@ts-ignore
const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys, ChangeRepEAs];
const datas = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[0],
    //@ts-ignore
    status: Status[0],
};

const targetaa = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[1],
    //@ts-ignore
    status: Status[1],
};

const targetab = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[2],
    //@ts-ignore
    status: Status[2],
};

const targetba = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[3],
    //@ts-ignore
    status: Status[3],
};

const targetbb = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[4],
    //@ts-ignore
    status: Status[4],
};

const targetca = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[5],
    //@ts-ignore
    status: Status[5],
};

const repa = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[6],
    //@ts-ignore
    status: Status[6],
};

const repb = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[7],
    //@ts-ignore
    status: Status[7],
};

const repc = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[8],
    //@ts-ignore
    status: Status[8],
};

const repd = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[9],
    //@ts-ignore
    status: Status[9],
};

const repea = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[10],
    //@ts-ignore
    status: Status[10],
};

const repeb = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[11],
    //@ts-ignore
    status: Status[11],
};

const repf = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[12],
    //@ts-ignore
    status: Status[12],
};

const empty = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[13],
    //@ts-ignore
    status: Status[13],
};

const change = {
    nodes: Papers[0].nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(140, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(190, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '3') {
            color = `hsl(220, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: LinkData[14],
    //@ts-ignore
    status: Status[13],
};

export { datas, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty, change };
