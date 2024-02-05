import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
        width: 185px;
        height: 53px;
        border-radius: 9px;
        background-color: #E8698A;
    `

export const Button : FC<PropsWithChildren> = ({children, onClick}) => {
    return(
    <StyledButton
        onClick={onClick}
    >
        {children}
    </StyledButton>)
}