import { SankeyData } from '../types/sankey';

const XWL17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 133,
            target: 6,
            value: 2,
            valueid: 'targetba',
        },
        {
            source: 133,
            target: 15,
            value: 2,
            valueid: 'targetba',
        },
        {
            source: 133,
            target: 16,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 6,
            target: 45,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 6,
            target: 49,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 15,
            target: 45,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 41,
            target: 61,
            value: 1,
            valueid: 'targetba',
        },
        {
            source: 45,
            target: 61,
            value: 2,
            valueid: 'targetba',
        },
        {
            source: 61,
            target: 77,
            value: 3,
            valueid: 'targetba',
        },
        {
            source: 61,
            target: 84,
            value: 2,
            valueid: 'targetba',
        },
    ],
    status: [
        {
            status: 'TargetBA',
        },
    ],
};

XWL17.links.forEach((link, index) => {
    link.paperName = 'XWL17';
    link.id = `XWL17-${index}`;
});

export { XWL17 };
