import { SankeyData } from '../types/sankey';

const YCC20: SankeyData = {
    nodes: [],

    links: [
        {
            source: 144,
            target: 7,
            value: 2,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 144,
            target: 11,
            value: 2,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 144,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 7,
            target: 34,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 7,
            target: 48,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 7,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 32,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 34,
            target: 70,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 2,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 36,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 32,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 81,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 84,
            value: 2,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 70,
            target: 81,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

YCC20.links.forEach((link, index) => {
    link.paperName = 'YCC20';
    link.id = `YCC20-${index}`;
});

export { YCC20 };
