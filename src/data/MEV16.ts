import { SankeyData } from '../types/sankey';

const MEV16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 121,
            target: 9,
            value: 1,
            valueid: ['targetaa', 'repeb'],
        },
        {
            source: 121,
            target: 11,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 121,
            target: 13,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 121,
            target: 18,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 121,
            target: 19,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 121,
            target: 24,
            value: 1,
            valueid: 'targetaa',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetaa', 'repeb'],
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 13,
            target: 35,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 18,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 19,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'targetaa',
        },
        {
            source: 35,
            target: 60,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 45,
            target: 60,
            value: 2,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 45,
            target: 55,
            value: 2,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 36,
            target: 59,
            value: 1,
            valueid: ['targetaa', 'repeb'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'targetaa',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['targetaa', 'repeb'],
        },
        {
            source: 60,
            target: 85,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetaa', 'repd', 'repf'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'targetaa',
        },
    ],

    status: [
        {
            status: 'TargetAA',
        },
        {
            status: 'RepEB',
        },
        {
            status: 'RepF',
        },
    ],
};

MEV16.links.forEach((link, index) => {
    link.paperName = 'MEV16';
    link.id = `MEV16-${index}`;
});

export { MEV16 };
