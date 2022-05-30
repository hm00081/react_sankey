import { SankeyData } from '../types/sankey';

const ZGWZ14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 136,
            target: 15,
            value: 1,
        },
        {
            source: 136,
            target: 15,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 136,
            target: 22,
            value: 1,
        },
        {
            source: 15,
            target: 34,
            value: 1,
        },
        {
            source: 15,
            target: 34,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 15,
            target: 40,
            value: 1,
        },
        {
            source: 15,
            target: 43,
            value: 1,
        },
        {
            source: 15,
            target: 43,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 15,
            target: 46,
            value: 1,
        },
        {
            source: 15,
            target: 49,
            value: 1,
        },
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 22,
            target: 46,
            value: 1,
        },
        {
            source: 34,
            target: 64,
            value: 1,
        },
        {
            source: 40,
            target: 64,
            value: 1,
        },
        {
            source: 43,
            target: 64,
            value: 1,
        },
        {
            source: 46,
            target: 64,
            value: 2,
        },
        {
            source: 49,
            target: 64,
            value: 1,
        },
        {
            source: 34,
            target: 55,
            value: 1,
        },
        {
            source: 43,
            target: 55,
            value: 1,
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 64,
            target: 76,
            value: 1,
        },
        {
            source: 64,
            target: 77,
            value: 1,
        },
        {
            source: 64,
            target: 79,
            value: 1,
        },
        {
            source: 64,
            target: 80,
            value: 2,
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 55,
            target: 81,
            value: 1,
            valueid: 'repd',
        },
    ],
    status: [
        {
            status: 'RepD',
        },
    ],
};

ZGWZ14.links.forEach((link, index) => {
    link.paperName = 'ZGWZ14';
    link.id = `ZGWZ14-${index}`;
});

export { ZGWZ14 };
