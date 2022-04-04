import { SankeyData } from '../types/sankey';

const MDJW07: SankeyData = {
    nodes: [],

    links: [
        {
            source: 147,
            target: 5,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 147,
            target: 5,
            value: 1,
        },
        {
            source: 147,
            target: 13,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 147,
            target: 13,
            value: 2,
        },
        {
            source: 147,
            target: 14,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 147,
            target: 14,
            value: 1,
        },
        {
            source: 147,
            target: 23,
            value: 2,
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
        },
        {
            source: 13,
            target: 34,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 13,
            target: 49,
            value: 2,
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 14,
            target: 34,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 14,
            target: 49,
            value: 1,
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 23,
            target: 46,
            value: 2,
        },
        {
            source: 34,
            target: 54,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 60,
            value: 1,
        },
        {
            source: 46,
            target: 75,
            value: 1,
        },
        {
            source: 48,
            target: 68,
            value: 1,
        },
        {
            source: 49,
            target: 54,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 49,
            target: 60,
            value: 2,
        },
        {
            source: 49,
            target: 68,
            value: 1,
        },
        {
            source: 54,
            target: 77,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 78,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 60,
            target: 77,
            value: 1,
        },
        {
            source: 60,
            target: 77,
            value: 1,
        },
        {
            source: 60,
            target: 81,
            value: 1,
        },
        {
            source: 60,
            target: 81,
            value: 1,
        },
        {
            source: 54,
            target: 86,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 86,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 60,
            target: 98,
            value: 1,
        },
        {
            source: 68,
            target: 98,
            value: 2,
        },
        {
            source: 75,
            target: 98,
            value: 1,
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
    link.id = `MDJW07-${index}`;
});

export { MDJW07 };
