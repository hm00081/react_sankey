import { SankeyData } from '../types/sankey';

const CGK21: SankeyData = {
    nodes: [],

    links: [
        {
            source: 101,
            target: 5,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 101,
            target: 6,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 101,
            target: 5,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 101,
            target: 6,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 101,
            target: 15,
            value: 2,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 101,
            target: 15,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 101,
            target: 16,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 101,
            target: 16,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 101,
            target: 23,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 5,
            target: 32,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 5,
            target: 32,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 6,
            target: 32,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 6,
            target: 32,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 15,
            target: 32,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 15,
            target: 46,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 16,
            target: 41,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 16,
            target: 41,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 32,
            target: 54,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 32,
            target: 59,
            value: 2,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 41,
            target: 54,
            value: 2,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 41,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 3,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 59,
            target: 77,
            value: 2,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 54,
            target: 78,
            value: 3,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 59,
            target: 78,
            value: 2,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 59,
            target: 79,
            value: 2,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 54,
            target: 87,
            value: 2,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 59,
            target: 88,
            value: 1,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 59,
            target: 95,
            value: 2,
            valueid: ['repeb', 'targetbb'],
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['repb', 'targetbb'],
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
    ],
    status: [
        {
            status: 'TargetBA',
        },
        {
            status: 'RepB',
        },
        {
            status: 'RepEB',
        },
    ],
};

CGK21.links.map((link, index) => {
    link.paperName = 'CGK21';
    link.category = 'RepB';
    link.id = `CGK21-${index}`;
});

export { CGK21 };
