import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_models from "/src/assets/about_models/bg_about_models.svg"
import back_demo_1 from '/home/meshi/Desktop/info_dash/src/assets/get_aw/back_demo_1.jpg'
import back_demo_2 from '/home/meshi/Desktop/info_dash/src/assets/get_aw/back_demo_2.png'
import back_demo_3 from '/home/meshi/Desktop/info_dash/src/assets/get_aw/back_demo_3.png'

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
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    @media (max-width: 1600px) and (max-height: 900px) {
        padding: 50px 50px;
    }
`

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 49px;

    @media (max-height: 900px) {
        margin-bottom: 25px;
    }

    @media (max-width: 800px)  {
        font-size: 30px;
    }

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 30px;
    }

    @media (max-width: 1120px) and (max-height: 650px) {
        font-size: 20px;
    }
`

const TextContent = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 55px;

    @media (max-height: 900px) {
        margin-bottom: 25px;
    }

    @media (max-width: 800px)  {
        font-size: 16px;
    }

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 16px;
    }

    @media (max-width: 1120px) and (max-height: 650px) {
        font-size: 16px;
    }
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 1272px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex: 1 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 36px;
    max-width: 478px;
    overflow: scroll;

    @media (max-width: 1272px) {
        flex-basis: 350px;
        flex-grow: 0;
        overflow: visible;

        &:nth-child(3) {
            display: none;
        }
    }

    @media (max-width: 1600px) and (max-height: 900px) {
        // max-width: 178px;
        // max-height: 144px;
    }
`

const CardImg = styled.img`
    // min-width: 350px;
    height: 314px;
    border-radius: 15px;
    background-color: grey;
    border: 1px solid #48D6E55C;
    border-radius: 15px;
    background-color: #EDF3FA;

    @media (max-width: 1600px) and (max-height: 900px) {
        width: 350px;
        height: 244px;
    }

    @media (max-width: 1120px) and (max-height: 650px) {
        width: 250px;
        height: 194px;
    }
`
const CardText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: start;

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 16px;
    }

    @media (max-width: 1120px) and (max-height: 650px) {
        font-size: 12px;
    }
`

const BoldLink = styled.a`
    text-decoration: underline;
    color: black;
    font-weight: 500;
`

const cards = [
    {
        id: 1,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? back_demo_1
        : "back_demo_1.jpg",
        text: () => <p>"Вы можете перейти к демо-версии через личный кабинет на сайте:"</p>
    },
    {
        id: 2,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? back_demo_2
        : "back_demo_2.png",
        text: () => <p>"А если вы окажетесь на странице входа в AW BI, то жмите “Войти через личный кабинет”"</p>
    },
    {
        id: 3,
        img: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? back_demo_3
        : "back_demo_3.png",
        text: () => <p>"Реквизиты доступа в личный кабинет вы создавали при регистрации в демо-версии. Если не получается или забыли пароль – напишите в нашу поддержку: <BoldLink href="https://t.me/awcommunity">t.me/awcommunity</BoldLink>"</p>
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
                        <CardText>{card.text()}</CardText>
                    </Card>)
                }
            </Cards>
        </StyledContainer>
        )
    }