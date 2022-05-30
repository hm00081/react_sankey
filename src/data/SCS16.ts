import { SankeyData } from '../types/sankey';

const SCS16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 127,
            target: 14,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 127,
            target: 16,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 127,
            target: 21,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 127,
            target: 23,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 127,
            target: 27,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 14,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 14,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 16,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 27,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 44,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 44,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 48,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 48,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 44,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 48,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 49,
            target: 63,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 60,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 60,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 60,
            target: 84,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 60,
            target: 84,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 63,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 63,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 63,
            target: 84,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repf', 'repa'],
        },
    ],
    status: [
        {
            status: 'RepA',
        },
        {
            status: 'RepF',
        },
    ],
};

SCS16.links.forEach((link, index) => {
    link.paperName = 'SCS16';
    link.id = `SCS16-${index}`;
});

export { SCS16 };
