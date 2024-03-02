import styled from "styled-components"
import { Col, Row } from "../../components/cmpt"




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


`;



export const Part3 = () => {


    return (
        <Wrapper>
            <Col className="card">
                <Row className="row-title">
                    <div>
                        Total Projects
                    </div>
                    <div>
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
                    <div>
                    Current TVL
                    </div>
                    <div>
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