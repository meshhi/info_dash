import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import greetings_bg from '/src/assets/greetings_bg.png'
import greetings_tableau from '/src/assets/greetings_tableau.png'
import { Button } from "../UI/Buttons/Button";
import greetings_tableau_svg from '/src/assets/greetings_tableau.svg'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StyledGreetings = styled.section`
    inset: 0;
    position: absolute;
    background: url(
    ${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? greetings_bg
        : "greetings_bg.png"
    });
    greetings_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    display: flex;
    padding-top: 103px;
    padding-left: 105px;
    border: 2px solid #48D6E5;
    border-radius: 15px;
`

const Tableau = styled.img`
    position: absolute;
    right: 0;
    z-index: 1;

`

const TextContent = styled(motion.div)`
    min-width: 647px;
    position: relative;
    z-index: 3;
    color: inherit;
`

const Header = styled.h1`
    font-weight: 700;
    font-size: 60px;
    line-height: 72.61px;
    margin-bottom: 71px;
`

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 25px;
    line-height: 30.26px;
`

const LittleParagraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    margin-top: 50px;
`

const BoldLittleParagraph = styled.span`
    display: inline-block;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
`

export const Greetings: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();

    return (
        <StyledGreetings>
            <TextContent
                variants={{
                    initial: {
                        opacity: 0,
                        y: "100px",
                    },
                    final: {
                        opacity: 1,
                        y: "0px",
                        transition: {
                            duration: 0.5,
                        },
                    }
                }}
                initial="initial"
                animate="final"
            >
                <Header>
                    Приветствуем вас<br></br>в демо-версии <br></br>Analytic Workspace
                </Header>
                <Paragraph style={{ "marginBottom": "20px" }}>
                    Это навигационный дашборд, который <br></br>тоже сделан на AW BI.
                </Paragraph>

                <Paragraph style={{ "marginBottom": "50px" }}>
                    За несколько шагов мы расскажем <br></br> вам о возможностях системы <br></br>и ключевых ресурсах.
                </Paragraph>

                <Button
                    onClick={() => {
                        navigate("/slides/2");
                    }}
                >Далее</Button>

                <LittleParagraph>
                    Навигационный дашборд появляется только 1 раз,<br></br> но всегда доступен в разделе <BoldLittleParagraph>«Информационные панели»</BoldLittleParagraph>
                </LittleParagraph>
            </TextContent>
            <Tableau src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                ? greetings_tableau_svg
                : "greetings_tableau.svg"
            }>

            </Tableau>
        </StyledGreetings>
    )
}