// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.css';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Data & Hooks
import { useState, useEffect, useRef, useReducer } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty } from './Data';
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from './types';
import { ButtonGroup } from '@mui/material';
import { RepHs } from './data/AllPaperData';
const FinalSankeys = styled.div`
    margin-top: 50px;
`;

// const Button = styled.button`
//     color: hsl(0, 0%, 8%);
//     font-size: 1em;
//     margin: 0.3em;
//     padding: 0.25em 1em;
//     background: white;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
// `;

const Menu = styled.div`
    position: relative;
    display: block;
    font-size: 2em;
    padding-bottom: 10px;
    margin-top: 10px;
    font-weight: bold;
    color: black;
    justify-content: space-between;
`;

const SecButtonPos = styled.div`
    display: inline-block;
    margin-left: 12em;
    margin-top: -55px;
`;

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            //@ts-ignore
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        pink: {
            pink: '#db7093',
        },
    },
    pink: {
        pink: '#db7093',
    },
});

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    // const [taa, setTaa] = useState(0);
    // const [tab, setTab] = useState(0);
    // const [tba, setTba] = useState(0);
    // const [tbb, setTbb] = useState(0);
    // const [tca, setTca] = useState(0);
    // const [ra, setRa] = useState(0);
    // const [rb, setRb] = useState(0);
    // const [rc, setRc] = useState(0);
    // const [rd, setRd] = useState(0);
    // const [rea, setRea] = useState(0);
    // const [reb, setReb] = useState(0);
    // const [rf, setRf] = useState(0);
    // const [full, setFull] = useState(0);
    const [btn, setBtn] = useState(0);
    const [selected, setSelcted] = useState<'click' | 'unclick'>('unclick');
    const [originData, setOriginData] = useState<SankeyData>(repb);
    // console.log(originData);
    const title = ['Paper', 'Target', 'Intermediation', 'Representation', 'Vis_var&tech'];
    const columns = title.map((title) => title).filter((title, pos, arr) => arr.indexOf(title) === pos);

    useEffect(() => {
        setTimeout(() => {
            setOriginData(basicData);
        }, 1000);
    }, []);

    return (
        <>
            {/* <div className={'flex'}></div> */}
            <FinalSankeys>
                <div className="container" ref={ref}>
                    <Menu>Target Theme</Menu>
                    <ButtonGroup size="large" aria-label="outlined primary button group" color="secondary" variant="outlined" style={{ marginTop: '10px', marginBottom: '20px' }}>
                        <Button
                            onClick={() => {
                                setOriginData(targetaa);
                                setSelcted('click');
                                setBtn(9);
                            }}
                            variant={btn === 9 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Politician's Speech
                        </Button>
                        <Button
                            onClick={() => {
                                setOriginData(targetab);
                                setSelcted('click');
                                setBtn(10);
                            }}
                            variant={btn === 10 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Opinion to Politicians
                        </Button>
                        <Button
                            onClick={() => {
                                setOriginData(targetba);
                                setSelcted('click');
                                setBtn(11);
                            }}
                            variant={btn === 11 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Product Appraisal
                        </Button>
                        <Button
                            onClick={() => {
                                setOriginData(targetbb);
                                setSelcted('click');
                                setBtn(12);
                            }}
                            variant={btn === 12 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Service Appraisal
                        </Button>
                        <Button
                            onClick={() => {
                                setOriginData(targetca);
                                setSelcted('click');
                                setBtn(13);
                            }}
                            variant={btn === 13 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Opinion on a Specific Event
                        </Button>
                        <Button
                            onClick={() => {
                                setOriginData(targetcb);
                                setSelcted('click');
                                setBtn(16);
                            }}
                            variant={btn === 16 ? 'contained' : 'outlined'}
                            style={{ textTransform: 'capitalize' }}
                        >
                            Diffusion of Sentiment
                        </Button>
                    </ButtonGroup>
                    <SecButtonPos>
                        <Menu>Representation Theme</Menu>
                        <ButtonGroup size="large" aria-label="outlined primary button group" color="secondary" variant="outlined" style={{ marginTop: '10px' }}>
                            <ThemeProvider theme={theme}></ThemeProvider>
                            <Button
                                onClick={() => {
                                    setOriginData(repa);
                                    setSelcted('click');
                                    setBtn(1);
                                }}
                                variant={btn === 1 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Map
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repb);
                                    setSelcted('click');
                                    setBtn(2);
                                }}
                                variant={btn === 2 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                River
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repc);
                                    setSelcted('click');
                                    setBtn(3);
                                }}
                                variant={btn === 3 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Plant
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repd);
                                    setSelcted('click');
                                    setBtn(4);
                                }}
                                variant={btn === 4 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Bubble
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repea);
                                    setSelcted('click');
                                    setBtn(5);
                                }}
                                variant={btn === 5 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Wheel
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repeb);
                                    setSelcted('click');
                                    setBtn(6);
                                }}
                                variant={btn === 6 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Building & Structure
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repf);
                                    setSelcted('click');
                                    setBtn(7);
                                }}
                                variant={btn === 7 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Geometry
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repg);
                                    setSelcted('click');
                                    setBtn(8);
                                }}
                                variant={btn === 8 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Machine
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(reph);
                                    setSelcted('click');
                                    setBtn(14);
                                }}
                                variant={btn === 14 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Decorative Pattern
                            </Button>

                            <Button
                                onClick={() => {
                                    setOriginData(basicData);
                                    setSelcted('click');
                                    setBtn(0);
                                }}
                                variant={btn === 0 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'capitalize' }}
                            >
                                Show Full
                            </Button>
                        </ButtonGroup>
                    </SecButtonPos>
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
                </div>
            </FinalSankeys>
            )
        </>
    );
}
