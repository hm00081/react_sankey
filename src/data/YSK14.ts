import { SankeyData } from '../types/sankey';

const YSK14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 141,
            target: 11,
            value: 1,
        },
        {
            source: 141,
            target: 11,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 141,
            target: 16,
            value: 1,
        },
        {
            source: 141,
            target: 16,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 141,
            target: 22,
            value: 1,
        },
        {
            source: 141,
            target: 22,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 11,
            target: 39,
            value: 1,
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 16,
            target: 48,
            value: 1,
        },
        {
            source: 24,
            target: 46,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 22,
            target: 46,
            value: 1,
        },
        {
            source: 39,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 39,
            target: 62,
            value: 1,
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 62,
            value: 1,
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 48,
            target: 54,
            value: 1,
        },
        {
            source: 48,
            target: 62,
            value: 1,
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 62,
            target: 76,
            value: 2,
            overlapid: 'overlap',
        },
        {
            source: 62,
            target: 77,
            value: 1,
        },
        {
            source: 62,
            target: 77,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 84,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 86,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 62,
            target: 98,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
    ],
    status: [
        {
            status: 'RepB',
        },
    ],
};

YSK14.links.map((link, index) => {
    link.paperName = 'YSK14';
    link.category = 'RepB';
    link.id = `YSK14-${index}`;
});

export { YSK14 };
