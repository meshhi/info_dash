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
    padding: 80px 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    min-height: 220px;
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
    max-width: 211px;
    background-position: 20px center;
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

const BoldLink = styled.a`
    text-decoration: underline;
    color: black;
    font-weight: 500;
`

export const Questions: FC<PropsWithChildren> = () => {
    const gridContent = [
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? questions_tg
            : "questions_tg.png",
            text: () => 
            <p>
                У нас есть сообщество в Телеграм. Многие пользователи <br></br> 
                отмечают, что на любой вопрос получают оперативный <br></br>ответ. 
                    <br></br>
                    <br></br>
                <BoldLink href="https://t.me/awcommunity">t.me/awcommunity</BoldLink>– присоединяйтесь. Спрашивайте <br></br> и отвечайте!
            </p>
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? questions_doc
            : "questions_doc.png",
            text: () => 
            <p>
                У системы есть документация с примерами <br></br> и картинками – если будут вопросы “как это работает”, <br></br> то в ней точно есть ответы
                    <br></br>
                    <br></br>
                <BoldLink href="https://webhelp.analyticworkspace.ru/">Документация</BoldLink>
            </p>
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? questions_stepic
            : "questions_stepic.png",
            text: () => 
            <p>
                У нас есть бесплатный курс на Stepik – <BoldLink href="https://webhelp.analyticworkspace.ru/">"BI-аналитик"</BoldLink><br></br>Возможно, вы с него и пришли, чтобы практику делать.<br></br> Если нет – то скорее запишитесь, там мы учим навыкам<br></br> работы BI-аналитика. 
                
            </p>
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? questions_chat
            : "questions_chat.png",
            text: () => 
            <p>
                У нас есть <BoldLink href="https://webhelp.analyticworkspace.ru/">форум</BoldLink> с описанием конкретных примеров,<br></br> там же вы можете оставить пожелания по развитию <br></br> функциональности системы – мы их ценим и стараемся <br></br> учитывать в будущих релизах.
           
            </p>
        },
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