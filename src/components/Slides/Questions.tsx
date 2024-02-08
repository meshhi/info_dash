import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_models from "/src/assets/about_models/bg_about_models.svg"
import bg_what_can from "/src/assets/what_can_do/bg_what_can.png"
import questions_chat from "/src/assets/questions/questions_chat.png"
import questions_doc from "/src/assets/questions/questions_doc.png"
import questions_stepic from "/src/assets/questions/questions_stepic.png"
import questions_tg from "/src/assets/questions/questions_tg.png"

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

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    margin-bottom: 40px;
`

const GridItem = styled.div`
    display: flex;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-color: white;
    gap: 20px;
`

const GridImageBg = styled.div`
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? bg_what_can
    : "bg_what_can.png"});
    min-width: 211px;
    min-height: 166px;
    background-color: #E3EAEF;
    flex-basis: 48%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
`

const GridImage = styled.img`
    width: 60%;
    height: 60%;
`

const GridText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Comment = styled.div`
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-color: white;
    padding: 29px 54px;
    font-size: 20px;
    font-weight: 300;
`

export const Questions: FC<PropsWithChildren> = () => {
    const gridContent = [
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? questions_chat
            : "questions_chat.png",
            text: () => <h1>У нас есть сообщество в Телеграм. Многие пользователи отмечают,<br></br> что на любой вопрос получают оперативный\n ответ. 
            t.me/awcommunity – присоединяйтесь. Спрашивайте и отвечайте!</h1>
        },
        // {
        //     src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        //     ? questions_doc
        //     : "questions_doc.png",
        //     text: `У системы есть документация с примерами и картинками – если будут вопросы “как это работает”, то в ней точно есть ответы
        //     Документация`
        // },
        // {
        //     src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        //     ? questions_stepic
        //     : "questions_stepic.png",
        //     text: "У нас есть бесплатный курс на Stepik – “BI-аналитик”Возможно, вы с него и пришли, чтобы практику делать. Если нет – то скорее запишитесь, там мы учим навыкам работы BI-аналитика. "
        // },
        // {
        //     src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        //     ? questions_tg
        //     : "questions_tg.png",
        //     text: "У нас есть форум с описанием конкретных примеров, там же вы можете оставить пожелания по развитию функциональности системы – мы их ценим и стараемся учитывать в будущих релизах."
        // }
    ]

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
            <Grid>
                {
                    gridContent.map(item => <GridItem key={item.text}>
                        <GridImageBg>
                            <GridImage src={item.src}></GridImage>
                        </GridImageBg>
                        <GridText>{item.text()}</GridText>
                    </GridItem>)
                }
            </Grid>
            <Comment>
            А ещё есть телеграм-канал для развития насмотренности и навыков в Data Driven – Data Driven культура (ссылка: https://t.me/awbi_ru). Подписывайтесь.
            </Comment>
        </StyledContainer>
        )
    }