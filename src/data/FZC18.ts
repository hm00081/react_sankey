import { SankeyData } from '../types/sankey';

const FZC18: SankeyData = {
    nodes: [],

    links: [
        {
            source: 153,
            target: 11,
            value: 2,
            valueid: 'repg',
        },
        {
            source: 153,
            target: 11,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 153,
            target: 13,
            value: 2,
            valueid: 'repg',
        },
        {
            source: 153,
            target: 13,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 153,
            target: 20,
            value: 1,
        },
        {
            source: 153,
            target: 20,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 153,
            target: 23,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 153,
            target: 23,
            value: 1,
        },
        {
            source: 153,
            target: 24,
            value: 1,
        },
        {
            source: 11,
            target: 40,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 13,
            target: 40,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 40,
            target: 68,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 68,
            target: 92,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 60,
            target: 92,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 45,
            target: 68,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 68,
            target: 81,
            value: 1,
            valueid: 'repg',
        },
        {
            source: 20,
            target: 45,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 45,
            target: 60,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 77,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 20,
            target: 49,
            value: 1,
        },
        {
            source: 49,
            target: 73,
            value: 1,
        },
        {
            source: 49,
            target: 73,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 73,
            target: 93,
            value: 1,
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 24,
            target: 46,
            value: 1,
        },
        {
            source: 46,
            target: 73,
            value: 1,
        },
        {
            source: 73,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 73,
            target: 98,
            value: 1,
        },
        {
            source: 23,
            target: 49,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 98,
            value: 1,
            valueid: 'repf',
        },
    ],

    status: [
        {
            status: 'none',
        },
    ],
};

FZC18.links.forEach((link, index) => {
    link.paperName = 'FZC18';
    link.id = `FZC18-${index}`;
});

export { FZC18 };
