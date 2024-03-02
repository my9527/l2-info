import styled from "styled-components";
import { Row } from "../../components/cmpt";


const Wrapper = styled(Row)`
    width: 100%;
    box-sizing: border-box;
    padding-right: 0;
    background: var(--white, #FFF);
    height: 300px;


    .txt-right{
        color: var(--gray-50, rgba(0, 0, 0, 0.50));
        font-family: Roboto;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 200% */
    }

    .p-left{
        padding: 46px 56px;
        flex: 1;
    }

    .p-right{
        display: flex;
        box-sizing: border-box;
        padding: 16px 15px;
        width: 150px;
        border-left: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
        align-items: flex-end;
    }


`;

const MainTxt = styled.div`
    color: var(--grey, #242424);
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 83.333% */
    margin-bottom: 15px;
    text-align: left;
`;

const SubTxt = styled.div`
    color: var(--gray-50, rgba(0, 0, 0, 0.50));
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    text-align: left;
`;

export const Part1 = () => {

    return (
        <Wrapper>
            <div className="p-left">
            <MainTxt>Explore <span style={{ color: '#F90'}}>BTC</span> L2 Projects</MainTxt>
            <SubTxt>The state of all Bitcoin Layer2 ecosystem</SubTxt>
            </div>
            <div className="p-right">
                <div className="txt-right">
                I’ve been working on a new
                electronic cash system
                that’s fully peer-to-peer, 
                with no trusted third party. 
                — Satoshi Nakamoto
                </div>
            </div>
        </Wrapper>
    );
}