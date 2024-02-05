import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import can_left from '/src/assets/can_left.svg';
import can_right from '/src/assets/can_right.png';
import { motion } from "framer-motion";

import bg from '/src/assets/what_can_do/bg.png';
import first from '/src/assets/what_can_do/1.png';
import second from '/src/assets/what_can_do/2.png';
import third from '/src/assets/what_can_do/3.png';
import fourth from '/src/assets/what_can_do/4.png';
import fifth from '/src/assets/what_can_do/5.png';

const StyledContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`

const LeftContent = styled(motion.div)`
    height: 100%;
    flex: 1;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Header = styled.h1`
    font-size: 40px;
    color: #000B18;
    text-align: start;
    padding-inline: 10px;
    font-weight: 500;
`

const Text = styled.p`
    font-size: 20px;
    color: #000000;
    text-align: start;
    padding-inline: 10px;
    font-weight: 300;
`

const LeftImage = styled.img`

`

const RightContent = styled(motion.div)`
    height: 100%;
    flex: 2;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    background-image: url(${can_right});
    background-repeat: no-repeat;
    background-size: cover;
`

const RightGrid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 33px;
`

const GridItem = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 200px;
    border-radius: 15px;
    padding: 6px;
    display: flex;
    gap: 20px;
`

const GridImageBg = styled.div<{ $bg: string }>`
    background-image: url(${bg});
    min-width: 48%;
    height: 100%;
    background-color: #E3EAEF;
    flex-basis: 48%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GridImage = styled.img`
    width: 60%;
    height: 60%;
`

const GridItemText = styled.p`
    color: black;
    font-size: 18px;
    font-weight: 300;
    margin-top: 40px;
`

export const WhatYouCan: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();

    const gridContent = [
        {
            src: first,
            text: "Подключить свои источники. Любые: файлы, базы, веб-сервисы."
        },
        {
            src: second,
            text: "Трансформировать данные и даже применять к ним готовые ML-блоки."
        },
        {
            src: third,
            text: "Визуализировать  и анализировать данные."
        },
        {
            src: fourth,
            text: "Выгружать данные  в файлы, изображения или pdf."
        },
        {
            src: fifth,
            text: "Настроить расписание, по которому ваши данные будут обновляться."
        },
    ]

    return (
        <StyledContainer>
            <LeftContent
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
                        delay: 0,
                    },
                }
            }}
            initial="initial"
            animate="final"
            >
                <Header>
                    Что можно сделать в демо-версии?
                </Header>
                <Text>
                    Демо-версия полнофункциональная – у вас <br></br> не будет только админских функций (добавление пользователей, ролей, настройка рассылки <br></br>и прочее).
                </Text>
                    <LeftImage src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                        ? can_left
                        : "can_left.svg"
                    }>
                    </LeftImage>
        </LeftContent>
        <RightContent
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
                    delay: 0,
                },
            }
        }}
        initial="initial"
        animate="final"
        >
                <Header>
                    Вы можете:
                </Header>
                <RightGrid>
                {
                    gridContent.map(item =>
                    <GridItem key={item.text}>
                        <GridImageBg>
                            <GridImage src={item.src}></GridImage>
                        </GridImageBg>
                        <GridItemText>
                            {item.text}
                        </GridItemText>
                    </GridItem>
                )
                }
                </RightGrid> 
        </RightContent>
    </StyledContainer>) 
}