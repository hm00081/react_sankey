import { SankeyData } from '../types/sankey';

const FAKM15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 140,
            target: 15,
            value: 1,
            valueid: 'repea',
        }, // a[0]
        {
            source: 140,
            target: 15,
            value: 1,
        }, // a[0]
        {
            source: 140,
            target: 24,
            value: 1,
        }, // a[1]
        {
            source: 15,
            target: 42,
            value: 1,
        }, // a[2]
        {
            source: 15,
            target: 45,
            value: 1,
        }, // a[3]
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: 'repea',
        }, // a[4]
        {
            source: 24,
            target: 46,
            value: 1,
        }, // a[5]
        {
            source: 24,
            target: 49,
            value: 1,
        }, // a[6]
        {
            source: 42,
            target: 60,
            value: 1,
        }, // a[7]
        {
            source: 45,
            target: 60,
            value: 1,
        }, // a[8]
        {
            source: 49,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[9]
        {
            source: 46,
            target: 75,
            value: 1,
        }, // a[10]
        {
            source: 49,
            target: 75,
            value: 1,
        }, // a[11]
        {
            source: 60,
            target: 76,
            value: 1,
        }, // a[12]
        {
            source: 60,
            target: 77,
            value: 1,
        }, // a[13]
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: 'repea',
        }, // a[14]
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: 'repea',
        }, // a[15]
        {
            source: 59,
            target: 88,
            value: 1,
            valueid: 'repea',
        }, // a[16]
        {
            source: 75,
            target: 88,
            value: 1,
        }, // a[17]
        {
            source: 75,
            target: 98,
            value: 1,
        }, // a[18]
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

FAKM15.links.forEach((link, index) => {
    link.paperName = 'FAKM15';
    link.id = `FAKM15-${index}`;
});

export { FAKM15 };
