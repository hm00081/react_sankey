import { SankeyData } from '../types/sankey';

const JSM16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 112,
            target: 0,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 112,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 112,
            target: 11,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 112,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 112,
            target: 22,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 112,
            target: 23,
            value: 1,
        },
        {
            source: 112,
            target: 24,
            value: 1,
        },
        {
            source: 0,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 5,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 11,
            target: 44,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 39,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 44,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 39,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 44,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 46,
            target: 57,
            value: 1,
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 53,
            target: 78,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 53,
            target: 80,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 57,
            target: 80,
            value: 1,
        },
        {
            source: 57,
            target: 98,
            value: 1,
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
            status: 'TargetBB',
        },
        {
            status: 'RepC',
        },
    ],
};

JSM16.links.forEach((link, index) => {
    link.paperName = 'JSM16';
    link.id = `JSM16-${index}`;
});

export { JSM16 };
