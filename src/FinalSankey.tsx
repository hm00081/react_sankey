// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useMemo, useReducer } from 'react';
import { SankeyData } from './types/sankey';
import { Flex, Text } from 'rebass';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
// Data
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys, ChangeRepEAs } from './data/AllPaperData';
import { datas, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty, change } from './Data';

// import { CAA20 as rawData } from './data/CAA20';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { nodeModuleNameResolver } from 'typescript';
import { data } from './data/sample';
import Word from '../src/components/WordCloud/Word';

const FinalSankeys = styled.div`
    // font-family: sans-serif;
    // width: 50vw;
    // height: 100vh;
    // display: flex;
    // position: absolute;
    margin-top: 180px;
    // justify-content: center;
    // align-items: center;
`;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// console.log(Status.length);
//@ts-ignore
const LinkData = [AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys];
// console.log(Papers);

// console.log(Papers[0].status[0]);

const linkss = LinkData.map((link) => {
    return link;
});
// console.log(linkss);
console.log(change);
const dataSet = [datas, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty];
// console.log(dataSet);
console.log(Word.name);
//@ts-ignore
// console.log(Object.values(data.status[1]));
// console.log(Object.values(Status[0][0]));
// console.log(data.links);
// console.log(Object.values(data.status[0]));
// for (let i = 0; i < Status.length; i++) {
//     const handle = () => {
//         for (let j = 0; j < Object.keys(data.status[i]).length; j++) {
//             //@ts-ignore
//             if (Object.values(Status[i][j]) !== 0) {
//                 console.log(i);
//                 // console.log(Object.values(Status[i][j]));
//             } else console.log('0');
//             // if(Object.values(data.status[i] === ))
//         }
//     };
// }

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [state, setState] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [item, setItem] = useState(datas);
    //@ts-ignore
    const hi = <Sankey width={width} height={height} data={item} paddingTop={4} nodeWidth={2} nodeHeight={1.5} nodeMargin={0.8} minLinkBreadth={0.1} maxLinkBreadth={2} />;
    const hii = <button onClick={() => setItem(targetaa)}>show march data</button>;
    return (
        <>
            <div className={'flex'}></div>

            <FinalSankeys>
                <div className="container" ref={ref}>
                    <button onClick={() => setItem(targetaa)}>Show TargetAA</button>
                    <button onClick={() => setItem(targetab)}>Show TargetAB</button>
                    <button onClick={() => setItem(targetba)}>Show TargetBA</button>
                    <button onClick={() => setItem(targetbb)}>Show TargetBB</button>
                    <button onClick={() => setItem(targetca)}>Show TargetCA</button>
                    <button onClick={() => setItem(repa)}>Show RepA</button>
                    <button onClick={() => setItem(repb)}>Show RepB</button>
                    <button onClick={() => setItem(repc)}>Show RepC</button>
                    <button onClick={() => setItem(repd)}>Show RepD</button>
                    <button onClick={() => setItem(repea)}>Show RepEA</button>
                    <button onClick={() => setItem(repeb)}>Show RepEB</button>
                    <button onClick={() => setItem(repf)}>Show RepF</button>
                    <button onClick={() => setItem(empty)}>Show Null</button>
                    <button onClick={() => setItem(datas)}>Show Full</button>
                    <button onClick={() => setItem(change)}>Show Change</button>
                    {hi}
                </div>
            </FinalSankeys>
        </>
    );
}
