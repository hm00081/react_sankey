import { SankeyData } from '../types/sankey';

const YSK14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 141,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
        },
        {
            source: 141,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
        },
        {
            source: 141,
            target: 16,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 141,
            target: 16,
            value: 1,
            valueid: 'reph',
        },
        {
            source: 141,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'reph'],
        },
        {
            source: 141,
            target: 22,
            value: 2,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'reph',
        },
        {
            source: 24,
            target: 46,
            value: 2,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'reph'],
        },
        {
            source: 39,
            target: 54,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
        },
        {
            source: 39,
            target: 62,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 46,
            target: 62,
            value: 1,
            valueid: ['targetcb', 'reph'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 48,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 48,
            target: 62,
            value: 1,
            valueid: 'reph',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 62,
            target: 76,
            value: 1,
            valueid: 'reph',
        },
        {
            source: 62,
            target: 76,
            value: 1,
            valueid: ['targetcb', 'reph'],
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: 'reph',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
        },
        {
            source: 54,
            target: 84,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
        },
        {
            source: 54,
            target: 86,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
        {
            source: 62,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'reph'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repb'],
        },
    ],
    status: [
        {
            status: 'RepB',
        },
    ],
};

YSK14.links.map((link, index) => {
    link.paperName = 'YSK14';
    link.category = 'RepB';
    link.id = `YSK14-${index}`;
});

export { YSK14 };
