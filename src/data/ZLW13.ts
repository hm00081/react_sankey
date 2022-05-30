import { SankeyData } from '../types/sankey';

const ZLW13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 137,
            target: 7,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 137,
            target: 11,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 137,
            target: 23,
            value: 1,
        },
        {
            source: 7,
            target: 42,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 23,
            target: 46,
            value: 1,
        },
        {
            source: 42,
            target: 55,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 46,
            target: 71,
            value: 1,
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 71,
            target: 98,
            value: 1,
        },
    ],
    status: [
        {
            status: 'TargetCA',
        },
    ],
};

ZLW13.links.forEach((link, index) => {
    link.paperName = 'ZLW13';
    link.id = `ZLW13-${index}`;
});

export { ZLW13 };
