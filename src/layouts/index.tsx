


import { Header } from "./header";
import { Footer } from "./footer";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`;


export const Layout = (props: PropsWithChildren) => {


    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    );
}