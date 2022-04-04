import { SankeyData } from '../types/sankey';

const LJC18: SankeyData = {
    nodes: [],

    links: [
        {
            source: 116,
            target: 3,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 116,
            target: 3,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 116,
            target: 3,
            value: 1,
        },
        {
            source: 116,
            target: 11,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 116,
            target: 11,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 116,
            target: 11,
            value: 1,
        },
        {
            source: 116,
            target: 23,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 116,
            target: 23,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 3,
            target: 49,
            value: 1,
        },
        {
            source: 3,
            target: 49,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 11,
            target: 49,
            value: 1,
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 23,
            target: 49,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 39,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 45,
            target: 54,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 49,
            target: 60,
            value: 2,
        },
        {
            source: 49,
            target: 62,
            value: 1,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 49,
            target: 63,
            value: 1,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 49,
            target: 63,
            value: 2,
            valueid: 'repa',
        },
        {
            source: 54,
            target: 77,
            value: 3,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 62,
            target: 88,
            value: 1,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 63,
            target: 88,
            value: 2,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 92,
            value: 3,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 60,
            target: 99,
            value: 2,
        },
        {
            source: 62,
            target: 99,
            value: 1,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 63,
            target: 99,
            value: 2,
            valueid: 'repa',
            overlapid: 'overlap',
        },
        {
            source: 63,
            target: 99,
            value: 1,
            valueid: 'repa',
        },
    ],
    status: [
        {
            status: 'RepB',
        },
        {
            status: 'RepF',
        },
    ],
};

LJC18.links.map((link, index) => {
    link.paperName = 'LJC18';
    link.id = `LJC18-${index}`;
});

export { LJC18 };
