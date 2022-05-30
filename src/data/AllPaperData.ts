import { CAA20 } from './CAA20';
import { CGK21 } from './CGK21';
import { CSL12 } from './CSL12';
import { DMC09 } from './DMC09';
import { EAIA17 } from './EAIA17';
import { EYG15 } from './EYG15';
import { FCF09 } from './FCF09';
import { GGS12MT } from './GGS12MT';
import { GGS12ST } from './GGS12ST';
import { GGS12TPS } from './GGS12TPS';
import { HYZ13 } from './HYZ13';
import { JTM11 } from './JTM11';
import { JSM16 } from './JSM16';
import { JX17 } from './JX17';
import { KSBK15 } from './KSBK15';
import { LGX16 } from './LGX16';
import { LJC18 } from './LJC18';
import { LLN14 } from './LLN14';
import { LWW13 } from './LWW13';
import { MA16 } from './MA16';
import { MDD10 } from './MDD10';
import { MEV16 } from './MEV16';
import { MHK16 } from './MHK16';
import { MVM17 } from './MVM17';
import { MWSO08 } from './MWSO08';
import { PC15PV } from './PC15PV';
import { REP15 } from './REP15';
import { SCS16 } from './SCS16';
import { SCS17 } from './SCS17';
import { SCS19 } from './SCS19';
import { SSK12 } from './SSK12';
import { VWH13 } from './VWH13';
import { XD99 } from './XD99';
import { XWL17 } from './XWL17';
import { XWS16 } from './XWS16';
import { YFS10 } from './YFS10';
import { ZGWZ14 } from './ZGWZ14';
import { ZLW13 } from './ZLW13';
import { SRJ13 } from './SRJ13';
import { RSRY12 } from './RSRY12';
import { FAKM15 } from './FAKM15';
import { YSK14 } from './YSK14';
import { CSL16 } from './CSL16';
import { RRR19 } from './RRR19';
import { YCC20 } from './YCC20';
import { MDDD16 } from './MDDD16';
import { GYS14 } from './GYS14';
import { MDJW07 } from './MDJW07';
import { KWL09 } from './KWL09';
import { BN11B } from './BN11B';
import { MLG06 } from './MLG06';
import { FA20 } from './FA20';
import { WHWS12 } from './WHWS12';
import { FZC18 } from './FZC18';
import { SankeyLink, SankeyLinkExtended } from '../types';

import { link } from 'fs';

// const AllPaperDatas = { ...CAA20, ...CGK21, ...CSL12 };
//@ts-ignore
const Empty = [];
const TargetAA = [MEV16.links, CAA20.links];
const TargetAB = [XWS16.links, LLN14.links, LWW13.links, FCF09.links, SRJ13.links, RSRY12.links];
const TargetBA = [XWL17.links, JX17.links, HYZ13.links, CGK21.links];
const TargetBB = [YFS10.links, LGX16.links, JSM16.links, JTM11.links, RSRY12.links, GGS12TPS.links, GGS12ST.links, GGS12MT.links];
const TargetCA = [MDD10.links, MHK16.links, MA16.links, ZLW13.links, FAKM15.links, YCC20.links, SCS17.links];
const RepA = [SCS19.links, EYG15.links, SCS17.links, SCS16.links];
const RepB = [CAA20.links, SCS19.links, JTM11.links, MDD10.links, LJC18.links, CGK21.links, YSK14.links, GYS14.links, MDJW07.links, MDDD16.links];
const RepC = [GGS12MT.links, JSM16.links, XWS16.links, LWW13.links, XD99.links, CSL12.links, MHK16.links, VWH13.links, YCC20.links];
const RepD = [LGX16.links, JX17.links, MVM17.links, ZGWZ14.links, CSL16.links, KSBK15.links, SRJ13.links, RSRY12.links];
const RepEA = [GGS12ST.links, YFS10.links, LGX16.links, FAKM15.links, FA20.links, WHWS12.links];
const RepEB = [CGK21.links, CAA20.links, MEV16.links, SCS19.links];
const RepF = [YFS10.links, MEV16.links, SCS16.links, HYZ13.links, MDD10.links, SSK12.links, LJC18.links, FAKM15.links];
// const ChangeRepEA = [YFS10COPY.links, LGX16COPY.links, FAKM15COPY.links, FA20COPY.links, WHWS12COPY.links, GGS12STCOPY.links];
//@ts-ignore
const PaperString = [
    CAA20.links,
    CGK21.links,
    CSL12.links,
    DMC09.links,
    EAIA17.links,
    EYG15.links,
    FCF09.links,
    GGS12MT.links,
    GGS12ST.links,
    GGS12TPS.links,
    HYZ13.links,
    JTM11.links,
    JSM16.links,
    JX17.links,
    KSBK15.links,
    LGX16.links,
    LJC18.links,
    LLN14.links,
    LWW13.links,
    MA16.links,
    MDD10.links,
    MEV16.links,
    MHK16.links,
    MVM17.links,
    MWSO08.links,
    PC15PV.links,
    REP15.links,
    SCS16.links,
    SCS17.links,
    SCS19.links,
    SSK12.links,
    VWH13.links,
    XD99.links,
    XWL17.links,
    XWS16.links,
    YFS10.links,
    ZGWZ14.links,
    ZLW13.links,
    SRJ13.links,
    RSRY12.links,
    FAKM15.links,
    YSK14.links,
    CSL16.links,
    RRR19.links,
    YCC20.links,
    MDDD16.links,
    GYS14.links,
    MDJW07.links,
    KWL09.links,
    BN11B.links,
    MLG06.links,
    FA20.links,
    WHWS12.links,
    FZC18.links,
];

const Papers = [
    BN11B,
    CAA20,
    CGK21,
    CSL12,
    CSL16,
    DMC09,
    EAIA17,
    EYG15,
    FA20,
    FAKM15,
    FCF09,
    GGS12MT,
    GGS12ST,
    GGS12TPS,
    GYS14,
    HYZ13,
    JTM11,
    JSM16,
    JX17,
    KSBK15,
    KWL09,
    LGX16,
    LJC18,
    LLN14,
    LWW13,
    MA16,
    MDD10,
    MDDD16,
    MDJW07,
    MEV16,
    MHK16,
    MLG06,
    MVM17,
    MWSO08,
    PC15PV,
    REP15,
    RRR19,
    RSRY12,
    SCS16,
    SCS17,
    SCS19,
    SRJ13,
    SSK12,
    VWH13,
    XD99,
    XWL17,
    XWS16,
    YCC20,
    YFS10,
    YSK14,
    ZGWZ14,
    ZLW13,
    WHWS12,
    FZC18,
];

//@ts-ignore
const PaperStatus = [
    CAA20.status,
    CGK21.status,
    CSL12.status,
    DMC09.status,
    EAIA17.status,
    EYG15.status,
    FCF09.status,
    GGS12MT.status,
    GGS12ST.status,
    GGS12TPS.status,
    HYZ13.status,
    JTM11.status,
    JSM16.status,
    JX17.status,
    KSBK15.status,
    LGX16.status,
    LJC18.status,
    LLN14.status,
    LWW13.status,
    MA16.status,
    MDD10.status,
    MEV16.status,
    MHK16.status,
    MVM17.status,
    MWSO08.status,
    PC15PV.status,
    REP15.status,
    SCS16.status,
    SCS17.status,
    SCS19.status,
    SSK12.status,
    VWH13.status,
    XD99.status,
    XWL17.status,
    XWS16.status,
    YFS10.status,
    ZGWZ14.status,
    ZLW13.status,
    SRJ13.status,
    RSRY12.status,
    FAKM15.status,
    YSK14.status,
    CSL16.status,
    RRR19.status,
    YCC20.status,
];

//TODO 유형 추가시 계속 변수 생성하기.

//@ts-ignore
const test = () => {
    //@ts-ignore
    const paper = PaperStatus.map((data) => data);
    return paper;
};
const Status = test();
console.log(PaperString[2][0].valueid);
// console.log(Object.values(status[0][0]));
//@ts-ignore
// const c = [].concat.apply([], [status]);
// //@ts-ignore
// console.log(Object.keys(status[0]));

// const testjs = () => {
//     for (let i = 0; i < Object.keys(status).length; i++) {
//         //@ts-ignore
//         for (let j = 0; j < Object.keys(status[i]).length; j++) {
//             //@ts-ignore
//             if (Object.values(status[i][j] === 'TargetAB')) {
//                 return 1;
//             } else return 0;
//             //@ts-ignore
//             console.log([Object.values(status[i][j])]);
//             // //@ts-ignore
//             // return Object.values(status[i][j]);
//         }
//     }
// };
// const testtst = testjs();
// console.log(testtst);

// //@ts-ignore
// const result = c.reduce((result, value) => {
//     // @ts-ignore
//     const target = result.find((r) => r.status === value.status);
//     // @ts-ignore
//     if (!target) result.push({ status: false });
//     // @ts-ignore
//     else status = 'hello';
//     return result;
// }, []);
// console.log(result);

//@ts-ignore
const Emptys = [].concat.apply([], Empty).reduce((result, value) => {
    //@ts-ignore
    const target = result.find((r) => r.source === value.source && r.target === value.target);
    //@ts-ignore
    if (!target) result.push({ source: value.source, target: value.target, value: value.value });
    //@ts-ignore
    else target.value += 1;
    return result;
}, []);
// //@ts-ignore
// const Status = [].concat.apply([], Papers.status).reduce((result, value) => {
//     console.log(result);
//     //@ts-ignore
//     const target = result.find((r) => r.source === value.source && r.target === value.target);
//     //@ts-ignore
//     if (!target) result.push({ source: value.source, target: value.target, value: 1 });
//     //@ts-ignore
//     else target.value += 1;
//     return result;
// }, []);
// console.log(Status);

//@ts-ignore
const AllPaperDatas = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((ApllPaperDatas, onePaper) => {
    //@ts-ignore
    const allOnePaper = ApllPaperDatas.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);
    //@ts-ignore
    if (!allOnePaper) ApllPaperDatas.push({ source: onePaper.source, target: onePaper.target, value: onePaper.value });
    //@ts-ignore
    else allOnePaper.value += 1;
    return ApllPaperDatas;
}, []);

//@ts-ignore
const TargetAAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetAAs, onePaper) => {
    //@ts-ignore
    const targetaaOnePaper = TargetAAs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetaaOnePaper) {
        //@ts-ignore
        TargetAAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetaaOnePaper.value += 1;
    }
    return TargetAAs;
}, []);

//@ts-ignore
const TargetABs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetABs, onePaper) => {
    //@ts-ignore
    const targetabOnePaper = TargetABs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetabOnePaper) {
        //@ts-ignore
        TargetABs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetabOnePaper.value += 1;
    }
    return TargetABs;
}, []);

//@ts-ignore
const TargetBAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetBAs, onePaper) => {
    //@ts-ignore
    const targetbaOnePaper = TargetBAs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetbaOnePaper) {
        //@ts-ignore
        TargetBAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetbaOnePaper.value += 1;
    }
    return TargetBAs;
}, []);

//@ts-ignore
const TargetBBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetBBs, onePaper) => {
    //@ts-ignore
    const targetbbOnePaper = TargetBBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetbbOnePaper) {
        //@ts-ignore
        TargetBBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetbbOnePaper.value += 1;
    }
    return TargetBBs;
}, []);

//@ts-ignore
const TargetCAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetCAs, onePaper) => {
    //@ts-ignore
    const targetcaOnePaper = TargetCAs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetcaOnePaper) {
        //@ts-ignore
        TargetCAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetcaOnePaper.value += 1;
    }
    return TargetCAs;
}, []);

//@ts-ignore
const TargetCBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetCBs, onePaper) => {
    //@ts-ignore
    const targetcbOnePaper = TargetCBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!targetcbOnePaper) {
        //@ts-ignore
        TargetCBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        targetcbOnePaper.value += 1;
    }
    return TargetCBs;
}, []);

//@ts-ignore
const RepAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepAs, onePaper) => {
    //@ts-ignore
    const repaOnePaper = RepAs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repaOnePaper) {
        //@ts-ignore
        RepAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repaOnePaper.value += 1;
    }
    return RepAs;
}, []);

//@ts-ignore
const RepBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepBs, onePaper) => {
    // @ts-ignore
    const repbOnePaper = RepBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);
    // const repbOnePaper = RepBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && (r.valueid === onePaper.valueid) === 'repb');
    // const repb = result.find((r) => r.source === value.source && r.target === value.target && r.valueid === 'repb'); //흐름 보이는데 이건 절대아님.
    //@ts-ignore
    // if (repb) result.push({ source: value.source, target: value.target, value: value.value, valueid: value.valueid });

    if (!repbOnePaper) {
        // console.log('onePaper.paperName', onePaper.paperName);
        //@ts-ignore
        RepBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repbOnePaper.value += 1;
    }
    return RepBs;
}, []);
// console.log('RepBs', RepBs); // 이거 지금 100~149 노드에서 나오는 모든 링크 차례대로 정리되고 있는 상태이다.

//@ts-ignore
//쓰레기값
const OriginRepBs: SankeyLinkExtended[] = [].concat.apply([], PaperString).reduce((RepBs, onePaper) => {
    // @ts-ignore
    const repbOnePaper = RepBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && (r.valueid === onePaper.valueid) === 'repb');
    // const repb = result.find((r) => r.source === value.source && r.target === value.target && r.valueid === 'repb'); //흐름 보이는데 이건 절대아님.
    //@ts-ignore
    // if (repb) result.push({ source: value.source, target: value.target, value: value.value, valueid: value.valueid });
    //@ts-ignore
    if (!repbOnePaper) RepBs.push({ source: onePaper.source, target: onePaper.target, value: onePaper.value, valueid: onePaper.valueid, sourceNodeLink: onePaper.sourceNodeLink });
    //@ts-ignore
    else repbOnePaper.value += 1;
    return RepBs;
}, []);

//@ts-ignore
const RepCs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepCs, onePaper) => {
    //@ts-ignore
    const repcOnePaper = RepCs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repcOnePaper) {
        //@ts-ignore
        RepCs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repcOnePaper.value += 1;
    }
    return RepCs;
}, []);

//@ts-ignore
const RepDs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepDs, onePaper) => {
    //@ts-ignore
    const repdOnePaper = RepDs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repdOnePaper) {
        //@ts-ignore
        RepDs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repdOnePaper.value += 1;
    }
    return RepDs;
}, []);

//@ts-ignore
const RepEAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepEAs, onePaper) => {
    //@ts-ignore
    const repeaOnePaper = RepEAs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repeaOnePaper) {
        //@ts-ignore
        RepEAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repeaOnePaper.value += 1;
    }
    return RepEAs;
}, []);

//@ts-ignore
const RepEBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepEBs, onePaper) => {
    //@ts-ignore
    const repebOnePaper = RepEBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repebOnePaper) {
        //@ts-ignore
        RepEBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repebOnePaper.value += 1;
    }
    return RepEBs;
}, []);

//@ts-ignore
const RepFs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepFs, onePaper) => {
    //@ts-ignore
    const repfOnePaper = RepFs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repfOnePaper) {
        //@ts-ignore
        RepFs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repfOnePaper.value += 1;
    }
    return RepFs;
}, []);

//@ts-ignore
const RepGs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepGs, onePaper) => {
    //@ts-ignore
    const repgOnePaper = RepGs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!repgOnePaper) {
        //@ts-ignore
        RepGs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        repgOnePaper.value += 1;
    }
    return RepGs;
}, []);

//@ts-ignore
const RepHs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepHs, onePaper) => {
    //@ts-ignore
    const rephOnePaper = RepHs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid);

    if (!rephOnePaper) {
        //@ts-ignore
        RepHs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            id: onePaper.id,
        });
    } else {
        rephOnePaper.value += 1;
    }
    return RepHs;
}, []);

//@ts-ignore
const Node = CAA20.nodes;
// const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys];

export { Status, Node, Papers, AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, TargetCBs, RepAs, RepBs, OriginRepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, RepGs, RepHs, Emptys };

// links: AllPaperDatas.map((link) => {
//     let color: string = '';
//     if (hasLinkInGroup(link, RepBs)) {
//       color = `hsl(210, 80%, 50%)`;
//     } else {
//       color = `hsl(0, 0%, 30%)`;
//     }
//     return { ...link, color };
//   });

//   function hasLinkInGroup(wantedLink, linkGroup) {
//     let hasLink: boolean = false;

//     for (let i = 0; i < linkGroup.length; i++) {
//       if (link == linkGroup[i]) {
//         hasLink = true;
//         break;
//       }
//     }

//     return hasLink;
//   }
