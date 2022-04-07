import { SankeyData } from '../types/sankey';

const MDDD16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 145,
            target: 5,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 145,
            target: 12,
            value: 4,
            valueid: 'repb',
        },
        {
            source: 145,
            target: 23,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 5,
            target: 45,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 12,
            target: 37,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 12,
            target: 45,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 37,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 37,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 45,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 45,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 92,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 70,
            target: 98,
            value: 3,
            valueid: 'repb',
        },
    ],
    status: [
        {
            status: 'none',
        },
    ],
};

MDDD16.links.map((link, index) => {
    link.paperName = 'MDDD16';
    link.category = 'RepB';
    link.id = `MDDD16-${index}`;
});

export { MDDD16 };
