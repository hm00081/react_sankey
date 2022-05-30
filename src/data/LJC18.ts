import { SankeyData } from '../types/sankey';

const LJC18: SankeyData = {
    nodes: [],

    links: [
        {
            source: 116,
            target: 3,
            value: 1,
            valueid: ['repa', 'reph'],
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
            valueid: 'repf',
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
            valueid: 'repf',
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
            valueid: 'repf',
        },
        {
            source: 3,
            target: 49,
            value: 1,
            valueid: ['repa', 'reph'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: 'repf',
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
            valueid: 'repf',
        },
        {
            source: 49,
            target: 62,
            value: 1,
            valueid: ['repa', 'reph'],
        },
        {
            source: 49,
            target: 63,
            value: 3,
            valueid: 'repa',
        },
        {
            source: 54,
            target: 77,
            value: 3,
            valueid: 'repb',
        },
        {
            source: 62,
            target: 88,
            value: 1,
            valueid: ['repa', 'reph'],
        },
        {
            source: 63,
            target: 88,
            value: 2,
            valueid: 'repa',
        },
        {
            source: 54,
            target: 92,
            value: 3,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 98,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 60,
            target: 99,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 62,
            target: 99,
            value: 1,
            valueid: ['repa', 'reph'],
        },
        {
            source: 63,
            target: 99,
            value: 3,
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
    link.category = 'RepB';
    link.id = `LJC18-${index}`;
});

export { LJC18 };
