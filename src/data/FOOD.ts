import { SankeyData } from '../types/sankey';

export const FOOD: SankeyData = {
    nodes: [],

    links: [
        {
            source: 5,
            target: 40,
            value: 1,
        }, // a[0]
        {
            source: 5,
            target: 42,
            value: 1,
        }, // a[1]
        {
            source: 5,
            target: 45,
            value: 1,
        }, // a[2]
        {
            source: 17,
            target: 40,
            value: 1,
        }, // a[3]
        {
            source: 17,
            target: 42,
            value: 1,
        }, // a[4]
        {
            source: 17,
            target: 45,
            value: 1,
        }, // a[5]
        {
            source: 18,
            target: 40,
            value: 1,
        }, // a[6]
        {
            source: 18,
            target: 42,
            value: 1,
        }, // a[7]
        {
            source: 18,
            target: 45,
            value: 1,
        }, // a[8]
        {
            source: 24,
            target: 46,
            value: 1,
        }, // a[9]
        {
            source: 40,
            target: 62,
            value: 1,
        }, // a[10]
        {
            source: 42,
            target: 62,
            value: 1,
        }, // a[11]
        {
            source: 45,
            target: 62,
            value: 1,
        }, // a[12]
        {
            source: 46,
            target: 75,
            value: 1,
        }, // a[13]
        {
            source: 62,
            target: 77,
            value: 1,
        }, // a[14]
        {
            source: 62,
            target: 79,
            value: 1,
        }, // a[15]
        {
            source: 62,
            target: 80,
            value: 1,
        }, // a[16]
        {
            source: 75,
            target: 98,
            value: 1,
        }, // a[17]
    ],

    status: [
        {
            status: 'none',
        },
    ],
};
