import { SankeyData } from '../types/sankey';

const KSBK15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 114,
            target: 0,
            value: 2,
        },
        {
            source: 114,
            target: 2,
            value: 2,
        },
        {
            source: 114,
            target: 3,
            value: 4,
        },
        {
            source: 114,
            target: 4,
            value: 2,
        },
        {
            source: 114,
            target: 5,
            value: 2,
        },
        {
            source: 114,
            target: 6,
            value: 2,
        },
        {
            source: 114,
            target: 7,
            value: 2,
        },
        {
            source: 114,
            target: 11,
            value: 2,
        },
        {
            source: 114,
            target: 13,
            value: 2,
        },
        {
            source: 114,
            target: 15,
            value: 2,
        },
        {
            source: 114,
            target: 16,
            value: 1,
        },
        {
            source: 0,
            target: 36,
            value: 1,
        },
        {
            source: 2,
            target: 36,
            value: 1,
        },
        {
            source: 3,
            target: 36,
            value: 1,
        },
        {
            source: 4,
            target: 36,
            value: 1,
        },
        {
            source: 5,
            target: 36,
            value: 1,
        },
        {
            source: 6,
            target: 36,
            value: 1,
        },
        {
            source: 7,
            target: 36,
            value: 1,
        },
        {
            source: 0,
            target: 40,
            value: 1,
        },
        {
            source: 2,
            target: 40,
            value: 1,
        },
        {
            source: 3,
            target: 40,
            value: 1,
        },
        {
            source: 4,
            target: 40,
            value: 1,
        },
        {
            source: 5,
            target: 40,
            value: 1,
        },
        {
            source: 6,
            target: 40,
            value: 1,
        },
        {
            source: 7,
            target: 40,
            value: 1,
        },
        {
            source: 0,
            target: 46,
            value: 1,
        },
        {
            source: 2,
            target: 46,
            value: 1,
        },
        {
            source: 3,
            target: 46,
            value: 1,
        },
        {
            source: 4,
            target: 46,
            value: 1,
        },
        {
            source: 5,
            target: 46,
            value: 1,
        },
        {
            source: 6,
            target: 46,
            value: 1,
        },
        {
            source: 7,
            target: 46,
            value: 1,
        },
        {
            source: 11,
            target: 41,
            value: 1,
        },
        {
            source: 13,
            target: 41,
            value: 1,
        },
        {
            source: 15,
            target: 41,
            value: 1,
        },
        {
            source: 11,
            target: 48,
            value: 1,
        },
        {
            source: 13,
            target: 48,
            value: 1,
        },
        {
            source: 15,
            target: 48,
            value: 1,
        },
        {
            source: 11,
            target: 49,
            value: 1,
        },
        {
            source: 13,
            target: 49,
            value: 1,
        },
        {
            source: 15,
            target: 49,
            value: 1,
        },
        {
            source: 16,
            target: 41,
            value: 1,
        },
        {
            source: 16,
            target: 46,
            value: 1,
        },
        {
            source: 36,
            target: 62,
            value: 1,
        },
        {
            source: 40,
            target: 62,
            value: 2,
        },
        {
            source: 46,
            target: 55,
            value: 1,
        },
        {
            source: 46,
            target: 60,
            value: 2,
        },
        {
            source: 41,
            target: 55,
            value: 1,
        },
        {
            source: 41,
            target: 60,
            value: 2,
        },
        {
            source: 49,
            target: 55,
            value: 1,
        },
        {
            source: 49,
            target: 60,
            value: 1,
        },
        {
            source: 48,
            target: 62,
            value: 1,
        },
        {
            source: 62,
            target: 77,
            value: 1,
        },
        {
            source: 55,
            target: 78,
            value: 1,
        },
        {
            source: 55,
            target: 84,
            value: 2,
        },
        {
            source: 55,
            target: 85,
            value: 2,
        },
        {
            source: 55,
            target: 48,
            value: 1,
        },
        {
            source: 60,
            target: 78,
            value: 1,
        },
        {
            source: 62,
            target: 77,
            value: 2,
        },
        {
            source: 60,
            target: 89,
            value: 1,
        },
    ],
    status: [
        {
            status: 'RepD',
        },
    ],
};

KSBK15.links.forEach((link, index) => {
    link.paperName = 'KSBK15';
    link.id = `KSBK15-${index}`;
});

export { KSBK15 };
