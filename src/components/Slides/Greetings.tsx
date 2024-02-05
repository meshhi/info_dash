import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import greetings_bg from '/src/assets/greetings_bg.png'
import greetings_tableau from '/src/assets/greetings_tableau.png'

const StyledGreetings = styled.section`
    inset: 0;
    position: absolute;
    background: url(${greetings_bg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    // bactransform: rotate(180deg);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Tableau = styled.img`
    max-width: 1202px;
    max-height: 748px;

`

const TextContent = styled.article`

`

const Header = styled.h1`

`

export const Greetings : FC<PropsWithChildren> = () => {
    return(
    <StyledGreetings>
        <TextContent>
            <Header>
            Приветствуем вас в демо-версии Analytic Workspace
            </Header>

        </TextContent>
        <Tableau src={greetings_tableau}></Tableau>
    </StyledGreetings>)
}