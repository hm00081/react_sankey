import { SankeyData } from '../types/sankey';

const CSL16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 142,
            target: 11,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 142,
            target: 11,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 142,
            target: 11,
            value: 1,
        },
        {
            source: 142,
            target: 13,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 142,
            target: 13,
            value: 1,
        },
        {
            source: 142,
            target: 16,
            value: 2,
        },
        {
            source: 142,
            target: 23,
            value: 1,
        },
        {
            source: 142,
            target: 28,
            value: 1,
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 11,
            target: 39,
            value: 1,
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 13,
            target: 48,
            value: 1,
        },
        {
            source: 16,
            target: 43,
            value: 1,
        },
        {
            source: 16,
            target: 48,
            value: 1,
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 28,
            target: 46,
            value: 1,
        },
        {
            source: 39,
            target: 55,
            value: 1,
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 39,
            target: 62,
            value: 1,
        },
        {
            source: 43,
            target: 62,
            value: 1,
        },
        {
            source: 48,
            target: 62,
            value: 1,
        },
        {
            source: 46,
            target: 70,
            value: 1,
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 62,
            target: 79,
            value: 2,
        },
        {
            source: 62,
            target: 80,
            value: 1,
        },
        {
            source: 62,
            target: 84,
            value: 1,
        },
        {
            source: 62,
            target: 88,
            value: 1,
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 70,
            target: 98,
            value: 1,
        },
    ],
    status: [
        {
            status: 'RepD',
        },
    ],
};

CSL16.links.forEach((link, index) => {
    link.paperName = 'CSL16';
    link.id = `CSL16-${index}`;
});

export { CSL16 };
