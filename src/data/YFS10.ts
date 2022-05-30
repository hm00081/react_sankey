import { SankeyData } from '../types/sankey';

const YFS10: SankeyData = {
    nodes: [],

    links: [
        {
            source: 135,
            target: 11,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 34,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 92,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 135,
            target: 12,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 12,
            target: 34,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 34,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 92,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 135,
            target: 16,
            value: 1,
            valueid: ['repf', 'targetbb'],
        }, // a[0]
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['repf', 'targetbb'],
        },
        {
            source: 45,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb'],
        }, // a[0]
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['repf', 'targetbb'],
        }, // a[0]
        {
            source: 60,
            target: 86,
            value: 1,
            valueid: ['repf', 'targetbb'],
        }, // a[0]
        {
            source: 60,
            target: 94,
            value: 1,
            valueid: ['repf', 'targetbb'],
        }, // a[0]
        {
            source: 135,
            target: 16,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repea', 'targetbb'],
        }, // a[0]
        {
            source: 135,
            target: 24,
            value: 1,
            valueid: 'repf',
        }, // a[0]
        {
            source: 24,
            target: 46,
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
            source: 60,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepEA',
        },
        {
            status: 'RepF',
        },
    ],
};

YFS10.links.forEach((link, index) => {
    link.paperName = 'YFS10';
    link.id = `YFS10-${index}`;
});

export { YFS10 };
