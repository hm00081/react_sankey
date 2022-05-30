import { SankeyData } from '../types/sankey';

const MDD10: SankeyData = {
    nodes: [],

    links: [
        {
            source: 120,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 120,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 120,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 120,
            target: 15,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 120,
            target: 16,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 120,
            target: 22,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 120,
            target: 22,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 7,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 11,
            target: 46,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 7,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 11,
            target: 40,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 15,
            target: 40,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 39,
            target: 54,
            value: 2,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 40,
            target: 54,
            value: 2,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 2,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 54,
            target: 78,
            value: 3,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 54,
            target: 86,
            value: 3,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 48,
            target: 60,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 22,
            target: 49,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: ['targetca', 'repf'],
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 49,
            target: 54,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 98,
            value: 2,
            valueid: ['targetca', 'repf'],
        },
    ],
    status: [
        {
            status: 'TargetCA',
        },
        {
            status: 'RepB',
        },
        {
            status: 'RepF',
        },
    ],
};

MDD10.links.map((link, index) => {
    link.paperName = 'MDD10';
    link.category = 'RepB';
    link.id = `MDD10-${index}`;
});

export { MDD10 };
