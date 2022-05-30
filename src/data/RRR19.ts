import { SankeyData } from '../types/sankey';

const RRR19: SankeyData = {
    nodes: [],

    links: [
        {
            source: 143,
            target: 12,
            value: 2,
            valueid: 'targetbb',
        },
        {
            source: 143,
            target: 14,
            value: 2,
            valueid: 'targetbb',
        },
        {
            source: 143,
            target: 15,
            value: 2,
            valueid: 'targetbb',
        },
        {
            source: 143,
            target: 19,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 143,
            target: 21,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 12,
            target: 41,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 14,
            target: 41,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 14,
            target: 42,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 15,
            target: 42,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 19,
            target: 43,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 41,
            target: 61,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 42,
            target: 61,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 43,
            target: 61,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 61,
            target: 77,
            value: 2,
            valueid: 'targetbb',
        },
        {
            source: 75,
            target: 77,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 61,
            target: 86,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 61,
            target: 92,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 61,
            target: 94,
            value: 1,
            valueid: 'targetbb',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

RRR19.links.forEach((link, index) => {
    link.paperName = 'RRR19';
    link.id = `RRR19-${index}`;
});

export { RRR19 };
