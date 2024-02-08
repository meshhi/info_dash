import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_briefly from "/src/assets/briefly_about/bg_briefly.png"
import aw_briefly from "/src/assets/briefly_about/aw_briefly.png"
import arrow_top_briefly from "/src/assets/briefly_about/arrow_top_briefly.svg"

const StyledContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? bg_briefly
    : "bg_briefly.png"});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

const LeftContent = styled.article`
    color: black;
    padding: 80px 50px;
`

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 30px;
`

const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1rem;
`

const CardsContent = styled.div`
    position: absolute;
    left: 50px;
    bottom: 48px;
    color: black;
`

const LinkCard = styled.div`
    --_height: 69px;
    height: var(--_height);
    min-width: 456px;
    max-width: 456px;
    padding: 22px 25px 23px;
    margin-bottom: 20px;
    border: 1px solid #789BB9;
    border-radius: 15px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

const AWImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    // max-width: 1137px;
`

const Arrow = styled.div`
    --_width: 161px;
    width: var(--_width);
    height: 250px;
    position: absolute;
    right: calc(2px - var(--_width));
    bottom: calc(var(--_height) / 2);
    z-index: 5;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? arrow_top_briefly
    : "arrow_top_briefly.svg"});
    background-size: contain;
    background-repeat: no-repeat;
}
`

export const BrieflyAbout : FC<PropsWithChildren>= () => {
    return(
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
            <LeftContent>
                <Header>
                    Кратко про разделы<br></br> системы
                </Header>
                <Text>
                Не удивляйтесь, что у нас всего 4 основных<br></br> пункта в меню – их хватит, чтобы сделать<br></br> потрясающую отчётность.
                </Text>
                <Text>
                А ещё можно в тёмную тему переключиться 😉 <br></br>Дашборды тоже переключатся – многим это<br></br> нравится.
                </Text>
            </LeftContent>
            <CardsContent>
                <LinkCard>Источники данных
                    <Arrow></Arrow>
                </LinkCard>
                <LinkCard>Модели</LinkCard>
                <LinkCard>Виджеты</LinkCard>
                <LinkCard>Информационные панели</LinkCard>
            </CardsContent>

            <AWImage src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                    ? aw_briefly
                    : "aw_briefly.png"
            }></AWImage>
        </StyledContainer>
    )
}