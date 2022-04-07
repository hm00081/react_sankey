import { SankeyData } from '../types/sankey';

export const MEV16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 121,
            target: 9,
            value: 1,
        },
        {
            source: 121,
            target: 11,
            value: 1,
        },
        {
            source: 121,
            target: 13,
            value: 1,
        },
        {
            source: 121,
            target: 18,
            value: 1,
        },
        {
            source: 121,
            target: 19,
            value: 1,
        },
        {
            source: 121,
            target: 24,
            value: 1,
        },
        {
            source: 9,
            target: 36,
            value: 1,
        }, // a[0]
        {
            source: 11,
            target: 35,
            value: 1,
        }, // a[1]
        {
            source: 11,
            target: 45,
            value: 1,
        }, // a[1]
        {
            source: 13,
            target: 35,
            value: 1,
        }, // a[2]
        {
            source: 13,
            target: 45,
            value: 1,
        }, // a[3]
        {
            source: 18,
            target: 45,
            value: 1,
        }, // a[4]
        {
            source: 19,
            target: 45,
            value: 1,
        }, // a[5]
        {
            source: 24,
            target: 46,
            value: 1,
        }, // a[6]
        {
            source: 35,
            target: 60,
            value: 1,
        }, // a[7]
        {
            source: 45,
            target: 60,
            value: 2,
        }, // a[8]
        {
            source: 36,
            target: 59,
            value: 1,
        }, // a[8]
        {
            source: 46,
            target: 70,
            value: 1,
        }, // a[9]
        {
            source: 60,
            target: 77,
            value: 1,
        },
        {
            source: 59,
            target: 78,
            value: 1,
        },
        {
            source: 60,
            target: 85,
            value: 1,
        },
        {
            source: 70,
            target: 98,
            value: 1,
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
