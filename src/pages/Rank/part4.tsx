import styled from "styled-components";
import { Row } from "../../components/cmpt";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import Bg from "./chart-bg.png";

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

const Wrapper = styled(Row)`
    width: 100%;
    height: 400px;
    position: relative;
    background: white;
    background-image: url('${Bg}');
    g.recharts-layer.recharts-area{
        transform: translate(15px, 0px);
    }
    .bg-svg{
        position: absolute;
        top: 0;
        left: 0;
    }
    .info-content{
        position: absolute;
        top: 0;
        left: 0;
        padding: 21px 56px;
    }

    .chart-title{ 
        color: var(--grey, #242424);
        font-family: Arial;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 120% */
        margin-right: 18px;
    }
    .date-range {
        color: var(--orange, #F90);
        font-family: Arial;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px; /* 116.667% */
    }
`;


export const Part4 = () => {


    return (
        <Wrapper>
            <div className="info-content">
                <span className="chart-title">Value Locked</span>
                <span className="date-range">2023/03/02 - 2024/03/01</span>

            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={1200}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="543.424" y1="0.0653076" x2="543.424" y2="282.757" gradientUnits="userSpaceOnUse">
                            <stop offset="0.28" stop-color="#FF9900"/>
                            <stop offset="1" stop-color="#FF9900" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area style={{ transform: 'translate(15, 0)' }} type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)"  />
                </AreaChart>
            </ResponsiveContainer>
           
        </Wrapper>
    );
}
