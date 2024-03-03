import styled from "styled-components"
import { Col, Row } from "../../components/cmpt"
import { media } from "../../utils/mediaQuery";




const Wrapper = styled(Row)`
    background: var(--white, #FFF);
    border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
    .card {
        flex: 1;
        gap: 35px;
        padding: 28px 56px;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        color: var(--grey, #242424);
        text-overflow: ellipsis;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        cursor: pointer;

        &:hover{
            box-shadow: 0px 0px 8px 0px #FFA823;
        }

    }
    .row-title{
        justify-content: space-between;
    }

    .emp{
        overflow: hidden;
        color: var(--orange, #F90);
        text-overflow: ellipsis;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }

    .txt-stats{
        overflow: hidden;
        color: var(--orange, #F90);
        text-overflow: ellipsis;
        font-family: Arial;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px; /* 90% */
    }

    ${
        media.mobile`
            .card{
                padding: 10px 16px;
                border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
                background: var(--white, #FFF);
                box-sizing: border-box;
            }
            .title-name{
                color: var(--gray-50, rgba(0, 0, 0, 0.50));
                text-overflow: ellipsis;
                font-family: Arial;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
            }
            .title-stat{
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                text-overflow: ellipsis;
                font-family: Arial;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
            }
            .row-title {
                flex-direction: column;
                align-items:flex-start;
            }
            .txt-stats{
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 20px;
                font-weight: 700;
                line-height: 36px; /* 180% */
            }
            .emp{
                font-size: 10px;
            }
        `
    }


`;



export const Part3 = () => {


    return (
        <Wrapper>
            <Col className="card">
                <Row className="row-title">
                    <div className="title-name">
                        Total Projects
                    </div>
                    <div className="title-stat">
                        <span className="emp">+2</span> / 30 days
                    </div>
                </Row>
                <Row>
                    <span className="txt-stats">
                        123,123,123.000
                    </span>
                </Row>
                
            </Col>

            <Col className="card">
                <Row className="row-title">
                    <div className="title-name">
                    Current TVL
                    </div>
                    <div className="title-stat">
                        <span className="emp">+15%</span> / 30 days
                    </div>
                </Row>
                <Row>
                    <span className="txt-stats">
                        123,123,123.000
                    </span>
                </Row>
                
            </Col>


        </Wrapper>
    );
}