import { SankeyData } from '../types/sankey';

const WHWS12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 152,
            target: 0,
            value: 3,
            valueid: 'repea',
        }, // a[0]
        {
            source: 152,
            target: 3,
            value: 3,
            valueid: 'repea',
        }, // a[1]
        {
            source: 152,
            target: 6,
            value: 3,
            valueid: 'repea',
        }, // a[2]
        {
            source: 152,
            target: 11,
            value: 3,
            valueid: 'repea',
        }, // a[3]
        {
            source: 0,
            target: 39,
            value: 2,
            valueid: 'repea',
        }, // a[4]
        {
            source: 3,
            target: 39,
            value: 2,
            valueid: 'repea',
        }, // a[5]
        {
            source: 6,
            target: 39,
            value: 2,
            valueid: 'repea',
        }, // a[6]
        {
            source: 0,
            target: 41,
            value: 2,
            valueid: 'repea',
        }, // a[7]
        {
            source: 3,
            target: 41,
            value: 2,
            valueid: 'repea',
        }, // a[8]
        {
            source: 6,
            target: 41,
            value: 2,
            valueid: 'repea',
        }, // a[9]
        {
            source: 0,
            target: 42,
            value: 2,
            valueid: 'repea',
        }, // a[10]
        {
            source: 3,
            target: 42,
            value: 2,
            valueid: 'repea',
        }, // a[11]
        {
            source: 6,
            target: 42,
            value: 2,
            valueid: 'repea',
        }, // a[12]
        {
            source: 0,
            target: 49,
            value: 1,
            valueid: 'repea',
        }, // a[13]
        {
            source: 3,
            target: 49,
            value: 1,
            valueid: 'repea',
        }, // a[14]
        {
            source: 6,
            target: 49,
            value: 1,
            valueid: 'repea',
        }, // a[15]
        {
            source: 11,
            target: 39,
            value: 2,
            valueid: 'repea',
        }, // a[16]
        {
            source: 11,
            target: 41,
            value: 2,
            valueid: 'repea',
        }, // a[17]
        {
            source: 11,
            target: 42,
            value: 2,
            valueid: 'repea',
        }, // a[18]
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repea',
        }, // a[19]
        {
            source: 39,
            target: 60,
            value: 1,
            valueid: 'repea',
        }, // a[20]
        {
            source: 41,
            target: 60,
            value: 1,
            valueid: 'repea',
        }, // a[21]
        {
            source: 42,
            target: 60,
            value: 1,
            valueid: 'repea',
        }, // a[22]
        {
            source: 39,
            target: 68,
            value: 2,
            valueid: 'repea',
        }, // a[23]
        {
            source: 41,
            target: 68,
            value: 2,
            valueid: 'repea',
        }, // a[24]
        {
            source: 42,
            target: 68,
            value: 2,
            valueid: 'repea',
        }, // a[25]
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repea',
        }, // a[26]
        {
            source: 49,
            target: 68,
            value: 1,
            valueid: 'repea',
        }, // a[27]
        {
            source: 39,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[28]
        {
            source: 41,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[29]
        {
            source: 42,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[30]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repea',
        }, // a[31]
        {
            source: 60,
            target: 77,
            value: 2,
            valueid: 'repea',
        }, // a[32]
        {
            source: 60,
            target: 78,
            value: 2,
            valueid: 'repea',
        }, // a[33]
        {
            source: 68,
            target: 76,
            value: 3,
            valueid: 'repea',
        }, // a[34]
        {
            source: 68,
            target: 77,
            value: 3,
            valueid: 'repea',
        }, // a[35]
        {
            source: 68,
            target: 78,
            value: 3,
            valueid: 'repea',
        }, // a[36]
        {
            source: 59,
            target: 78,
            value: 2,
            valueid: 'repea',
        }, // a[37]
        {
            source: 59,
            target: 80,
            value: 2,
            valueid: 'repea',
        }, // a[38]
    ],
    status: [
        {
            status: 'none',
        },
    ],
};

WHWS12.links.forEach((link, index) => {
    link.paperName = 'WHWS12';
    link.id = `WHWS12-${index}`;
});

export { WHWS12 };
