import { SankeyData } from '../types/sankey';

const MVM17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 123,
            target: 2,
            value: 1,
        },
        {
            source: 123,
            target: 4,
            value: 1,
        },
        {
            source: 123,
            target: 7,
            value: 1,
        },
        {
            source: 123,
            target: 17,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 123,
            target: 19,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 123,
            target: 21,
            value: 1,
        },
        {
            source: 123,
            target: 22,
            value: 1,
        },
        {
            source: 123,
            target: 23,
            value: 1,
        },
        {
            source: 2,
            target: 46,
            value: 1,
        },
        {
            source: 4,
            target: 46,
            value: 1,
        },
        {
            source: 7,
            target: 46,
            value: 1,
        },
        {
            source: 2,
            target: 48,
            value: 1,
        },
        {
            source: 4,
            target: 48,
            value: 1,
        },
        {
            source: 7,
            target: 48,
            value: 1,
        },
        {
            source: 17,
            target: 48,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 17,
            target: 49,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 19,
            target: 48,
            value: 1,
        },
        {
            source: 19,
            target: 49,
            value: 1,
        },
        {
            source: 21,
            target: 46,
            value: 1,
        },
        {
            source: 22,
            target: 46,
            value: 1,
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 46,
            target: 60,
            value: 2,
        },
        {
            source: 48,
            target: 60,
            value: 1,
        },
        {
            source: 48,
            target: 55,
            value: 1,
        },
        {
            source: 49,
            target: 55,
            value: 1,
        },
        {
            source: 60,
            target: 77,
            value: 1,
        },
        {
            source: 60,
            target: 78,
            value: 1,
        },
        {
            source: 55,
            target: 76,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repd',
        },
        {
            source: 60,
            target: 79,
            value: 2,
        },
    ],
    status: [
        {
            status: 'RepD',
        },
    ],
};

MVM17.links.forEach((link, index) => {
    link.paperName = 'MVM17';
    link.id = `MVM17-${index}`;
});

export { MVM17 };
