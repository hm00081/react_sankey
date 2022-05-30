import { SankeyData } from '../types/sankey';

const MDJW07: SankeyData = {
    nodes: [],

    links: [
        {
            source: 147,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 147,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 147,
            target: 13,
            value: 2,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 147,
            target: 13,
            value: 1,
            valueid: ['targetbb', 'ref'],
        },
        {
            source: 147,
            target: 13,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 147,
            target: 14,
            value: 2,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 147,
            target: 14,
            value: 1,
            valueid: ['targetbb', 'ref'],
        },
        {
            source: 147,
            target: 23,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 5,
            target: 34,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 5,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 13,
            target: 34,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repf'],
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 14,
            target: 34,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repf'],
        },
        {
            source: 23,
            target: 46,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 34,
            target: 54,
            value: 2,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 48,
            target: 68,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 49,
            target: 54,
            value: 2,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: ['targetbb', 'repf'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 49,
            target: 68,
            value: 1,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 54,
            target: 77,
            value: 3,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 54,
            target: 78,
            value: 2,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 60,
            target: 77,
            value: 2,
            valueid: ['targetbb', 'repf'],
        },
        {
            source: 60,
            target: 81,
            value: 1,
            valueid: ['targetbb', 'repf'],
        },
        {
            source: 60,
            target: 81,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 54,
            target: 86,
            value: 3,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['targetbb', 'repb'],
        },
        {
            source: 68,
            target: 98,
            value: 2,
            valueid: ['targetbb', 'repg'],
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
    ],
    status: [
        {
            status: 'none',
        },
    ],
};

MDJW07.links.map((link, index) => {
    link.paperName = 'MDJW07';
    link.category = 'RepB';
    link.id = `MDJW07-${index}`;
});

export { MDJW07 };
