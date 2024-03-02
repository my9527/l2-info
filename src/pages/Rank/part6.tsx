import styled from "styled-components";
import { Row } from "../../components/cmpt";


const Wrapper = styled(Row)`
    background: white;
    cursor: pointer;


    position: relative;

    .card {
        box-sizing: border-box;
        width: 50%;

    }
    .title-row{
        padding: 14px 15px;
        justify-content: center;
        color: var(--grey, #242424);
        font-family: Arial;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 110% */
        border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
        background: var(--light-gray, #F5F5F5);

        &:hover{
            background: var(--white, #FFF);
            box-shadow: 0px 0px 8px 0px rgba(255, 168, 35, 0.50);
        }
    }
    .type-content{
        padding: 0 56px;
    }
    .type-row{
       padding: 15px 0;
    }
    .type-row + .type-row{
        border-top: 1px solid var(--gray-15, rgba(0, 0, 0, 0.15));
    }
    .type-title{
        color: var(--grey, #242424);
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 157.143% */
        width: 50px;
        margin-right: 25px;
        text-align: left;
        white-space: nowrap;
    }

    .type-desc{
        color: var(--grey, #242424);
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
    }

`


export const Part6 = () => {


    return (
        <Wrapper>
            <div className="card">
                <Row className="title-row">
                    Type
                </Row>
                <div className="type-content">
                    <Row className="type-row">
                        <div className="type-title">ZK-EVM</div>
                        <div className="type-desc">This project is an EVM structure and using Zero Knowledge Rollup</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">MIXED</div>
                        <div className="type-desc">This project contains multiple structure.</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">OP-EVM</div>
                        <div className="type-desc">This project is an EVM structure and using Optimism Rollup</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">UTXO</div>
                        <div className="type-desc">This project is an UTXO structure</div>
                    </Row>
                </div>

            </div>
            <div className="card">
                <Row className="title-row">
                    Based
                </Row>
                <div className="type-content">
                    <Row className="type-row">
                        <div className="type-title">Scroll</div>
                        <div className="type-desc">This project is using Scroll tech-stack to build</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">OP</div>
                        <div className="type-desc">This project is using Optimism tech-stack to build</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">Polygon</div>
                        <div className="type-desc">This project is using Polygon tech-stack to build</div>
                    </Row>
                    <Row className="type-row">
                        <div className="type-title">Orignal</div>
                        <div className="type-desc">This project is using uniq and original stack to build</div>
                    </Row>
                </div>

            </div>
        </Wrapper>
    );
}