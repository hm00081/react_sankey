import { SankeyData } from '../types/sankey';

const JX17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 113,
            target: 9,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 113,
            target: 9,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 113,
            target: 9,
            value: 1,
        },
        {
            source: 113,
            target: 10,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 113,
            target: 10,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 113,
            target: 10,
            value: 1,
        },
        {
            source: 113,
            target: 11,
            value: 1,
            valueid: ['repd', 'targetba', 'targetbb'],
        },
        {
            source: 113,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 113,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 113,
            target: 21,
            value: 1,
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 9,
            target: 36,
            value: 1,
        },
        {
            source: 10,
            target: 36,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 10,
            target: 36,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 10,
            target: 36,
            value: 1,
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['repd', 'targetba', 'targetbb'],
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 21,
            target: 46,
            value: 1,
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['repd', 'targetba', 'targetbb'],
        },
        {
            source: 36,
            target: 53,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 36,
            target: 55,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 36,
            target: 65,
            value: 1,
        },
        {
            source: 42,
            target: 65,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 45,
            target: 65,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 46,
            target: 65,
            value: 1,
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
            target: 91,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 65,
            target: 92,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 65,
            target: 92,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['repd', 'targetba', 'targetbb'],
        },
        {
            source: 65,
            target: 77,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 65,
            target: 77,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 65,
            target: 78,
            value: 1,
            valueid: ['targetba', 'targetbb'],
        },
        {
            source: 65,
            target: 98,
            value: 1,
        },
    ],
    status: [
        {
            status: 'TargetBA',
        },
        {
            status: 'RepD',
        },
    ],
};

JX17.links.forEach((link, index) => {
    link.paperName = 'JX17';
    link.id = `JX17-${index}`;
});

export { JX17 };
