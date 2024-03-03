import styled from "styled-components";
import { Row } from "../../components/cmpt";

import BtcSvg from "./btc.svg";
import GrayPie from "./gray-pie.png";
import BtcMobileSvg from "./btc-mobile.svg";
import { useBreakpoints } from "../../hooks/useBreakpoints";





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

        background-image:  url('${BtcSvg}'), url('${GrayPie}');
        background-repeat: no-repeat, no-repeat;
        background-position:  90% -25%,95% 100%;
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


const WrapperMobile = styled.div`
    padding: 9px 16px;
    background-image: url('${BtcMobileSvg}');
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-color: var(--white, #FFF);
`;

const TitleMobile = styled.div`
    color: var(--grey, #242424);
    font-family: Arial;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    text-align: left;
    margin-bottom: 10px;

`

const SubtitleMobile = styled.div`
    color: var(--gray-50, rgba(0, 0, 0, 0.50));
    font-family: Arial;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 160% */
    text-align: left;
    margin-bottom: 22px;
`;

const DescMobile = styled.div`
    color: var(--gray-50, rgba(0, 0, 0, 0.50));
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 140% */
    text-align: left;
    max-width: 65%;

`



export const Part1 = () => {


    const { mobile } = useBreakpoints();


    if(mobile) {
        return (
            <WrapperMobile>
                <div>
                    <TitleMobile>Explore <span style={{ color: '#F90'}}>BTC</span> L2 Projects</TitleMobile>
                    <SubtitleMobile>The state of all Bitcoin Layer2 ecosystem</SubtitleMobile>
                </div>
                <div>
                    <DescMobile>
                    I’ve been working on a new electronic cash system
                that’s fully peer-to-peer, with no trusted third party. 
                — Satoshi Nakamoto
                    </DescMobile>
                </div>

            </WrapperMobile>

        );
    }



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