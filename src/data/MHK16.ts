import { SankeyData } from '../types/sankey';

const MHK16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 122,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 122,
            target: 12,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 12,
            target: 39,
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
            source: 12,
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
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 39,
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
            target: 76,
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
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
        {
            source: 53,
            target: 84,
            value: 1,
            valueid: ['targetca', 'repc'],
        },
    ],
    status: [
        {
            status: 'TargetCA',
        },
        {
            status: 'RepC',
        },
    ],
};

MHK16.links.forEach((link, index) => {
    link.paperName = 'MHK16';
    link.id = `MHK16-${index}`;
});

export { MHK16 };
