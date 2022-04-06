// Libraries
import { useMeasure } from 'react-use';
import { useMediaQuery } from 'react-responsive';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useRef, useReducer } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty } from './Data';
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from './types';

const FinalSankeys = styled.div`
    margin-top: 80px;
`;

const Text = styled.div`
    display: table-cell;
    position: relative;
    justify-content: space-between;
    white-space: pre-wrap;
    padding-right: 150px;
`;

const Button = styled.button`
    color: black;
    font-size: 1em;
    padding: 0.25em 0.5em 0 0.2em;
    border: 1px solid black;
    border-radius: 5px;
`;

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [originData, setOriginData] = useState<SankeyData>(basicData);
    const title = ['Paper', 'Target', 'Intermediation', 'Representation', 'Vis_var&tech'];
    const columns = title.map((title) => title).filter((title, pos, arr) => arr.indexOf(title) === pos);
    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 1224 },
        { deviceWidth: 1600 } // `device` prop
    );
    useEffect(() => {
        setTimeout(() => {
            setOriginData(repb);
        }, 1000);
    }, []);

    return (
        <>
            {/* <div className={'flex'}></div> */}
            {isDesktopOrLaptop && (
                <FinalSankeys>
                    <div className="container" ref={ref}>
                        <>
                            <Button onClick={() => setOriginData(targetaa)}>Show TargetAA</Button>
                            <Button onClick={() => setOriginData(targetab)}>Show TargetAB</Button>
                            <Button onClick={() => setOriginData(targetba)}>Show TargetBA</Button>
                            <Button onClick={() => setOriginData(targetbb)}>Show TargetBB</Button>
                            <Button onClick={() => setOriginData(targetca)}>Show TargetCA</Button>
                            <Button onClick={() => setOriginData(repa)}>Show Map</Button>
                            <Button onClick={() => setOriginData(repb)}>Show River</Button>
                            <Button onClick={() => setOriginData(repc)}>Show RepC</Button>
                            <Button onClick={() => setOriginData(repd)}>Show RepD</Button>
                            <Button onClick={() => setOriginData(repea)}>Show Wheel</Button>
                            <Button onClick={() => setOriginData(repeb)}>Show RepEB</Button>
                            <Button onClick={() => setOriginData(repf)}>Show RepF</Button>
                            {/* <Button onClick={() => setOriginData(empty)}>Show Null</Button> */}
                            <Button onClick={() => setOriginData(basicData)}>Show Full</Button>
                        </>
                        {/* <>
                        {columns.map((column, i) => (
                            <Text>{column}</Text>
                        ))}
                    </> */}
                        <Sankey
                            width={width}
                            height={height}
                            originData={originData}
                            paddingTop={4}
                            nodeWidth={2}
                            nodeHeight={1.5}
                            nodeMargin={0.8}
                            minLinkBreadth={0.1}
                            maxLinkBreadth={2}
                            setOriginData={setOriginData}
                        />
                        ;
                    </div>
                </FinalSankeys>
            )}
        </>
    );
}
