import { SankeyData } from '../types/sankey';

const SRJ13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 138,
            target: 11,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 138,
            target: 11,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 138,
            target: 16,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 138,
            target: 24,
            value: 1,
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 24,
            target: 49,
            value: 1,
        },
        {
            source: 39,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 49,
            target: 70,
            value: 1,
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: ['repd ', 'targetca'],
        },
        {
            source: 70,
            target: 88,
            value: 1,
        },
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'RepD',
        },
    ],
};

SRJ13.links.forEach((link, index) => {
    link.paperName = 'SRJ13';
    link.id = `SRJ13-${index}`;
});

export { SRJ13 };
