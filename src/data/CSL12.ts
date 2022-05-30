import { SankeyData } from '../types/sankey';

const CSL12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 102,
            target: 11,
            value: 2,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 102,
            target: 12,
            value: 2,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 102,
            target: 17,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 102,
            target: 18,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 102,
            target: 19,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 102,
            target: 17,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 102,
            target: 18,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 102,
            target: 19,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 102,
            target: 21,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 102,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 17,
            target: 48,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 18,
            target: 48,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 19,
            target: 48,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 17,
            target: 48,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 18,
            target: 48,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 19,
            target: 48,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 21,
            target: 46,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 22,
            target: 49,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
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
            valueid: ['targetab', 'repc'],
        },
        {
            source: 48,
            target: 62,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 2,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetab', 'repc'],
        },
        {
            source: 53,
            target: 80,
            value: 2,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetab', 'targetca', 'repc'],
        },
        {
            source: 62,
            target: 80,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repc'],
        },
        {
            source: 62,
            target: 99,
            value: 1,
            valueid: ['targetab', 'reph'],
        },
    ],
    status: [
        {
            status: 'RepC',
        },
    ],
};

CSL12.links.forEach((link, index) => {
    link.paperName = 'CSL12';
    link.id = `CSL12-${index}`;
});

export { CSL12 };
