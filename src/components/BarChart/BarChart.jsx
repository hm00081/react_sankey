import { Papers, AllPaperDatas, TargetAAs, TargetABs, TargetBAs, TargetBBs, TargetCAs, RepAs, RepBs, RepCs, RepDs, RepEAs, RepEBs, RepFs, Emptys } from '../../data/AllPaperDataBar';
import React from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { GridRows } from '@visx/grid';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeFormat, timeParse } from 'd3-time-format';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { LegendOrdinal } from '@visx/legend';
import { ResponsiveBar } from '@nivo/bar';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, repa, repb, repc, repd, repea, repeb, repf, empty } from '../../Data';
import './index.css';

// Props
// type Props = {
//     // node: SankeyNodeExtended;
//     // link: SankeyLinkExtended;

//     event: boolean;
//     depth: number;
//     index: number;
//     x0: number;
//     x1: number;
//     y0: number;
//     y1: number;
//     value: number;
//     color: string;
//     label: string;
//     formattedValue: string;
//     margin: Margin;
//     layer: number;
//     x: number;
//     y: number;
//     width: number;
//     height: number;
// };

// interface Margin {
//     top: number;
//     right: number;
//     bottom: number;
//     left: number;
// }

console.log(basicData.links[0]);

const darkGreen = '#017300';
const green = '#01c88d';
const orange = '#faa93d';
const yellow = '#ffd32e';
const lightYellow = '#ffcd00';
const lightestYellow = '#ffe57c';
const lightGray = '#ccd3de';
const gray = '#d3d3d3';
const darkGray = '#282828';
const background = '#eaedff';
const defaultMargin = { top: 60, right: 10, bottom: 60, left: 280 };
console.log(typeof defaultMargin.top);
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 160,
    minHeight: 100,
    backgroundColor: '#4e5271',
    color: 'white',
};

const legendStyles = {
    display: 'flex',
    minWidth: 230,
    backgroundColor: 'white',
    color: '#282828',
    fontSize: 12,
    position: 'absolute',
    top: 10,
    left: 5,
    boxShadow: '2px 2px 5px #ccd3de',
};

const data = [
    {
        level: 'CAA20', // Target
        date: '2020-10-01',
        //이런식으로 각 데이터 집어넣으면 되지 않을라나.
        Target: 10, // Entity
        Intermediation: 80, // Aspect
        'Gaining skils & understanding': 10,
        Representation: 0, // Sentiment
        Vis_var: 3, // Opinion Holder
        Vis_tech: 0, // Time
        'Attention & response': 0, // 각 하위요소
    },
    {
        level: 'B', // Intermediation
        date: '2020-10-02',
        Target: 0, // Detection
        Intermediation: 68, // Summarization
        'Gaining skils & understanding': 18,
        Representation: 0, // Classification
        Vis_var: 5, // Comparison
        Vis_tech: 0, // Exploration
        'Attention & response': 0,
    },
    {
        level: 'C', // Representation
        date: '2020-10-03',
        Target: 0, // Element // natural & artifact
        Intermediation: 75, // Process // natural & artifact
        'Gaining skils & understanding': 8,
        Representation: 0,
        Vis_var: 9,
        Vis_tech: 0,
        'Attention & response': 0,
    },
    {
        level: 'D', // Visual variables
        date: '2020-10-04',
        Target: 0, // Value
        Intermediation: 52, // Color
        'Gaining skils & understanding': 20,
        Representation: 0, // Dimension
        Vis_var: 10, // Shape
        Vis_tech: 0, // Position
        'Attention & response': 0,
    },
    {
        level: 'E', // Visual Technique
        date: '2020-10-05',
        Target: 0, // 3d
        Intermediation: 58, // node-link
        'Gaining skils & understanding': 10,
        Representation: 0, // bubble chart
        Vis_var: 3, // etc...
        Vis_tech: '0',
        'Attention & response': 0,
    },
    {
        level: 'F', // Intermediation
        date: '2020-10-02',
        Target: 0, // Detection
        Intermediation: 68, // Summarization
        'Gaining skils & understanding': 18,
        Representation: 0, // Classification
        Vis_var: 5, // Comparison
        Vis_tech: 0, // Exploration
        'Attention & response': 0,
    },
    {
        level: 'G', // Representation
        date: '2020-10-03',
        Target: 0, // Element // natural & artifact
        Intermediation: 75, // Process // natural & artifact
        'Gaining skils & understanding': 8,
        Representation: 0,
        Vis_var: 9,
        Vis_tech: 0,
        'Attention & response': 0,
    },
    {
        level: 'H', // Visual variables
        date: '2020-10-04',
        Target: 0, // Value
        Intermediation: 52, // Color
        'Gaining skils & understanding': 20,
        Representation: 0, // Dimension
        Vis_var: 10, // Shape
        Vis_tech: 0, // Position
        'Attention & response': 0,
    },
    {
        level: 'I', // Visual Technique
        date: '2020-10-05',
        Target: 0, // 3d
        Intermediation: 58, // node-link
        'Gaining skils & understanding': 10,
        Representation: 0, // bubble chart
        Vis_var: 3, // etc...
        Vis_tech: '0',
        'Attention & response': 0,
    },
]; // 차트 색상은 생키랑 동일하게 하는게 좋을 듯 하다.
//bar chart legend
const keys = ['Target', 'Intermediation', 'Representation', 'Vis_var', 'Vis_tech'];

const scoreTotals = data.reduce((allTotals, currentLevel) => {
    const totalScore = keys.reduce((scoreTotal, k) => {
        //@ts-ignore
        scoreTotal += Number(currentLevel[k]);
        return scoreTotal;
    }, 0);
    //@ts-ignore
    allTotals.push(totalScore);
    return allTotals;
}, []);

const parseDate = timeParse('%Y-%m-%d');
const format = timeFormat('%d %b %Y');
//@ts-ignore
const formatDate = (date) => format(parseDate(date));

//@ts-ignore
const getDate = (d) => d.date;
//@ts-ignore
const getLevel = (d) => d.level;

const levelScale = scaleBand({ domain: data.map(getLevel), padding: 0.2 });
const dateScale = scaleBand({ domain: data.map(getDate) });
const scoreScale = scaleLinear({
    domain: [0, Math.max(...scoreTotals)],
    nice: true,
});
const colorScale = scaleOrdinal({
    domain: keys,
    range: [darkGreen, green, orange, yellow, yellow, yellow, lightYellow, lightYellow, lightestYellow, lightGray],
});
const percentageScale = scaleLinear({
    domain: [0, 100],
});
//@ts-ignore
let tooltipTimeout;

export const StackedBarChart = ({ width, height, event = false, margin = defaultMargin }) => {
    const { tooltipOpen, tooltipTop, tooltipLeft, hideTooltip, showTooltip, tooltipData } = useTooltip();
    console.log(typeof tooltipData);
    const { containerRef, TooltipInPortal } = useTooltipInPortal();

    // creates the bounds
    const xMin = 0;
    //@ts-ignore
    const xMax = width - margin.left - margin.right;
    const yMin = 0;
    //@ts-ignore
    const yMax = height - margin.top - margin.bottom;

    // And then scales the graph by our data
    dateScale.rangeRound([xMin, xMax]);
    scoreScale.range([yMax, yMin]);
    levelScale.range([xMin, xMax]);
    percentageScale.rangeRound([yMax, yMin]);

    if (!width || !height) {
        return null;
    }

    const barStack = (
        //@ts-ignore
        <BarStack data={data} keys={keys} x={getLevel} xScale={levelScale} yScale={scoreScale} color={colorScale}>
            {(barStacks) =>
                barStacks.map((barStack) =>
                    barStack.bars.map((bar) => (
                        <rect
                            key={`bar-stack-${barStack.index}-${bar.index}`}
                            x={bar.x}
                            y={bar.y}
                            height={bar.height}
                            width={bar.width}
                            fill={bar.color}
                            stroke="white"
                            onClick={() => {
                                if (event) alert(`Clicked: ${JSON.stringify(bar)}`);
                            }}
                            onMouseLeave={() => {
                                tooltipTimeout = window.setTimeout(() => {
                                    hideTooltip();
                                }, 300);
                            }}
                            onMouseMove={(event) => {
                                //@ts-ignore
                                if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                const top = event.clientY;
                                const left = bar.x + bar.width + 260;
                                showTooltip({
                                    tooltipData: bar,
                                    tooltipTop: top,
                                    tooltipLeft: left,
                                });
                            }}
                        />
                    ))
                )
            }
        </BarStack>
    );
    //@ts-ignore
    const axisLeft = <AxisLeft top={margin.top} left={margin.left} scale={percentageScale} hideTicks numTicks={5} tickFormat={(percent) => percent + '%'} stroke={gray} strokeWidth={1} />;
    //@ts-ignore
    const gridRows = <GridRows top={margin.top} left={margin.left} scale={percentageScale} width={xMax} height={yMax - margin.top - margin.bottom} stroke="white" strokeOpacity={0.4} numTicks={5} />;
    //@ts-ignore
    const legendOrdinal = <LegendOrdinal scale={colorScale} style={legendStyles} direction="column-reverse" shape="circle" shapeMargin="10px 6px 10px 16px" />;
    //@ts-ignore
    // const strong = <strong>{tooltipData.key}</strong>;

    // <small>{formatDate(getDate(tooltipData.bar.data))}</small>;
    return (
        <div ref={containerRef} style={{ position: 'relative' }}>
            <svg width={width} height={height}>
                <rect x={0} y={0} width={width} height={height} fill={background} rx={2} />

                <Group top={margin.top} left={margin.left}>
                    {barStack}
                </Group>

                <AxisBottom
                    top={yMax + margin.top}
                    left={margin.left}
                    scale={levelScale}
                    hideTicks
                    stroke={gray}
                    strokeWidth={1}
                    tickLabelProps={() => ({
                        fill: darkGray,
                        fontSize: 11,
                        textAnchor: 'middle',
                    })}
                />
                {axisLeft}
                {gridRows}
            </svg>

            <div
                style={{
                    position: 'absolute',
                    top: margin.top / 2 - 18,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 14,
                }}
            >
                {legendOrdinal}
            </div>

            {tooltipOpen && tooltipData && (
                // barchart text box
                <TooltipInPortal key={Math.random()} top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                    {/* <div style={{ color: colorScale(tooltipData.key) }}> */}
                    <div className="tooltip-title">
                        <strong>{tooltipData.key}</strong>
                    </div>
                    <div className="tooltip-value">
                        {tooltipData.bar.data[tooltipData.key]}% of {tooltipData.bar.data.level}
                    </div>
                    <div className="tooltip-date">
                        <small>{formatDate(getDate(tooltipData.bar.data))}</small>
                    </div>
                </TooltipInPortal>
            )}
        </div>
    );
};

export default StackedBarChart;
