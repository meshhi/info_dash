import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.section`
    background-color: yellow;
`

export const WhatyouCan : FC<PropsWithChildren> = () => {
    const navigate = useNavigate();

    return(
    <StyledContainer>
        what you can
    </StyledContainer>)
}