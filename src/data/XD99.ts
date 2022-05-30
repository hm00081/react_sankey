import { SankeyData } from '../types/sankey';

const XD99: SankeyData = {
    nodes: [],

    links: [
        {
            source: 132,
            target: 11,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 132,
            target: 16,
            value: 2,
            valueid: 'repc',
        },
        {
            source: 132,
            target: 22,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 132,
            target: 23,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 22,
            target: 46,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 43,
            target: 53,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 46,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 46,
            target: 70,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 70,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
    ],
    status: [
        {
            status: 'RepC',
        },
    ],
};

XD99.links.forEach((link, index) => {
    link.paperName = 'XD99';
    link.id = `XD99-${index}`;
});

export { XD99 };
