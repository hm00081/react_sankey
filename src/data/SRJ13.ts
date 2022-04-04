import { SankeyData } from '../types/sankey';

export const SRJ13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 138,
            target: 11,
            value: 2,
        },
        {
            source: 138,
            target: 16,
            value: 1,
        },
        {
            source: 138,
            target: 24,
            value: 1,
        },
        {
            source: 11,
            target: 39,
            value: 1,
        },
        {
            source: 11,
            target: 49,
            value: 1,
        },
        {
            source: 16,
            target: 49,
            value: 1,
        },
        {
            source: 24,
            target: 49,
            value: 1,
        },
        {
            source: 39,
            target: 55,
            value: 1,
        },
        {
            source: 49,
            target: 55,
            value: 1,
        },
        {
            source: 49,
            target: 70,
            value: 1,
        },
        {
            source: 55,
            target: 79,
            value: 2,
        },
        {
            source: 70,
            target: 88,
            value: 1,
        },
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
