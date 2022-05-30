import { SankeyData } from '../types/sankey';

const LWW13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 118,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 118,
            target: 11,
            value: 2,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 118,
            target: 13,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 118,
            target: 16,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 118,
            target: 17,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 118,
            target: 18,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 118,
            target: 22,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 9,
            target: 40,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 40,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 13,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 17,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 18,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 35,
            target: 53,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 36,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 2,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 53,
            target: 77,
            value: 2,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 2,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repc',
        },
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'RepC',
        },
    ],
};

LWW13.links.forEach((link, index) => {
    link.paperName = 'LWW13';
    link.id = `LWW13-${index}`;
});

export { LWW13 };
