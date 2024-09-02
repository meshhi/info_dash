import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_sources from "/src/assets/about_sources/bg_about_sources.png"
import arrow_right_sources from "/src/assets/about_sources/arrow_right_sources.png"
import { ImageFiller } from "../UI/Fillers/ImageFiller";

const StyledContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_sources
        : "bg_about_sources.png"});
    background-size: cover;
    background-repeat: no-repeat;
    color: black;
    padding: 88px 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Header = styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 85px;

    @media (max-width: 1090px) {
        font-size: 30px;
        margin-bottom: 65px;
    }

    @media (max-height: 900px) {
        margin-bottom: 50px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
`

const ContentVideo = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`

const StyledIFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
`

const TextHeader = styled.h3`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 21px;
`

const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 38px;
    white-space: nowrap;

    @media (max-width: 1090px) {
        font-size: 18px;
        margin-bottom: 30px;
    }

    @media (max-height: 900px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
`

const TextWithLine = styled.span`
    font-size: 16px;
    font-weight: 300;
    position: relative;
`

const Line = styled.img`
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 750px;

    @media (max-width: 1600px) and (max-height: 900px) {
        width: 700px;
    }

    @media (max-width: 1400px) and (max-height: 900px) {
        width: 500px;
    }

    @media (max-width: 1150px) {
        width: 110%;
    }
`

export const AboutSources: FC<PropsWithChildren> = () => {
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
            <Header>
                Что делать в разделах системы
            </Header>
            <Content>
                <ContentText>
                    <TextHeader>
                        Источники данных
                    </TextHeader>
                    <Text>
                        – подключаете источники данных.<br></br> Если у вас нет готовых, то мы сделали<br></br>подборку нескольких датасетов.
                    </Text>
                    <TextWithLine>
                        Посмотрите краткий обзор раздела "Источники данных":
                        <Line src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? arrow_right_sources
                            : "arrow_right_sources.png"
                        }
                        ></Line>
                    </TextWithLine>
                </ContentText>
                <ContentVideo>
                    <ImageFiller
                        imageSrc={undefined} linkTo={"https://vk.com/video-226835413_456239089"}
                    ></ImageFiller>
                </ContentVideo>
            </Content>
        </StyledContainer>
    )
}