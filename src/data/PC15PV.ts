import { SankeyData } from '../types/sankey';

const PC15PV: SankeyData = {
    nodes: [],

    links: [
        {
            source: 125,
            target: 0,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 125,
            target: 3,
            value: 2,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 125,
            target: 12,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 125,
            target: 21,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 125,
            target: 24,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 0,
            target: 45,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 3,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 45,
            target: 52,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 49,
            target: 52,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 46,
            target: 71,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 52,
            target: 77,
            value: 2,
            valueid: 'targetab',
        },
        {
            source: 52,
            target: 79,
            value: 2,
            valueid: 'targetab',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetab', 'repd'],
        },
        {
            source: 71,
            target: 98,
            value: 1,
            valueid: 'repd',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

PC15PV.links.forEach((link, index) => {
    link.paperName = 'PC15PV';
    link.id = `PC15PV-${index}`;
});

export { PC15PV };
