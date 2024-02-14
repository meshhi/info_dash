import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import can_left from '/src/assets/can_left.png';
import can_right from '/src/assets/can_right.png';
import { motion } from "framer-motion";
import bg_what_can from '/src/assets/what_can_do/bg_what_can.png';
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
    overflow: scroll;

    @media (max-height: 724px) {
        gap: 20px;
    }

    @media (max-width: 1080px) {
        justify-content: center;
        gap: 2rem;
    }
`

const Header = styled.h1`
    font-size: 40px;
    color: #000B18;
    text-align: start;
    padding-inline: 10px;
    font-weight: 500;

    @media (max-width: 1350px) {
        font-size: 20px;
        margin-bottom: 3px;
    }
`

const Text = styled.p`
    font-size: 20px;
    color: #000000;
    text-align: start;
    padding-inline: 10px;
    font-weight: 300;

    @media (max-width: 1350px) {
        font-size: 16px;
    }

    @media (max-width: 1600px) {
        font-size: 14px;
    }

    @media (max-width: 800px) {
        font-size: 12px;
    }
`

const LeftImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 440px;
`

const RightContent = styled(motion.div)`
    height: 100%;
    flex: 2;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? can_right
    : "can_right.png"});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`

const RightGrid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 33px;
    overflow: hidden;

    @media (max-width: 1400px) {
        gap: 15px;
    }

    @media (max-width: 1150px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
`

const GridItem = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    // min-height: 170px;
    // max-height: 200px;
    // height: 100%;
    border-radius: 15px;
    padding: 6px;
    display: flex;
    gap: 20px;

    @media (max-height: 790px) and (max-width: 1150px) {
        &:nth-child(2) {
            display: none;
        }
    }

    @media (max-height: 650px) and (max-width: 1150px) {
        &:nth-child(3) {
            display: none;
        }
    }
`

const GridImageBg = styled.div`
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? bg_what_can
    : "bg_what_can.png"});
    min-width: 190px;
    max-width: 190px;
    height: 100%;
    background-color: #E3EAEF;
    flex-basis: 48%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-block: 16px;

    @media (max-width: 1600px) {
        min-width: 150px;
        max-width: 150px;
    }

    @media (max-width: 800px) {
        min-width: 100px;
        max-width: 100px;
    }

    @media (min-width: 1600px) {
        min-width: none;
        max-width: none;
    }
`

const GridImage = styled.img`
    width: 60%;
    // height: 60%;
`

const GridItemText = styled.p`
    color: black;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 5px;
    
    @media (max-width: 1600px) {
        font-size: 14px;
    }

    @media (max-width: 800px) {
        font-size: 12px;
    }
`

export const WhatYouCan: FC<PropsWithChildren> = () => {
    const gridContent = [
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? first
            : "1.png",
            text: "Подключить свои источники. Любые: файлы, базы, веб-сервисы."
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? second
            : "2.png",
            text: "Трансформировать данные и даже применять к ним готовые ML-блоки."
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? third
            : "3.png",
            text: "Визуализировать и анализировать данные."
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? fourth
            : "4.png",
            text: "Выгружать данные в файлы, изображения или pdf."
        },
        {
            src: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            ? fifth
            : "5.png",
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
                        Демо-версия полнофункциональная – у вас не будет только админских функций (добавление пользователей, ролей, настройка рассылки и прочее).

                        {/* Демо-версия полнофункциональная – у вас <br></br> не будет только админских функций (добавление пользователей, ролей, настройка рассылки <br></br>и прочее). */}
                    </Text>
                        <LeftImage src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? can_left
                            : "can_left.png"
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