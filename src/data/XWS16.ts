import { SankeyData } from '../types/sankey';

const XWS16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 134,
            target: 11,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 134,
            target: 11,
            value: 2,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 134,
            target: 16,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 134,
            target: 16,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 134,
            target: 21,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 134,
            target: 23,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 39,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 45,
            target: 53,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 45,
            target: 55,
            value: 2,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 53,
            target: 81,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 55,
            target: 85,
            value: 3,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 55,
            target: 88,
            value: 1,
            valueid: ['targetbb', 'repd'],
        },
        {
            source: 55,
            target: 92,
            value: 2,
            valueid: ['targetbb', 'repd'],
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

XWS16.links.forEach((link, index) => {
    link.paperName = 'XWS16';
    link.id = `XWS16-${index}`;
});

export { XWS16 };
