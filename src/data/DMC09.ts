import { SankeyData } from '../types/sankey';

const DMC09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 103,
            target: 9,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 103,
            target: 11,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 36,
            target: 58,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 42,
            target: 58,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 58,
            target: 76,
            value: 2,
            valueid: 'targetba',
        },
        {
            source: 58,
            target: 77,
            value: 2,
            valueid: 'targetba',
        },
        {
            source: 58,
            target: 84,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 58,
            target: 93,
            value: 1,
            valueid: 'targetba',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

DMC09.links.forEach((link, index) => {
    link.paperName = 'DMC09';
    link.id = `DMC09-${index}`;
});

export { DMC09 };
