import { SankeyData } from '../types/sankey';

const GGS12MT: SankeyData = {
    nodes: [],

    links: [
        {
            source: 107,
            target: 3,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 107,
            target: 12,
            value: 2,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 107,
            target: 16,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 107,
            target: 24,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 107,
            target: 28,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 28,
            target: 46,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 43,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
        },
        {
            source: 53,
            target: 77,
            value: 3,
            valueid: ['targetbb', 'repc'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repc',
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepC',
        },
    ],
};

GGS12MT.links.forEach((link, index) => {
    link.paperName = 'GGS12MT';
    link.id = `GGS12MT-${index}`;
});

export { GGS12MT };
