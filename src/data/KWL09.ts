import { SankeyData } from '../types/sankey';

const KWL09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 148,
            target: 9,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 148,
            target: 12,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 12,
            target: 43,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 36,
            target: 59,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 43,
            target: 59,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 91,
            value: 1,
            valueid: 'repeb',
        },
    ],
    status: [
        {
            status: 'none',
        },
    ],
};

KWL09.links.forEach((link, index) => {
    link.paperName = 'KWL09';
    link.id = `KWL09-${index}`;
});

export { KWL09 };
