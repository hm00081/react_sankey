import { SankeyData } from '../types/sankey';

export const RSRY12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 11,
            target: 45,
            value: 1,
        }, // a[0]
        {
            source: 11,
            target: 46,
            value: 1,
        }, // a[1]
        {
            source: 16,
            target: 45,
            value: 1,
        }, // a[2]
        {
            source: 24,
            target: 46,
            value: 1,
        }, // a[3]
        {
            source: 45,
            target: 55,
            value: 1,
        }, // a[4]
        {
            source: 46,
            target: 70,
            value: 1,
        }, // a[5]
        {
            source: 55,
            target: 77,
            value: 1,
        }, // a[6]
        {
            source: 55,
            target: 85,
            value: 1,
        }, // a[7]
        {
            source: 55,
            target: 86,
            value: 1,
        }, // a[8]
        {
            source: 70,
            target: 88,
            value: 1,
        }, // a[9]
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'TargetBB',
        },
        {
            status: 'RepD',
        },
    ],
};
