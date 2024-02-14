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
    overflow: hidden;

    @media (max-height: 980px) {
        padding: 50px 50px;
    }
`

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 49px;
`

const TextContent = styled.p`
    font-size: 20px;
    font-weight: 300;
    // margin-bottom: 55px;

    @media (max-width: 1200px) {
        font-size: 16px;
    }
`

const AdaptiveText = styled.p`
    margin-bottom: 16px;
    @media (max-width: 1400px) and (max-height: 900px) {
        display: none;
    }
`

const AdaptiveTextBottom = styled.p`
    margin-top: 16px;
    @media (max-width: 1400px) and (max-height: 900px) {
        display: none;
    }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;

    @media (max-height: 980px) {
        gap: 30px;
    }
`

const Card = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: white;
    overflow: hidden;
    padding: 8px;
    gap: 36px;
    height: auto;

    @media (max-height: 945px) {
        min-height: 300px;
    }

    @media (max-height: 890px) {
        min-height: 250px;
    }

    @media (max-height: 755px) {
        min-height: 200px;
        max-height: 200px;
    }

    @media (min-width: 1600px) {
        // min-height: 290px;
        max-height: 290px;
    }

    @media (max-height: 857px) {
        max-height: 100px;
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

    @media max-height: 900px) {
        height: 190px;
    }

    @media max-height: 775px) {
        height: 150px;
    }
`

const CardImg = styled.img`
    min-width: 150px;
    max-width: 300px;
    min-height: 150px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: grey;
    flex: 1;

    @media (max-width: 1600px) and (max-height: 900px) {
        // width: 192px;
        height: 100%;;
    }
`
const CardText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    padding-block: 10px;
    flex: 2;
    min-width: 250px;

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 16px;
        height: 100px;
    }

    @media (max-width: 1600px) {
        font-size: 16px;
    }
`

const CardButton = styled(GreenButton)`
    color: white;
    min-width: 330px;
    min-height: 53px;
    margin-bottom: 8px;

    @media (max-width: 1600px) and (max-height: 900px) {
        min-width: 250px;
        min-height: 43px;
    }
`

const BoldLink = styled.a`
    text-decoration: underline;
    color: black;
    font-weight: 500;
`

const cardsContent = [
    {
        text: () => {
            return(
                <TextContent>
                    <AdaptiveText>Если вы просто хотели посмотреть на нашу BI – спасибо, что посмотрели❤️ </AdaptiveText>
                    Будем рады, если вы оставите обратную связь в этом небольшом опросе: 
                </TextContent>
            )
        },
        btn: () => <CardButton>Перейти в опрос</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <TextContent>
                    Если вы выбираете систему для внедрения – давайте вместе обсудим вашу задачу. Возможно, у вас остались какие-то вопросы или сомнения. 
                    <AdaptiveTextBottom>Просто запишитесь на консультацию здесь – </AdaptiveTextBottom>
                </TextContent>
            )
        },
        btn: () => <CardButton>Записаться на консультацию</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <TextContent>
                    Если вам не хватило времени, чтобы ознакомиться с системой, напишите нам, мы поможем – <BoldLink href="https://t.me/awcommunity">t.me/AnalyticWorkspace</BoldLink> 
                </TextContent>
            )
        },
        btn: () => <CardButton>Перейти</CardButton>,
        image: undefined
    },
    {
        text: () => {
            return(
                <TextContent>
                    Ближе к окончанию срока действия демо-версии мы напомним вам на почту об опросе и возможности консультации 😉
                </TextContent>
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
        </StyledContainer>
        )
    }