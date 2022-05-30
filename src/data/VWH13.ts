import { SankeyData } from '../types/sankey';

const VWH13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 131,
            target: 11,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 131,
            target: 12,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 131,
            target: 14,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 131,
            target: 15,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 11,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 12,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 14,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 15,
            target: 44,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 11,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 12,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 14,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 15,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 16,
            target: 48,
            value: 1,
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 21,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 23,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 21,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 23,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 21,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 23,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 21,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 23,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 44,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 46,
            target: 53,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 48,
            target: 66,
            value: 1,
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 48,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 66,
            target: 77,
            value: 1,
        },
        {
            source: 66,
            target: 78,
            value: 1,
        },
        {
            source: 66,
            target: 85,
            value: 1,
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 60,
            target: 81,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 60,
            target: 84,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
        {
            source: 60,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repf'],
        },
    ],
    status: [
        {
            status: 'RepC',
        },
    ],
};

VWH13.links.forEach((link, index) => {
    link.paperName = 'VWH13';
    link.id = `VWH13-${index}`;
});

export { VWH13 };
