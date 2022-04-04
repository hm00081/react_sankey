import { SankeyData } from '../types/sankey';

export const GGS12TPS: SankeyData = {
    nodes: [],

    links: [
        {
            source: 109,
            target: 12,
            value: 1,
        },
        {
            source: 109,
            target: 16,
            value: 1,
        },
        {
            source: 109,
            target: 24,
            value: 1,
        },
        {
            source: 12,
            target: 42,
            value: 1,
        },
        {
            source: 16,
            target: 43,
            value: 1,
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 42,
            target: 64,
            value: 1,
        },
        {
            source: 43,
            target: 64,
            value: 1,
        },
        {
            source: 46,
            target: 75,
            value: 1,
        },
        {
            source: 64,
            target: 77,
            value: 1,
        },
        {
            source: 64,
            target: 79,
            value: 2,
        },
        {
            source: 75,
            target: 98,
            value: 1,
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
    ],
};
