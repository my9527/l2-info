


import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useBreakpoints } from "../hooks/useBreakpoints";

const Wrapper = styled.div`
    width: 100%;
`;


export const Layout = () => {

    const { mobile } = useBreakpoints();


    return (
        <Wrapper>
            {!mobile && <Header /> }
            <Outlet />
            <Footer />
        </Wrapper>
    );
}