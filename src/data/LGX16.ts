import { SankeyData } from '../types/sankey';

const LGX16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 115,
            target: 4,
            value: 1,
            valueid: 'repf ',
        },
        {
            source: 115,
            target: 4,
            value: 1,
        },
        {
            source: 115,
            target: 5,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[1]
        {
            source: 115,
            target: 11,
            value: 1,
            valueid: 'repea ',
        }, // a[2]
        {
            source: 115,
            target: 12,
            value: 1,
            valueid: 'repea ',
        }, // a[3]
        {
            source: 115,
            target: 17,
            value: 1,
            valueid: 'repg ',
        }, // a[4]
        {
            source: 115,
            target: 19,
            value: 1,
            valueid: 'repg ',
        }, // a[5]
        {
            source: 4,
            target: 40,
            value: 1,
            valueid: 'repf ',
        }, // a[6]
        {
            source: 4,
            target: 40,
            value: 1,
            valueid: 'repf ',
        }, // a[6]
        {
            source: 5,
            target: 40,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[7]
        {
            source: 11,
            target: 33,
            value: 1,
            valueid: 'repea ',
        }, // a[8]
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repea ',
        }, // a[9]
        {
            source: 12,
            target: 33,
            value: 1,
            valueid: 'repea ',
        }, // a[10]
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: 'repea ',
        }, // a[11]
        {
            source: 17,
            target: 45,
            value: 1,
            valueid: 'repg ',
        }, // a[12]
        {
            source: 19,
            target: 45,
            value: 1,
            valueid: 'repg ',
        }, // a[13]
        {
            source: 40,
            target: 70,
            value: 1,
        }, // a[14]
        {
            source: 40,
            target: 60,
            value: 1,
            valueid: 'repf ',
        }, // a[15]
        {
            source: 40,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[16]
        {
            source: 33,
            target: 59,
            value: 1,
            valueid: 'repea ',
        }, // a[17]
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repea ',
        }, // a[18]
        {
            source: 45,
            target: 68,
            value: 1,
            valueid: 'repg ',
        }, // a[19]
        {
            source: 70,
            target: 80,
            value: 1,
        }, // a[20]
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: 'repf ',
        }, // a[21]
        {
            source: 60,
            target: 78,
            value: 1,
            valueid: 'repf ',
        }, // a[22]
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[23]
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[24]
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        }, // a[25]
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: 'repea ',
        }, // a[26]
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repea ',
        }, // a[27]
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: 'repea ',
        }, // a[28]
        {
            source: 68,
            target: 80,
            value: 1,
            valueid: 'repg ',
        }, // a[29]
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepD',
        },
        {
            status: 'RepEA',
        },
    ],
};

LGX16.links.forEach((link, index) => {
    link.paperName = 'LGX16';
    link.id = `LGX16-${index}`;
});

export { LGX16 };
