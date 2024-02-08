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

const cards = [
    {
        id: 1,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_models
        : "bg_about_models.svg",
        text: "Вы можете перейти к демо-версии через личный кабинет на сайте:"
    },
    {
        id: 2,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_models
        : "bg_about_models.svg",
        text: "А если вы окажетесь на странице входа в AW BI, то жмите “Войти через личный кабинет”"
    },
    {
        id: 3,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_models
        : "bg_about_models.svg",
        text: "Реквизиты доступа в личный кабинет вы создавали при регистрации в демо-версии. Если не получается или забыли пароль – напишите в нашу поддержку: КУДА"
    }
]

export const BackToDemo: FC<PropsWithChildren> = () => {
    
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
            <Header>Как войти в демо версию, если вышли</Header>
            <TextContent>Демо-версия соединена с личным кабинетом на сайте AW BI – analyticworkspace.ru. Мы это сделали штатными средствами системы – так и вы сможете встроить нашу BI в свой ИТ-ландшафт.</TextContent>
            <Cards>
                {
                    cards.map(card => 
                    <Card key={card.id}>
                        <CardImg src={card.img}></CardImg>
                        <CardText>{card.text}</CardText>
                    </Card>)
                }
            </Cards>
        </StyledContainer>
        )
    }