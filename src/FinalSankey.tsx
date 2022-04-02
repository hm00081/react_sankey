// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect, useRef, useReducer } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty } from './Data';
import { SankeyData } from './types';

const FinalSankeys = styled.div`
    margin-top: 180px;
`;

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [originData, setOriginData] = useState<SankeyData>(basicData);

    useEffect(() => {
        setTimeout(() => {
            setOriginData(repb);
        }, 1000);
    }, []);

    return (
        <>
            <div className={'flex'}></div>

            <FinalSankeys>
                <div className="container" ref={ref}>
                    <button onClick={() => setOriginData(targetaa)}>Show TargetAA</button>
                    <button onClick={() => setOriginData(targetab)}>Show TargetAB</button>
                    <button onClick={() => setOriginData(targetba)}>Show TargetBA</button>
                    <button onClick={() => setOriginData(targetbb)}>Show TargetBB</button>
                    <button onClick={() => setOriginData(targetca)}>Show TargetCA</button>
                    <button onClick={() => setOriginData(repa)}>Show Map</button>
                    <button onClick={() => setOriginData(repb)}>Show River</button>
                    <button onClick={() => setOriginData(repc)}>Show RepC</button>
                    <button onClick={() => setOriginData(repd)}>Show RepD</button>
                    <button onClick={() => setOriginData(repea)}>Show Wheel</button>
                    <button onClick={() => setOriginData(repeb)}>Show RepEB</button>
                    <button onClick={() => setOriginData(repf)}>Show RepF</button>
                    <button onClick={() => setOriginData(empty)}>Show Null</button>
                    <button onClick={() => setOriginData(basicData)}>Show Full</button>
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
        </>
    );
}
