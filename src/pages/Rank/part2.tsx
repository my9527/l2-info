import styled from "styled-components";
import { Row } from "../../components/cmpt";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { media } from "../../utils/mediaQuery";



const Wrapper = styled(Row)`
    height: 150px;
    align-items: center;
    padding-left: 56px;

    .p-left{
        flex: 1;
        text-align: left;
    }
    .txt-overview{
        color: var(--grey, #242424);
        text-align: center;
        font-family: Arial;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 100% */
        margin-right: 12px;
    }
    .p-right{
        background: #F90;
        width: 150px;
        height: 100%;
    }

    ${media.mobile`
        border: 0.5px solid var(--gray-15, rgba(0, 0, 0, 0.15));
        padding: 15px 16px;
        height: unset;
        border-bottom: none;

        .text-overview{
            color: var(--grey, #242424);
            text-align: center;
            font-family: Arial;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px; /* 100% */
        }
    `}

`;


export const Part2 = () => {

    const { mobile } = useBreakpoints();

    return (
        <Wrapper>
            <div className="p-left">
                <span className="txt-overview">Overview</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M20.7339 23.2664V25.4403H5.90341V23.2664H20.7339ZM25.8186 0.440308V20.4403H0.818604V0.440308H25.8186ZM23.7 2.61422H2.93725V18.4838H23.7V2.61422ZM9.29319 9.5707V14.3533H7.17454V9.5707H9.29319ZM14.378 6.74464V14.3533H12.2593V6.74464H14.378ZM19.4627 8.91856V14.3533H17.344V8.91856H19.4627Z" fill="#FF9900"/>
                </svg>
            </div>
            {
               !mobile  && <div className="p-right"></div>
            }
        </Wrapper>
    );
}