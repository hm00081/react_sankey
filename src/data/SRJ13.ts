import { SankeyData } from '../types/sankey';

export const SRJ13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 11,
            target: 39,
            value: 1,
        }, // a[0]
        {
            source: 11,
            target: 49,
            value: 1,
        }, // a[1]
        {
            source: 16,
            target: 49,
            value: 1,
        }, // a[2]
        {
            source: 24,
            target: 49,
            value: 1,
        }, // a[3]
        {
            source: 39,
            target: 55,
            value: 1,
        }, // a[4]
        {
            source: 49,
            target: 55,
            value: 1,
        }, // a[5]
        {
            source: 49,
            target: 70,
            value: 1,
        }, // a[6]
        {
            source: 55,
            target: 79,
            value: 1,
        }, // a[7]
        {
            source: 70,
            target: 88,
            value: 1,
        }, // a[8]
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'RepD',
        },
    ],
};
