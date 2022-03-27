import React from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { data } from './data';
import { ZoomCirclePacking } from './index';

//@ts-ignore
const MyResponsiveCirclePacking = ({ data }: ZoomCirclePacking) => (
    <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        //@ts-ignore
        identity="id"
        value="loc"
        colors={{ scheme: 'nivo' }}
        padding={6}
        labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        borderWidth={2}
        skipLibCheck={true}
        borderColor={{ from: 'color' }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8,
            },
        ]}
        fill={[{ match: { depth: 1 }, id: 'lines' }]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
);
//@ts-ignore
const draw = <MyResponsiveCirclePacking data={data} />;
export default function CirclePacking() {
    return <div style={{ width: 500, height: 500, margin: 'auto' }}>{draw}</div>;
}
