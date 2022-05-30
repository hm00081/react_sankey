import { SankeyData } from '../types/sankey';

const SCS17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 128,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 128,
            target: 11,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 128,
            target: 11,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repb'],
        },
        {
            source: 128,
            target: 21,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 128,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 128,
            target: 23,
            value: 2,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 7,
            target: 44,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 11,
            target: 44,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 11,
            target: 46,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 11,
            target: 41,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repb'],
        },
        {
            source: 21,
            target: 34,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 22,
            target: 34,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 23,
            target: 34,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 44,
            target: 63,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 44,
            target: 63,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 34,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 34,
            target: 63,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 46,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 46,
            target: 63,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 41,
            target: 54,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repb'],
        },
        {
            source: 34,
            target: 63,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 34,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 63,
            target: 77,
            value: 2,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 63,
            target: 78,
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
            target: 79,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
        {
            source: 63,
            target: 80,
            value: 1,
            valueid: ['targetca', 'targetcb', 'repa'],
        },
        {
            source: 63,
            target: 98,
            value: 1,
            valueid: ['targetca', 'repa'],
        },
    ],
    status: [
        {
            status: 'TargetCA',
        },

        {
            status: 'RepA',
        },
        {
            status: 'RepB',
        },
    ],
};

SCS17.links.forEach((link, index) => {
    link.paperName = 'SCS17';
    link.id = `SCS17-${index}`;
});

export { SCS17 };
