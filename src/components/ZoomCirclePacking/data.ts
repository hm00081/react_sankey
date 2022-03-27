import { ZoomCirclePacking } from './index';

export const data: ZoomCirclePacking = {
    name: 'nivo',
    color: 'hsl(290, 70%, 50%)',
    //@ts-ignore
    children: [
        // ZoomCirclePacking
        {
            name: 'viz',
            color: 'hsl(358, 70%, 50%)',
            children: [
                // ChildrenStatus
                {
                    name: 'stack',
                    color: 'hsl(235, 70%, 50%)',
                    children: [
                        // GrandChildren
                        {
                            name: 'cchart',
                            color: 'hsl(216, 70%, 50%)',
                            loc: 95067, // GrandTwoChildren
                        },
                        {
                            name: 'xAxis',
                            color: 'hsl(90, 70%, 50%)',
                            loc: 173323,
                        },
                        {
                            name: 'yAxis',
                            color: 'hsl(340, 70%, 50%)',
                            loc: 67831,
                        },
                        {
                            name: 'layers',
                            color: 'hsl(6, 70%, 50%)',
                            loc: 75889,
                        },
                    ],
                },
                {
                    name: 'ppie',
                    color: 'hsl(255, 70%, 50%)',
                    children: [
                        {
                            name: 'chart',
                            color: 'hsl(268, 70%, 50%)',
                            children: [
                                {
                                    name: 'pie',
                                    color: 'hsl(26, 70%, 50%)',
                                    children: [
                                        {
                                            name: 'outline',
                                            color: 'hsl(264, 70%, 50%)',
                                            loc: 165865,
                                        },
                                        {
                                            name: 'slices',
                                            color: 'hsl(193, 70%, 50%)',
                                            loc: 176711,
                                        },
                                        {
                                            name: 'bbox',
                                            color: 'hsl(305, 70%, 50%)',
                                            loc: 95184,
                                        },
                                    ],
                                },
                                {
                                    name: 'donut',
                                    color: 'hsl(200, 70%, 50%)',
                                    loc: 65582,
                                },
                                {
                                    name: 'gauge',
                                    color: 'hsl(121, 70%, 50%)',
                                    loc: 128591,
                                },
                            ],
                        },
                        {
                            name: 'legends',
                            color: 'hsl(16, 70%, 50%)',
                            loc: 33741,
                        },
                    ],
                },
            ],
        },
        {
            name: 'colors',
            color: 'hsl(84, 70%, 50%)',
            children: [
                {
                    name: 'rgb',
                    color: 'hsl(91, 70%, 50%)',
                    loc: 26746,
                },
                {
                    name: 'hsl',
                    color: 'hsl(347, 70%, 50%)',
                    loc: 45493,
                },
            ],
        },
        {
            name: 'utils',
            color: 'hsl(87, 70%, 50%)',
            children: [
                {
                    name: 'randomize',
                    color: 'hsl(292, 70%, 50%)',
                    loc: 132596,
                },
                {
                    name: 'resetClock',
                    color: 'hsl(49, 70%, 50%)',
                    loc: 17364,
                },
                {
                    name: 'noop',
                    color: 'hsl(178, 70%, 50%)',
                    loc: 198068,
                },
                {
                    name: 'tick',
                    color: 'hsl(106, 70%, 50%)',
                    loc: 146761,
                },
                {
                    name: 'forceGC',
                    color: 'hsl(155, 70%, 50%)',
                    loc: 125774,
                },
                {
                    name: 'stackTrace',
                    color: 'hsl(71, 70%, 50%)',
                    loc: 105142,
                },
                {
                    name: 'dbg',
                    color: 'hsl(168, 70%, 50%)',
                    loc: 144492,
                },
            ],
        },
        {
            name: 'generators',
            color: 'hsl(234, 70%, 50%)',
            children: [
                {
                    name: 'address',
                    color: 'hsl(34, 70%, 50%)',
                    loc: 28081,
                },
                {
                    name: 'city',
                    color: 'hsl(88, 70%, 50%)',
                    loc: 94673,
                },
                {
                    name: 'animal',
                    color: 'hsl(305, 70%, 50%)',
                    loc: 176555,
                },
                {
                    name: 'movie',
                    color: 'hsl(330, 70%, 50%)',
                    loc: 36717,
                },
                {
                    name: 'user',
                    color: 'hsl(186, 70%, 50%)',
                    loc: 109597,
                },
            ],
        },
        {
            name: 'set',
            color: 'hsl(49, 70%, 50%)',
            children: [
                {
                    name: 'clone',
                    color: 'hsl(139, 70%, 50%)',
                    loc: 149736,
                },
                {
                    name: 'intersect',
                    color: 'hsl(288, 70%, 50%)',
                    loc: 189037,
                },
                {
                    name: 'merge',
                    color: 'hsl(352, 70%, 50%)',
                    loc: 23589,
                },
                {
                    name: 'reverse',
                    color: 'hsl(195, 70%, 50%)',
                    loc: 20650,
                },
                {
                    name: 'toArray',
                    color: 'hsl(264, 70%, 50%)',
                    loc: 75121,
                },
                {
                    name: 'toObject',
                    color: 'hsl(239, 70%, 50%)',
                    loc: 13694,
                },
                {
                    name: 'fromCSV',
                    color: 'hsl(47, 70%, 50%)',
                    loc: 86884,
                },
                {
                    name: 'slice',
                    color: 'hsl(56, 70%, 50%)',
                    loc: 105249,
                },
                {
                    name: 'append',
                    color: 'hsl(209, 70%, 50%)',
                    loc: 83800,
                },
                {
                    name: 'prepend',
                    color: 'hsl(197, 70%, 50%)',
                    loc: 75793,
                },
                {
                    name: 'shuffle',
                    color: 'hsl(288, 70%, 50%)',
                    loc: 139058,
                },
                {
                    name: 'pick',
                    color: 'hsl(113, 70%, 50%)',
                    loc: 120202,
                },
                {
                    name: 'plouc',
                    color: 'hsl(41, 70%, 50%)',
                    loc: 6798,
                },
            ],
        },
        {
            name: 'text',
            color: 'hsl(3, 70%, 50%)',
            children: [
                {
                    name: 'trim',
                    color: 'hsl(278, 70%, 50%)',
                    loc: 21084,
                },
                {
                    name: 'slugify',
                    color: 'hsl(68, 70%, 50%)',
                    loc: 53982,
                },
                {
                    name: 'snakeCase',
                    color: 'hsl(215, 70%, 50%)',
                    loc: 65362,
                },
                {
                    name: 'camelCase',
                    color: 'hsl(42, 70%, 50%)',
                    loc: 148551,
                },
                {
                    name: 'repeat',
                    color: 'hsl(270, 70%, 50%)',
                    loc: 34171,
                },
                {
                    name: 'padLeft',
                    color: 'hsl(64, 70%, 50%)',
                    loc: 72667,
                },
                {
                    name: 'padRight',
                    color: 'hsl(211, 70%, 50%)',
                    loc: 81281,
                },
                {
                    name: 'sanitize',
                    color: 'hsl(34, 70%, 50%)',
                    loc: 10103,
                },
                {
                    name: 'ploucify',
                    color: 'hsl(157, 70%, 50%)',
                    loc: 45514,
                },
            ],
        },
        {
            name: 'misc',
            color: 'hsl(173, 70%, 50%)',
            children: [
                {
                    name: 'greetings',
                    color: 'hsl(81, 70%, 50%)',
                    children: [
                        {
                            name: 'hey',
                            color: 'hsl(337, 70%, 50%)',
                            loc: 70372,
                        },
                        {
                            name: 'HOWDY',
                            color: 'hsl(232, 70%, 50%)',
                            loc: 95722,
                        },
                        {
                            name: 'aloha',
                            color: 'hsl(214, 70%, 50%)',
                            loc: 45452,
                        },
                        {
                            name: 'AHOY',
                            color: 'hsl(19, 70%, 50%)',
                            loc: 65116,
                        },
                    ],
                },
                {
                    name: 'other',
                    color: 'hsl(296, 70%, 50%)',
                    loc: 161262,
                },
                {
                    name: 'path',
                    color: 'hsl(353, 70%, 50%)',
                    children: [
                        {
                            name: 'pathA',
                            color: 'hsl(45, 70%, 50%)',
                            loc: 134856,
                        },
                        {
                            name: 'pathB',
                            color: 'hsl(191, 70%, 50%)',
                            children: [
                                {
                                    name: 'pathB1',
                                    color: 'hsl(223, 70%, 50%)',
                                    loc: 72366,
                                },
                                {
                                    name: 'pathB2',
                                    color: 'hsl(170, 70%, 50%)',
                                    loc: 182136,
                                },
                                {
                                    name: 'pathB3',
                                    color: 'hsl(17, 70%, 50%)',
                                    loc: 142362,
                                },
                                {
                                    name: 'pathB4',
                                    color: 'hsl(238, 70%, 50%)',
                                    loc: 141507,
                                },
                            ],
                        },
                        {
                            name: 'pathC',
                            color: 'hsl(289, 70%, 50%)',
                            children: [
                                {
                                    name: 'pathC1',
                                    color: 'hsl(316, 70%, 50%)',
                                    loc: 70479,
                                },
                                {
                                    name: 'pathC2',
                                    color: 'hsl(73, 70%, 50%)',
                                    loc: 187570,
                                },
                                {
                                    name: 'pathC3',
                                    color: 'hsl(333, 70%, 50%)',
                                    loc: 111069,
                                },
                                {
                                    name: 'pathC4',
                                    color: 'hsl(132, 70%, 50%)',
                                    loc: 178486,
                                },
                                {
                                    name: 'pathC5',
                                    color: 'hsl(70, 70%, 50%)',
                                    loc: 99060,
                                },
                                {
                                    name: 'pathC6',
                                    color: 'hsl(202, 70%, 50%)',
                                    loc: 154335,
                                },
                                {
                                    name: 'pathC7',
                                    color: 'hsl(50, 70%, 50%)',
                                    loc: 25856,
                                },
                                {
                                    name: 'pathC8',
                                    color: 'hsl(194, 70%, 50%)',
                                    loc: 179973,
                                },
                                {
                                    name: 'pathC9',
                                    color: 'hsl(126, 70%, 50%)',
                                    loc: 4252,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
