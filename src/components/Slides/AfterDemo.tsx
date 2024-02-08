import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_models from "/src/assets/about_models/bg_about_models.svg"

const StyledContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_models
        : "bg_about_models.svg"});
    background-size: cover;
    background-repeat: no-repeat;
    color: black;
    padding: 80px 50px;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 49px;
`

const TextContent = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 55px;
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 36px;
    max-width: 478px;
`

const CardImg = styled.img`
    width: 478px;
    height: 314px;
    border-radius: 15px;
    background-color: grey;
`
const CardText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: start;
`

const Comment = styled.div`

`

export const AfterDemo: FC<PropsWithChildren> = () => {
    
    return (
        <StyledContainer
            variants={{
                initial: {
                    opacity: 0,
                    y: "-100px",
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
            <Header>Где задавать вопросы и учиться?</Header>
            <Cards>

            </Cards>
            <Comment>
            А ещё есть телеграм-канал для развития насмотренности и навыков в Data Driven – Data Driven культура (ссылка: https://t.me/awbi_ru). Подписывайтесь.
            </Comment>
        </StyledContainer>
        )
    }