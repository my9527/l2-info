


import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`;


export const Layout = () => {


    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    );
}