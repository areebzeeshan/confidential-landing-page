import React, { useState } from 'react';
import Layout from '../../Components/Admin/Layout';
import BreadHeading from '../../Components/UI/BreadHeading';
import { AiFillHome } from 'react-icons/ai';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter,
    BarChart, Bar, Rectangle, PieChart, Pie, Sector
} from 'recharts';
import './index.css'

const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
    { x: 130, y: 180, z: 320 },
    { x: 125, y: 320, z: 450 },
    { x: 165, y: 250, z: 300 },
    { x: 145, y: 380, z: 480 },
    { x: 155, y: 290, z: 420 },
    { x: 115, y: 240, z: 350 },
    { x: 105, y: 320, z: 290 },
    { x: 125, y: 200, z: 270 },
    { x: 185, y: 350, z: 480 },
    { x: 145, y: 430, z: 520 },
    { x: 115, y: 310, z: 400 },
    { x: 135, y: 210, z: 250 },
    { x: 175, y: 290, z: 380 },
    { x: 125, y: 280, z: 320 }
];

const BarData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

// const { height, width } = useWindowDimensions();

const Dashboard = () => {

        const [activeIndex, setActiveIndex] = useState(0);

        const onPieEnter = (_, index) => {
            setActiveIndex(index);
        };

        return (
            <Layout btn="Create Product">
                <BreadHeading current={"Dashboard"} currentIcon={<AiFillHome />} />
                <div className='grid grid-cols-1 lg:grid-cols-2 mb-1 gap-4 p-2 h-auto container mx-auto'>
                    <div className='bg-dark-secondary rounded-lg'>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#FF6858" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#FFB72A" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='bg-dark-secondary rounded-lg text-white'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={BarData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#FF6858" activeBar={<Rectangle fill="pink" stroke="#FF6858" />} />
                                <Bar dataKey="uv" fill="#FFB72A" activeBar={<Rectangle fill="gold" stroke="#FFB72A" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 mb-1 gap-4 p-2 h-auto container mx-auto'>
                    <div className='bg-dark-secondary rounded-lg text-white'>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#FF6858"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                    </div>
                    <div className='bg-dark-secondary rounded-lg col-span-2'>
                        <ResponsiveContainer width="100%" height={400}>
                            <ScatterChart
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="A school" data={scatterData} fill="#FFB72A" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Layout>
        )
    }

    export default Dashboard;
