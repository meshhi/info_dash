import { FC, PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";
import greetings_bg from '/src/assets/greetings_bg.png'
import greetings_tableau_png from '/src/assets/greetings_tableau.png'
import { RedButton } from "../UI/Buttons/Buttons";
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

    @media (max-width: 1600px) and (max-height: 800px) {
        // min-height: 800px;
    }
    
`

const Tableau = styled(motion.img)`
    // max-width: 1200px;
    max-height: 100vh;
    height: 80%;
    position: absolute;
    right: 0;
    z-index: 1;

    @media (max-width: 1600px) and (max-height: 800px) {
        // width: 1200px;
    }
      
`

const TextContent = styled(motion.div)`
    width: 55%;
    position: relative;
    z-index: 3;
    color: inherit;
`

const Header = styled.h1`
    font-weight: 700;
    font-size: 60px;
    line-height: 72.61px;
    margin-bottom: 71px;

    @media (max-width: 1350px) {
        font-size: 40px;
        line-height: normal;
        margin-bottom: 31px;
    }

    // @media (max-width: 1600px) and (max-height: 800px) {
    //     line-height: normal;
    // }
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
            {/* <p style={{"position": "absolute", "width": "200px", "height": "200px", "zIndex": 9999999, "color": "white"}}>
                {size}
            </p> */}
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
                    {/* Приветствуем вас в демо-версии Analytic Workspace */}
                </Header>
                <Paragraph style={{ "marginBottom": "20px" }}>
                    Это навигационный дашборд, который <br></br>тоже сделан на AW BI.
                </Paragraph>

                <Paragraph style={{ "marginBottom": "50px" }}>
                    За несколько шагов мы расскажем <br></br> вам о возможностях системы <br></br>и ключевых ресурсах.
                </Paragraph>

                <RedButton
                    onClick={() => {
                        navigate("/slides/2");
                    }}
                >Далее</RedButton>

                <LittleParagraph>
                    Навигационный дашборд появляется только 1 раз,<br></br> но всегда доступен в разделе <BoldLittleParagraph>«Информационные панели»</BoldLittleParagraph>
                </LittleParagraph>
            </TextContent>
            <Tableau src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                ? greetings_tableau_png
                : "greetings_tableau.png"
            }
            variants={{
                initial: {
                    // opacity: 0.5,
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