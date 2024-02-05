import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledBaseContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: red;
    position: relative;
`

export const BaseContainer : FC<PropsWithChildren> = () => {
    return(
        <StyledBaseContainer>
            <Outlet></Outlet>
        </StyledBaseContainer>)
}