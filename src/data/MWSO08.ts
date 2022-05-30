import { SankeyData } from '../types/sankey';

const MWSO08: SankeyData = {
    nodes: [],

    links: [
        {
            source: 124,
            target: 15,
            value: 1,
        },
        {
            source: 124,
            target: 16,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 124,
            target: 23,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 124,
            target: 23,
            value: 1,
        },
        {
            source: 15,
            target: 41,
            value: 1,
        },
        {
            source: 15,
            target: 48,
            value: 1,
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 41,
            target: 55,
            value: 1,
        },
        {
            source: 48,
            target: 55,
            value: 1,
        },
        {
            source: 46,
            target: 61,
            value: 1,
        },
        {
            source: 43,
            target: 68,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 46,
            target: 68,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 68,
            target: 77,
            value: 2,
            valueid: 'repg',
        },
        {
            source: 61,
            target: 87,
            value: 1,
        },
        {
            source: 55,
            target: 92,
            value: 1,
        },
    ],

    status: [
        {
            status: 0,
        },
    ],
};

MWSO08.links.forEach((link, index) => {
    link.paperName = 'MWSO08';
    link.id = `MWSO08-${index}`;
});

export { MWSO08 };
