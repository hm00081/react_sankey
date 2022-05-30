import { SankeyData } from '../types/sankey';

const SCS19: SankeyData = {
    nodes: [],

    links: [
        {
            source: 129,
            target: 2,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 129,
            target: 4,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 129,
            target: 11,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 129,
            target: 11,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 129,
            target: 16,
            value: 2,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 129,
            target: 16,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 129,
            target: 18,
            value: 2,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 129,
            target: 18,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 129,
            target: 18,
            value: 1,
            valueid: ['targetcb', 'repeb'],
        },
        {
            source: 129,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 129,
            target: 24,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 129,
            target: 27,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 2,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 4,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 11,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 11,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 16,
            target: 44,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 18,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repeb'],
        },
        {
            source: 18,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 18,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 18,
            target: 49,
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
            source: 24,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 27,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 44,
            target: 63,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 44,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 46,
            target: 54,
            value: 2,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 46,
            target: 59,
            value: 1,
            valueid: ['targetcb', 'repeb'],
        },
        {
            source: 46,
            target: 73,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 48,
            target: 54,
            value: 2,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 48,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 49,
            target: 73,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 54,
            target: 78,
            value: 4,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repeb'],
        },
        {
            source: 63,
            target: 78,
            value: 2,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 63,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 63,
            target: 92,
            value: 1,
            valueid: ['targetcb', 'repa'],
        },
        {
            source: 63,
            target: 92,
            value: 1,
            valueid: 'repa',
        },
        {
            source: 73,
            target: 98,
            value: 2,
            valueid: ['targetcb', 'repa'],
        },
    ],
    status: [
        {
            status: 'RepA',
        },
        {
            status: 'RepB',
        },
        {
            status: 'RepEB',
        },
    ],
};

SCS19.links.map((link, index) => {
    link.paperName = 'SCS19';
    link.category = 'RepB';
    link.id = `SCS19-${index}`;
});

export { SCS19 };
