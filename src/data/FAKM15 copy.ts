import { SankeyData } from '../types/sankey';

export const FAKM15COPY: SankeyData = {
    nodes: [],

    links: [
        {
            source: 15,
            target: 42,
            value: 25,
        }, // a[0]
        {
            source: 15,
            target: 45,
            value: 25,
        }, // a[1]
        {
            source: 15,
            target: 49,
            value: 10,
        }, // a[2]
        {
            source: 24,
            target: 46,
            value: 25,
        }, // a[3]
        {
            source: 24,
            target: 49,
            value: 15,
        }, // a[4]
        {
            source: 42,
            target: 60,
            value: 25,
        }, // a[5]
        {
            source: 45,
            target: 60,
            value: 25,
        }, // a[6]
        {
            source: 49,
            target: 60,
            value: 10,
        }, // a[7]
        {
            source: 46,
            target: 75,
            value: 25,
        }, // a[8]
        {
            source: 49,
            target: 75,
            value: 15,
        }, // a[9]
        {
            source: 60,
            target: 76,
            value: 12,
        }, // a[10]
        {
            source: 60,
            target: 77,
            value: 12,
        }, // a[11]
        {
            source: 60,
            target: 78,
            value: 12,
        }, // a[12]
        {
            source: 60,
            target: 80,
            value: 12,
        }, // a[13]
        {
            source: 60,
            target: 88,
            value: 12,
        }, // a[14]
        {
            source: 75,
            target: 98,
            value: 40,
        }, // a[15]
    ],
    status: [
        {
            status: 'TargetCA',
        },
        {
            status: 'RepF',
        },
    ],
};
