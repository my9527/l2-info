import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";




export const Row = styled.div<{  }>`
    display: flex;
    flex-direction: row;

`;

export const Col = styled.div<{  }>`
    display: flex;
    flex-direction: column;
`;


const TooltipWrapper = styled.div`
    position: relative;
    .tip{
        position: absolute;
        left: 100%;
        top: -40px;
        display: none;
        background: var(--light-gray, #F5F5F5);
        color: #000;
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 128.571% */
        max-width: 280px;
        padding: 13px 19px;
        border-radius: 4px;
        border: 1px solid #F5F5F5;
    }
    &:hover .tip {
        display: block;
    }
`;


export const Tooltip = (props: { tip: ReactNode } & PropsWithChildren) => {

    const { tip, children } = props;
    return (
        <TooltipWrapper>
            {children}
            <div className="tip">
                {tip}
            </div>
        </TooltipWrapper>
    );
}