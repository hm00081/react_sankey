import { SankeyData } from '../types/sankey';

const YFS10: SankeyData = {
    nodes: [],

    links: [
        {
            source: 136,
            target: 11,
            value: 1,
            valueid: 'repea',
        }, // a[0]
        {
            source: 136,
            target: 12,
            value: 1,
            valueid: 'repea',
        }, // a[1]
        {
            source: 136,
            target: 16,
            value: 1,
            valueid: 'repea',
        }, // a[2]
        {
            source: 136,
            target: 24,
            value: 1,
            valueid: 'repea',
        }, // a[3]
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: 'repea',
        }, // a[4]
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repea',
        }, // a[5]
        {
            source: 12,
            target: 34,
            value: 1,
            valueid: 'repea',
        }, // a[6]
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: 'repea',
        }, // a[7]
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: 'repea',
        }, // a[8]
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repea',
        }, // a[9]
        {
            source: 34,
            target: 60,
            value: 2,
            valueid: 'repea',
        }, // a[10]
        {
            source: 45,
            target: 60,
            value: 2,
            valueid: 'repea',
        }, // a[11]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[12]
        {
            source: 46,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[13]
        {
            source: 60,
            target: 76,
            value: 2,
            valueid: 'repea',
        }, // a[14]
        {
            source: 60,
            target: 78,
            value: 2,
            valueid: 'repea',
        }, // a[15]
        {
            source: 60,
            target: 92,
            value: 2,
            valueid: 'repea',
        }, // a[16]
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repea',
        }, // a[17]
        {
            source: 59,
            target: 94,
            value: 1,
            valueid: 'repea',
        }, // a[18]
        {
            source: 59,
            target: 86,
            value: 1,
            valueid: 'repea',
        }, // a[19]
        {
            source: 59,
            target: 98,
            value: 1,
            valueid: 'repea',
        }, // a[20]
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepEA',
        },
        {
            status: 'RepF',
        },
    ],
};

YFS10.links.forEach((link, index) => {
    link.paperName = 'YFS10';
    link.id = `YFS10-${index}`;
});

export { YFS10 };
