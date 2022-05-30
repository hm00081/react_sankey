import { SankeyData } from '../types/sankey';

const GGS12ST: SankeyData = {
    nodes: [],

    links: [
        {
            source: 108,
            target: 3,
            value: 1,
            valueid: 'repea',
        }, // a[0]
        {
            source: 108,
            target: 12,
            value: 1,
            valueid: 'repeb',
        }, // a[1]
        {
            source: 108,
            target: 23,
            value: 1,
        }, // a[2]
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: 'repea',
        }, // a[0]
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: 'repeb',
        }, // a[1]
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: 'repeb',
        }, // a[2]
        {
            source: 12,
            target: 48,
            value: 1,
            valueid: 'repeb',
        }, // a[3]
        {
            source: 23,
            target: 46,
            value: 1,
        }, // a[4]
        {
            source: 42,
            target: 59,
            value: 1,
            valueid: 'repeb',
        }, // a[5]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[6]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repeb',
        }, // a[6]
        {
            source: 46,
            target: 75,
            value: 1,
        }, // a[7]
        {
            source: 48,
            target: 59,
            value: 1,
            valueid: 'repeb',
        }, // a[8]
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repea',
        }, // a[9]
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
        }, // a[9]
        {
            source: 75,
            target: 77,
            value: 1,
        }, // a[10]
        {
            source: 75,
            target: 98,
            value: 1,
        }, // a[11]
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepEA',
        },
    ],
};

GGS12ST.links.forEach((link, index) => {
    link.paperName = 'GGS12ST';
    link.id = `GGS12ST-${index}`;
});

export { GGS12ST };
