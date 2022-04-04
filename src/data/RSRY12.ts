import { SankeyData } from '../types/sankey';

export const RSRY12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 139,
            target: 11,
            value: 2,
        },
        {
            source: 139,
            target: 16,
            value: 1,
        },
        {
            source: 139,
            target: 24,
            value: 1,
        },
        {
            source: 11,
            target: 45,
            value: 1,
        },
        {
            source: 11,
            target: 46,
            value: 1,
        },
        {
            source: 16,
            target: 45,
            value: 1,
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 45,
            target: 55,
            value: 1,
        },
        {
            source: 46,
            target: 70,
            value: 1,
        },
        {
            source: 55,
            target: 77,
            value: 1,
        },
        {
            source: 55,
            target: 78,
            value: 2,
        },
        {
            source: 55,
            target: 85,
            value: 1,
        },
        {
            source: 55,
            target: 86,
            value: 1,
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
            status: 'TargetBB',
        },
        {
            status: 'RepD',
        },
    ],
};
