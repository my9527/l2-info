import styled from "styled-components";
import { Row } from "../components/cmpt";



const Wrapper = styled(Row)`
    background: var(--grey, #242424);
    padding: 42px 0;
    box-sizing: border-box;

    color: var(--white, #FFF);
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    

    .context-area{
        max-width: 1920px;
        width: 100%;
        justify-content: space-between;
        padding: 0 82px;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;

        &:before{
            position: absolute;
            content: "BTCL2 is committed to providing transparent on-chain data";
            color: var(--gray-25, rgba(0, 0, 0, 0.25));
            text-align: right;
            text-overflow: ellipsis;
            font-family: Roboto;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 10px; /* 100% */
            display: -webkit-box;
            transform: rotate(90deg);
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            width: 150px;
            height: 30px;
            left: 20px;
            top: -170px;
        }
        &:after{
            position: absolute;
            content: "Presented by the BTCL2.INFO organization with full dedication";
            color: var(--gray-25, rgba(0, 0, 0, 0.25));
            text-align: right;
            text-overflow: ellipsis;
            font-family: Roboto;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 10px; /* 100% */
            display: -webkit-box;
            transform: rotate(90deg);
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            width: 150px;
            height: 20px;
            right: 20px;
            top: -170px;
        }
    }

    .footer-social{
        padding: 0 20px;
        cursor: pointer;

    }
    .footer-social:last-of-type{
        padding-right: 0;
    }
    .footer-social + .footer-social {
        border-left: 1px solid var(--white, #FFF);
    }
`

const socials = [{
    title: 'Medium',
    url: '',
}, {
    title: 'Github',
    url: ''
}, {
    title: 'Twitter',
    url: ''
}, {
    title: 'Discord',
    url: '',

}, {
    title: 'Apply',
    url: ''
}]


export const Footer = () => {
    return (
        <Wrapper>
            <Row className="context-area">
                <div>Copyright 2024 BTCL2.info</div>
                <Row>
                    {
                        socials.map(sc => {
                            return <div className="footer-social" key={sc.title} onClick={() => window.open(sc.url)}>
                                {sc.title}
                            </div>
                        })
                    }
                </Row>
            </Row>
        </Wrapper>
    );
}