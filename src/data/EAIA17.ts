import { SankeyData } from '../types/sankey';

const EAIA17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 104,
            target: 15,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 104,
            target: 15,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 104,
            target: 18,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 104,
            target: 21,
            value: 1,
            valueid: 'targetcb',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 15,
            target: 42,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 15,
            target: 43,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 15,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 18,
            target: 41,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 18,
            target: 42,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 18,
            target: 43,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'targetcb',
        },
        {
            source: 41,
            target: 52,
            value: 2,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 42,
            target: 52,
            value: 2,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 43,
            target: 52,
            value: 2,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 48,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 46,
            target: 52,
            value: 1,
            valueid: 'targetcb',
        },
        {
            source: 52,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 52,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 52,
            target: 79,
            value: 2,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 52,
            target: 81,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
        },
        {
            source: 52,
            target: 81,
            value: 1,
            valueid: 'targetcb',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

EAIA17.links.forEach((link, index) => {
    link.paperName = 'EAIA17';
    link.id = `EAIA17-${index}`;
});

export { EAIA17 };
