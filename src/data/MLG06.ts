import { SankeyData } from '../types/sankey';

const MLG06: SankeyData = {
    nodes: [],

    links: [
        {
            source: 150,
            target: 6,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 150,
            target: 12,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 6,
            target: 39,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 12,
            target: 39,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 39,
            target: 53,
            value: 2,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 53,
            target: 76,
            value: 2,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 53,
            target: 77,
            value: 2,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 53,
            target: 78,
            value: 2,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 53,
            target: 82,
            value: 2,
            valueid: ['targetba', 'repc'],
        },
        {
            source: 53,
            target: 87,
            value: 1,
            valueid: ['targetba', 'repc'],
        },
    ],
    status: [
        {
            status: 'none',
        },
    ],
};

MLG06.links.forEach((link, index) => {
    link.paperName = 'MLG06';
    link.id = `MLG06-${index}`;
});

export { MLG06 };
