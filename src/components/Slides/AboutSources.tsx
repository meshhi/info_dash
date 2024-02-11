import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_sources from "/src/assets/about_sources/bg_about_sources.svg"
import arrow_right_sources from "/src/assets/about_sources/arrow_right_sources.svg"

const StyledContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? bg_about_sources
        : "bg_about_sources.svg"});
    background-size: cover;
    background-repeat: no-repeat;
    color: black;
    padding: 88px 50px;
    display: flex;
    flex-direction: column;
`

const ContentContainer = styled.div`
    position: relative;
    max-width: 1796px;
    max-height: 850px;
    min-width: 1796px;
    min-height: 850px;
    height: 100%;
    margin: 0 auto;
`

const Header = styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 85px;
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
    min-height: 441px;
    min-width: 797px;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
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
            {/* <ContentContainer> */}
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
                            Посмотрите краткий обзор раздела Модели:
                            <Line src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                                ? arrow_right_sources
                                : "arrow_right_sources.svg"
                            }
                            ></Line>
                        </TextWithLine>
                    </ContentText>
                    <ContentVideo>
                        <StyledIFrame 
                        src="https://www.youtube.com/embed/t985lZo0Ae8?si=5A3mZ13hAcfkElQD" 
                        title="AW_sources_tutorial" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" 
                        ></StyledIFrame>
                    </ContentVideo>
                </Content>
            {/* </ContentContainer> */}
        </StyledContainer>
    )
}