import { SankeyData } from '../types/sankey';

const YFS10: SankeyData = {
    nodes: [],

    links: [
        {
            source: 135,
            target: 11,
            value: 1,
        }, // a[0]
        {
            source: 135,
            target: 12,
            value: 1,
        }, // a[1]
        {
            source: 135,
            target: 16,
            value: 1,
            valueid: 'repea',
        }, // a[2]
        {
            source: 135,
            target: 24,
            value: 1,
            valueid: 'repea',
        }, // a[3]
        {
            source: 11,
            target: 34,
            value: 1,
        }, // a[4]
        {
            source: 11,
            target: 45,
            value: 1,
        }, // a[5]
        {
            source: 12,
            target: 34,
            value: 1,
        }, // a[6]
        {
            source: 12,
            target: 45,
            value: 1,
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
            value: 1,
        }, // a[10]
        {
            source: 34,
            target: 60,
            value: 1,
        }, // a[10]
        {
            source: 45,
            target: 60,
            value: 1,
        }, // a[11]
        {
            source: 45,
            target: 60,
            value: 1,
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
            value: 1,
        }, // a[14]
        {
            source: 60,
            target: 76,
            value: 1,
        }, // a[14]
        {
            source: 60,
            target: 78,
            value: 1,
        }, // a[15]
        {
            source: 60,
            target: 78,
            value: 1,
        }, // a[15]
        {
            source: 60,
            target: 92,
            value: 1,
        }, // a[16]
        {
            source: 60,
            target: 92,
            value: 1,
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
