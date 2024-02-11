import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_models from "/src/assets/about_models/bg_about_models.svg"
import { GreenButton } from "../UI/Buttons/Buttons";
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;

    @media (max-width: 1600px) and (max-height: 900px) {
        gap: 30px;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
    min-width: 824px;
    max-width: 824px;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: white;
    padding: 8px;
    overflow: hidden;

    @media (max-width: 1600px) and (max-height: 900px) {
        min-width: 624px;
        max-width: 624px;
        height: 220px;
    }
`

const CardContent = styled.div`
    flex:1;
    height: 100%;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1600px) and (max-height: 900px) {
        margin-left: 20px;
    }
`

const CardImg = styled.img`
    width: 292px;
    height: 256px;
    border-radius: 15px;
    background-color: grey;

    @media (max-width: 1600px) and (max-height: 900px) {
        width: 192px;
        height: 100%;;
    }
`
const CardText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    padding-block: 10px;

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 16px;
        height: 100px;
    }
`

const Comment = styled.div`

`

const CardButton = styled(GreenButton)`
    color: white;
    min-width: 330px;
    min-height: 53px;

    @media (max-width: 1600px) and (max-height: 900px) {
        min-width: 250px;
        min-height: 43px;
    }
`

const ContenContainer = styled.div`
    position: relative;
    max-width: 1796px;
    max-height: 850px;
    min-width: 1796px;
    min-height: 850px;
    height: 100%;
    margin: 0 auto;
`

const cardsContent = [
    {
        text: () => {
            return(
                <p>Если вы просто хотели посмотреть на нашу BI – спасибо, что посмотрели❤️ 
                <br></br>
                <br></br>
                Будем рады, если вы оставите обратную связь в этом небольшом опросе: </p>
            )
        },
        btn: () => <CardButton>Перейти в опрос</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <p>Если вы выбираете систему для внедрения – давайте вместе обсудим вашу задачу. Возможно, у вас остались какие-то вопросы или сомнения. 
                <br></br>
                <br></br>
                Просто запишитесь на консультацию здесь –  </p>
            )
        },
        btn: () => <CardButton>Записаться на консультацию</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <p>Если вам не хватило времени, чтобы ознакомиться с системой, напишите нам, мы поможем – t.me/AnalyticWorkspace </p>
            )
        },
        btn: () => <CardButton>Перейти</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <p>Ближе к окончанию срока действия демо-версии мы напомним вам на почту об опросе и возможности консультации 😉
                </p>
            )
        },
        btn: false,
        image: undefined
    }
]

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
            {/* <ContenContainer> */}
                <Header>Что делать после ознакомления с демо-версией</Header>
                <Cards>
                    {
                        cardsContent.map(card => <Card>
                            <CardContent>
                                <CardText>
                                    {card.text()}
                                </CardText>
                                {card.btn ? card.btn() : false}
                            </CardContent>
                                <CardImg>

                                </CardImg>
                        </Card>)
                    }
                </Cards>
            {/* </ContenContainer> */}
            </StyledContainer>
        )
    }