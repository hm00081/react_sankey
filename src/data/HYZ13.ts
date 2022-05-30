import { SankeyData } from '../types/sankey';

const HYZ13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 110,
            target: 11,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 110,
            target: 12,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 12,
            target: 34,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 11,
            target: 36,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 12,
            target: 36,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 11,
            target: 40,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 12,
            target: 40,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 11,
            target: 41,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 12,
            target: 41,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 34,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 36,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 40,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 41,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 60,
            target: 80,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
        {
            source: 60,
            target: 92,
            value: 1,
            valueid: ['repf', 'targetbb', 'targetba'],
        },
    ],
    status: [
        {
            status: 'TargetBA',
        },
        {
            status: 'RepF',
        },
    ],
};

HYZ13.links.forEach((link, index) => {
    link.paperName = 'HYZ13';
    link.id = `HYZ13-${index}`;
});

export { HYZ13 };
