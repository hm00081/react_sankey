import { SankeyData } from '../types/sankey';

const REP15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 126,
            target: 0,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 126,
            target: 9,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 126,
            target: 11,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 0,
            target: 40,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 36,
            target: 50,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 40,
            target: 50,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 45,
            target: 50,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 50,
            target: 76,
            value: 1,
            valueid: 'targetab',
        },
        {
            source: 50,
            target: 79,
            value: 3,
            valueid: 'targetab',
        },
        {
            source: 50,
            target: 80,
            value: 3,
            valueid: 'targetab',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

REP15.links.forEach((link, index) => {
    link.paperName = 'REP15';
    link.id = `REP15-${index}`;
});

export { REP15 };
