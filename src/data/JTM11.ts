import { SankeyData } from '../types/sankey';

const JTM11: SankeyData = {
    nodes: [],

    links: [
        {
            source: 111,
            target: 5,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 111,
            target: 12,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 111,
            target: 17,
            value: 1,
        },
        {
            source: 111,
            target: 18,
            value: 1,
        },
        {
            source: 111,
            target: 19,
            value: 1,
        },
        {
            source: 111,
            target: 22,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 111,
            target: 24,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 5,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 12,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 17,
            target: 49,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 18,
            target: 49,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 19,
            target: 49,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 22,
            target: 49,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 49,
            target: 54,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 83,
            value: 2,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 54,
            target: 83,
            value: 1,
            valueid: 'repb',
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
            target: 84,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 49,
            target: 60,
            value: 1,
        },
        {
            source: 60,
            target: 77,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 60,
            target: 84,
            value: 1,
            overlapid: 'overlap',
        },
        {
            source: 46,
            target: 70,
            value: 2,
            valueid: 'repb',
        },
        {
            source: 70,
            target: 78,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repb',
            overlapid: 'overlap',
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepB',
        },
    ],
};

JTM11.links.map((link, index) => {
    link.paperName = 'JTM11';
    link.id = `index-${index}`;
});

export { JTM11 };
