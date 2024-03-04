import styled from "styled-components";
import { Row, Col, Tooltip } from "../../components/cmpt";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { media } from "../../utils/mediaQuery";



// const Wrapper1 = styled.div`

//     cursor: pointer;
//     background: white;

//     .row-header{
//         gap: 20px;
//         border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
//         background: var(--grey, #242424);
//         color: var(--white, #FFF);
//         font-family: Arial;
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: 14px; /* 87.5% */
//         padding: 24px 0;
//     }
//     .col-header{
//         display: inline-flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .col-title{
//         margin-right: 8px;
//     }
//     .row-data {
//         gap: 20px;
//         padding: 24px 0;

//         &:hover{
//             background: var(--light-gray, #F5F5F5);

//         }
//     }
//     .col {
//         text-align: center;
//         flex: 1;
//         white-space: nowrap;
//         width: 100px;
//     }
//     .col-with-logo{
//         display: inline-flex;
//         align-items: center;
//     }
//     .data-logo{
//         height: 20px;
//         width: 20px;
//         margin-right: 10px;
//     }
//     .data-col-tvl{
//         color: var(--orange, #F90);
//         text-align: center;
//         font-family: Arial;
//         font-size: 14px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 14px; /* 100% */
//     }

//     ${media.mobile`
//         max-width: 100%;
//         overflow-x: auto;
//         padding: 0;
//         color: var(--grey, #242424);
//         .col{
//             width: 200px;
//             text-align: left;
//         }

//         .row-header{
//             padding: 23px 16px;
//             width: 550px;
//             color: rgba(255, 255, 255, 0.50);
//             font-family: Arial;
//             font-size: 12px;
//             font-style: normal;
//             font-weight: 700;
//             line-height: 14px; /* 116.667% */
//         }
//         .row-data{
//             padding: 24px 16px;
//             width: 550px;
//         }

//     `}
// `;

const Wrapper = styled.div`

    cursor: pointer;
    background: white;

    .row-header{
        gap: 20px;
        border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
        background: var(--grey, #242424);
        color: var(--white, #FFF);
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px; /* 87.5% */
        padding: 24px 0;
    }
    .col-header{
        // display: inline-flex;
        // align-items: center;
        // justify-content: center;
        padding: 24px 16px;
    }
    .th-header{
        display: inline-flex;
        align-items: center;
    }
    .col-title{
        margin-right: 8px;
    }
    .row-data {
        gap: 20px;
        padding: 24px 0;

        &:hover{
            background: var(--light-gray, #F5F5F5);

        }
    }
    .col {
        text-align: center;
        white-space: nowrap;
    }
    .col-with-logo{
        display: inline-flex;
        align-items: center;
    }
    .data-logo{
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }
    .data-col-tvl{
        color: var(--orange, #F90);
        text-align: center;
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px; /* 100% */
    }
    table {
        border: none;
        width: 100%;
    }
    thead {
        background: var(--grey, #242424);
    }
    thead tr th {
        padding: 22px 0;
        color: white;
    }

    tr td{
        padding: 22px 16px;
    }

    ${media.mobile`
        max-width: 100%;
        overflow-x: auto;
        padding: 0;
        color: var(--grey, #242424);
        .col{
            text-align: left;
        }
        .col-header{
            // display: inherit;
        }

        .row-header{
            padding: 23px 16px;
            width: 550px;
            color: rgba(255, 255, 255, 0.50);
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 14px; /* 116.667% */
        }
        .row-data{
            padding: 24px 16px;
            width: 550px;
        }

    `}
`;


const columns = [{
    title: '#',
    key: 'id',
    sortable: false,
}, {
    title: 'Name',
    key: 'name'
}, {
    title: 'Type',
    key: 'type'
}, {
    title: 'Based',
    key: 'base',
}, {
    title: 'Stage',
    key: 'stage'
}, {
    title: 'TVL',
    key: 'tvl'
}, {
    title: 'Shares',
    key: 'shares'
}];


const data = [{
    title: 'merlin1',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

},{
    title: 'merlin2',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

},{
    title: 'merlin3',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

},{
    title: 'merlin4',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

},{
    title: 'merlin5',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

},{
    title: 'merlin6',
    titletips: [{
        type: 'q',
        desc: 'adsfasdfasdfaf'
    }],
    logo: 'https://www.rainbowkit.com/rainbow.svg',
    type: 'ZK-EVM',
    typetips: [{
        type: 'q',
        desc: 'adfadsf'
    }],
    base: 'Scroll',
    basetips: [{
        type: 'q',
        desc: 'asdfasdfasdf'
    }],
    stage: 'Testnet to be launch',
    statetip: [{
        type: 'q',
        desc: '123123123'
    }],

    tvl: '123123',
    tvltips: [{
        type: 'q',
        desc: 'adsfasdfasdf'
    }],

    shares: '12',
    sharestip: [{
        type: 'q', 
        desc: 'asdfadsf'
    }]

}]


const SortIcon = (props: { sort: string, onClick: (...args: any[]) => any, dir: string, curSort: string } & PropsWithChildren) => {
    const { onClick, sort, curSort, dir } = props;
    return (

        <Col style={{ gap: '4px' }}>
            <svg onClick={() => onClick(sort, 'desc')} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M4.73096 0.668091L9.23096 6.66809H0.230957L4.73096 0.668091Z" fill={(sort === curSort && dir === 'desc') ? '#F90' : 'white'}/>
            </svg>
            <svg onClick={() => onClick(sort, 'asc')} xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M4.73096 6.33191L0.230958 0.331908L9.23096 0.331909L4.73096 6.33191Z" fill={(sort === curSort && dir === 'asc') ? '#F90' : 'white'} />
            </svg>
        </Col>
       
    );
}


export const Part5 = () => {

    const [curSort, updateSort] = useState({
        type: '',
        dir: ''
    });

    const handleSort = useCallback((type: string, dir: string) => {
        updateSort({
            type,
            dir,
        })
    }, []);

    const sortedData = useMemo(() => {
        if(curSort.dir && curSort.type) {
            const _data = [...data];
            return _data.sort((a: any, b: any) => {
                if(curSort.dir === 'desc') {
                    return a[curSort.type] > b[curSort.type] ? -1 : 1
                } else {
                    return b[curSort.type] - a[curSort.type] ? 1 : -1
                }
            });
        }
        return data;
    }, [curSort]);



    return (

        <Wrapper>
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>
                        {columns.map((col) => {
                            return (
                                <th className="col col-header" key={col.key}>
                                    <div className="th-header">
                                            <span className="col-title">{col.title}</span> 
                                            {col.sortable !== false && <SortIcon onClick={handleSort} sort={col.key} dir={curSort.dir} curSort={curSort.type} key={`${col.key}-sort`}  />}
                                    </div>
                                </th>
                            );
                        })}    
                    </tr>
                </thead>
                <tbody>
                {
                    sortedData.map((d, index) => {
                        return (
                            <tr className="row-data" key={index}>
                                <td width="80px" className="col">
                                    {index}
                                </td>
                                <td  className="col col-with-logo">
                                    <img className="data-logo" src={d.logo} /> {d.title} {d.titletips.map(v => {
                                        return <Tooltip key={v.type} tip={<div>{v.desc}</div>}>
                                            {v.type ==='q' ? '?' : '!' }
                                        </Tooltip>
                                    })}
                                </td>
                                <td width="150px" className="col">
                                    <div>{d.type}</div>
                                </td>
                                <td width="150px" className="col">
                                    {d.base}
                                </td>
                                <td width="150px" className="col">
                                    {d.stage}
                                </td>
                                <td width="120px" className="col data-col-tvl">
                                    {d.tvl}
                                </td>
                                <td width="80px" className="col">
                                    {d.shares}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>

        </Wrapper>
    )

    ;


    return (
        <Wrapper>
            <Row className="row-header">
                {columns.map((col) => {
                    return (
                        <div className="col col-header" key={col.key}>
                            <span className="col-title">{col.title}</span> 
                            {col.sortable !== false && <SortIcon onClick={handleSort} sort={col.key} dir={curSort.dir} curSort={curSort.type} key={`${col.key}-sort`}  />}
                        </div>
                    );
                })}
            </Row>

            <Col >
                {
                    sortedData.map((d, index) => {
                        return (
                            <Row className="row-data" key={index}>
                                <div className="col">
                                    {index}
                                </div>
                                <div className="col col-with-logo">
                                    <img className="data-logo" src={d.logo} /> {d.title} {d.titletips.map(v => {
                                        return <Tooltip key={v.type} tip={<div>{v.desc}</div>}>
                                            {v.type ==='q' ? '?' : '!' }
                                        </Tooltip>
                                    })}
                                </div>
                                <div className="col">
                                    {d.type}
                                </div>
                                <div className="col">
                                    {d.base}
                                </div>
                                <div className="col">
                                    {d.stage}
                                </div>
                                <div className="col data-col-tvl">
                                    {d.tvl}
                                </div>
                                <div className="col">
                                    {d.shares}
                                </div>
                            </Row>
                        )
                    })
                }
            </Col>

            
        </Wrapper>
        
    );
}