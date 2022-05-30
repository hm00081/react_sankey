import { SankeyData } from '../types/sankey';

const FCF09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 106,
            target: 5,
            value: 3,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 106,
            target: 17,
            value: 3,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 106,
            target: 18,
            value: 3,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 106,
            target: 24,
            value: 1,
        },
        {
            source: 5,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 5,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 5,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 17,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 17,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 17,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 18,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 18,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 18,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 40,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 42,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 45,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 46,
            target: 75,
            value: 1,
        },
        {
            source: 62,
            target: 77,
            value: 3,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 62,
            target: 79,
            value: 2,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 62,
            target: 80,
            value: 2,
            valueid: ['targetbb', 'reph'],
        },
        {
            source: 75,
            target: 98,
            value: 1,
        },
    ],

    status: [
        {
            status: 'TargetAB',
        },
    ],
};

FCF09.links.forEach((link, index) => {
    link.paperName = 'FCF09';
    link.id = `FCF09-${index}`;
});

export { FCF09 };
