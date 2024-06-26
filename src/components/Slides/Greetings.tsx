import { FC, PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";
import greetings_bg from '/src/assets/greetings_bg.png'
import greetings_tableau_jpg from '/src/assets/greetings_tableau.jpg'
import { ButtonsBlock, GreenButton, RedButton } from "../UI/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkWithTooltip } from "../UI/Links/LinkWithTooltip";

const StyledGreetings = styled.section`
    inset: 0;
    position: absolute;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? greetings_bg
        : "greetings_bg.png"});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    display: flex;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    overflow: hidden;
`

const Tableau = styled(motion.img)`
    max-height: 100vh;
    height: 80%;
    position: absolute;
    right: 0;
    z-index: 1;

    @media (min-width: 1600px) {
        width: 1200px;
        height: 100%;
    }

    @media (min-width: 1100px) {
        margin-top: -10px;
    }
      
`

const TextContent = styled(motion.div)`
    width: 55%;
    position: relative;
    z-index: 3;
    color: inherit;
    padding-top: 103px;
    padding-left: 105px;
`

const Header = styled.h1`
    font-weight: 700;
    font-size: 60px;
    line-height: 72.61px;
    margin-bottom: 71px;

    @media (max-width: 1450px) {
        font-size: 40px;
        line-height: normal;
        margin-bottom: 31px;
    }
`

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 25px;
    line-height: 30.26px;

    @media (max-width: 1350px) {
        font-size: 20px;
        line-height: normal;
    }
`

const LittleParagraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    margin-top: 50px;

    @media (max-height: 770px) {
        margin-top: 20px;
    }

    @media (max-height: 735px) {
        display: none;
        font-size: 12px;

        & span {
            font-size: 12px;
        }
    }
`

const BoldLittleParagraph = styled.span`
    display: inline-block;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
`

export const Greetings: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();
    const [size, setSize] = useState<string>();
    useEffect(() => {
        const timer = setInterval(() => {
            let sizeString = "width: " + window.innerWidth + " height: " + window.innerHeight;
            setSize(sizeString);
            console.log("Current window size: " + sizeString);
        }, 1000);

        return () => clearInterval(timer);
    }, [])
    return (
        <StyledGreetings>
            <TextContent
                variants={{
                    initial: {
                        opacity: 0.5,
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
                <ButtonsBlock>
                    <LinkWithTooltip>
                        <GreenButton
                        ><a href="https://aw-demo.ru/app/sources" target="_blank">Пропустить</a></GreenButton>
                    </LinkWithTooltip>
                    <RedButton
                        onClick={() => {
                            navigate("/slides/2");
                        }}
                    >Далее</RedButton>
                </ButtonsBlock>
                <LittleParagraph>
                    Навигационный дашборд появляется только 1 раз,<br></br> но всегда доступен в разделе <BoldLittleParagraph>«Информационные панели»</BoldLittleParagraph>
                </LittleParagraph>
            </TextContent>
            <Tableau
                src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                    ? greetings_tableau_jpg
                    : "greetings_tableau.jpg"}
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
            </Tableau>
        </StyledGreetings>
    )
}