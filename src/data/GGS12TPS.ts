import { SankeyData } from '../types/sankey';

const GGS12TPS: SankeyData = {
    nodes: [],

    links: [
        {
            source: 109,
            target: 12,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 109,
            target: 16,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 109,
            target: 24,
            value: 1,
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 42,
            target: 64,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 43,
            target: 64,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 46,
            target: 75,
            value: 1,
        },
        {
            source: 64,
            target: 77,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 64,
            target: 79,
            value: 2,
            valueid: 'targetbb',
        },
        {
            source: 75,
            target: 98,
            value: 1,
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
    ],
};

GGS12TPS.links.forEach((link, index) => {
    link.paperName = 'GGS12TPS';
    link.id = `GGS12TPS-${index}`;
});

export { GGS12TPS };
