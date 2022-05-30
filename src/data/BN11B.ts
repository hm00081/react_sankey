import { SankeyData } from '../types/sankey';

const BN11B: SankeyData = {
    nodes: [],

    links: [
        {
            source: 149,
            target: 15,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 149,
            target: 20,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 149,
            target: 24,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 15,
            target: 40,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 40,
            target: 59,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 81,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 49,
            target: 75,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 24,
            target: 49,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 20,
            target: 40,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 20,
            target: 49,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 40,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: 'repf',
        },
    ],

    status: [
        {
            status: 'TargetAA',
        },
        {
            status: 'RepB',
        },
        {
            status: 'RepEB',
        },
    ],
};

BN11B.links.forEach((link, index) => {
    link.paperName = 'BN11B';
    link.id = `BN11B-${index}`;
});

export { BN11B };
