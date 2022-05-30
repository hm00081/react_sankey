import { SankeyData } from '../types/sankey';

const EYG15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 105,
            target: 5,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 105,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 105,
            target: 11,
            value: 2,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 105,
            target: 16,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 105,
            target: 21,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 105,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 5,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 7,
            target: 46,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 49,
            target: 63,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 49,
            target: 63,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 46,
            target: 63,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 63,
            target: 77,
            value: 2,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 63,
            target: 78,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 39,
            target: 63,
            value: 2,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 92,
            value: 2,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 63,
            target: 92,
            value: 2,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 16,
            target: 39,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 84,
            value: 2,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
    ],
    status: [
        {
            status: 'RepA',
        },
    ],
};

EYG15.links.forEach((link, index) => {
    link.paperName = 'EYG15';
    link.id = `EYG15-${index}`;
});

export { EYG15 };
