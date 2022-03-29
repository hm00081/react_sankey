// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useRef, useReducer } from 'react';
import { SankeyData } from './types/sankey';
import { Flex, Text } from 'rebass';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
// Data
import { Node, Papers, Status } from './data/AllPaperData';
import { AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys } from './data/AllPaperData';
import { datas, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty } from './Data';

// import { CAA20 as rawData } from './data/CAA20';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { nodeModuleNameResolver } from 'typescript';
import Word from '../src/components/WordCloud/Word';
import { SankeyNode } from 'd3-sankey';

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

// color 추가 함수
// const colorChange = () => {
//     if()
// }
type Props = {
    color: string;
};

// Component
export default function FinalSankey() {
    const exampleRef = useRef(null);
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [state, setState] = useState(0);
    const [clicks, setClicks] = useState();
    const [repbSelected, setRepbSelected] = useState();
    const [color, setColor] = useState(`hsl(0, 0%, 30%)`);
    const [item, setItem] = useState(datas);
    const [difItem, setDifItem] = useState(datas);
    // const clickMe = () => {
    //     if(exampleRef.current === '')
    // }
    // click event 안에서

    // useEffect(() => {
    //     const filteredList = datas?.links.filter((data) => {
    //         for (const [key, property] of Object.entries(data)) return data == repb.links ? true : false;
    //     });
    // }, []);
    // const filteredList = datas?.links.filter((data) => {
    //     return data === repb.links ? true : false;
    // });
    // console.log(filteredList);
    //@ts-ignore
    const hi = <Sankey width={width} height={height} data={item} paddingTop={4} nodeWidth={2} nodeHeight={1.5} nodeMargin={0.8} minLinkBreadth={0.1} maxLinkBreadth={2} />;
    const hiii = <Sankey width={width} height={height} data={difItem} paddingTop={4} nodeWidth={2} nodeHeight={1.5} nodeMargin={0.8} minLinkBreadth={0.1} maxLinkBreadth={2} />;
    // const hii = <button onClick={() => setItem(targetaa)}>show march data</button>;

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
                    <button onClick={() => setItem(repb)}>Show River</button>
                    <button onClick={() => setItem(repc)}>Show RepC</button>
                    <button onClick={() => setItem(repd)}>Show RepD</button>
                    <button onClick={() => setItem(repea)}>Show Wheel</button>
                    <button onClick={() => setItem(repeb)}>Show RepEB</button>
                    <button onClick={() => setItem(repf)}>Show RepF</button>
                    {/* {hiii} */}
                    <button onClick={() => setItem(empty)}>Show Null</button>
                    <button onClick={() => setItem(datas)}>Show Full</button>
                    {/* <button onClick={() => setItem(change)}>Show Change</button> */}
                    {hi}
                </div>
            </FinalSankeys>
        </>
    );
}
