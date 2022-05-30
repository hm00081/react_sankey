// Libraries
import { useMeasure } from 'react-use';
import { useState } from 'react';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';

import { LinkColor, SankeyData } from './types/sankey';
import { SankeyLink, SankeyStatus, SankeyLinkExtended } from '../src/types';

// Data
import { PaperNode } from './data/PaperNode';
import { Node, Papers, Status } from './data/AllPaperData';
import {
    AllPaperDatas,
    TargetAAs,
    TargetABs,
    TargetBAs,
    TargetBBs,
    TargetCAs,
    TargetCBs,
    RepAs,
    OriginRepBs,
    RepBs,
    RepCs,
    RepDs,
    RepEAs,
    RepEBs,
    RepFs,
    RepGs,
    RepHs,
    Emptys,
} from './data/AllPaperData';

//@ts-ignore
const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys];
const basicData: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepAs)) {
            color = 'grayLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
            // console.log('gray');
        }
        return { ...link, color };
        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === 'repa') {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }), // 나중에 수정

    //@ts-ignore
    status: Status[0],

    positionStatus: 'init',
};

const targetaa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetAAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetAAs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetAAs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetaa') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetaa') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[1],

    positionStatus: 'init',
};

const targetab: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetABs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetABs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetABs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetab') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetab') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[2],
    positionStatus: 'init',
};

const targetba: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetBAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetBAs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetBA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetba') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetba') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[3],
    positionStatus: 'init',
};

const targetbb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetBBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetBBs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetBB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetbb') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetbb') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[4],
    positionStatus: 'init',
};

const targetca: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetCAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetCAs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetCAs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetca') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetca') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[5],
    positionStatus: 'init',
};

const targetcb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetCBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetCBs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'TargetCB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'targetcb') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetcb') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[5],
    positionStatus: 'init',
};

const repa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepAs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repa') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repa') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),

    links: RepBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepBs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        // 뭔가 각 link마다 식별할 수 있는 id 같은게 있으면 될것 같소 ㅋㅋ (현재 모든 value에 의해 색상이 칠해지고 있음..)
        // 각 link마다 id가 있지만 현재 모든 동일 value를 합치며 link가 그려지는 중이여서
        //그 link내에서 해당 id를 가지는 link만을 구현을 하지 못하는 것 같음.
        // 줌링크 영상 한번 다시 보기.
        // 내일은 꼭 일찍 일어나서 일찍와야지 그냥.
        // dict로 다양한 활용방법 생각해보기.
        // AllPaperData와 CalcSankey는 문제없어 보임. 뭐가 문젤까.....
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repb') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repb') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),

    //@ts-ignore
    status: Status[7],

    positionStatus: 'init',
};

const repc: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepCs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepCs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepC') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repc') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repc') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repd: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepDs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepDs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepD') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repd') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repd') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repea: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEAs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepEA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repea') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repea') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repeb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEBs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepEB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repeb') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repeb') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repf: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepFs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepFs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepF') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repf') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repf') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const repg: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepGs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepGs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepG') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'repg') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repg') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const reph: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepHs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepHs)) {
            if (link.source < 50) {
                color = 'blueLinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'orangeLinkColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'rubyLinkColor';
            } else {
                color = 'greenLinkColor';
            }
        } else {
            if (link.category === 'RepH') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.valueid === 'reph') {
                        hasLink = true;
                    } else if (wantedLink.valueid && wantedLink.valueid.indexOf('reph') !== -1) {
                        hasLink = true;
                    } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: Status[6],

    positionStatus: 'init',
};

const empty = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';

        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: LinkData[13],
    //@ts-ignore
    status: Status[13],
};

export { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty };
