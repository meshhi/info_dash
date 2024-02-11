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
    display: flex;
    flex-direction: column;
    position: relative;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    gap: 40px;

    padding: 58px 50px;

    @media (max-width: 1600px) and (max-height: 900px) {
        padding: 38px 50px;
    }
`

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`

const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 21px;
`

const ContentText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 300;
    min-height: 72px;

    @media (max-width: 1530px) {
        font-size: 16px;
    }
`

const ContentCommentWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`

const ContentComment = styled.p`
    font-size: 20px;
    font-weight: 300;

    border: 2px solid #48D6E5;
    background-color: #EDF3FA;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 25px;
    border-bottom: 0;
    border-radius: 15px 15px 0 0;
    margin: 0 auto;
    max-width: 90%;

    @media (max-width: 1600px) and (max-height: 900px) {
        font-size: 16px;
        font-weight: 300;
    }

    @media (max-height: 850px) {
        padding: 12px 12px;
    }
`

const ContentTextWithLine = styled.span`
    margin-top: 44px;
    margin-bottom: 33px;
    font-size: 16px;
    text-decoration: underline;
    text-wrap: pretty;

    @media (max-width: 1600px) and (max-height: 900px) {
        margin-top: 24px;
        margin-bottom: 13px;
    }
`

const ContentVideo = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-height: 369px;
`

const StyledIFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const AboutWidgets: FC<PropsWithChildren> = () => {
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
                <Content>
                    <ContentLeft>
                        <Header>
                            Виджеты
                        </Header>
                        <ContentText>
                        – это кирпичи, из которых создаются информационные панели (дашборды).<br></br> Виджет и сам по себе является готовым инструментом аналитики –<br></br> вы можете им поделиться с коллегами, а также выгрузить в виде файла.
                        </ContentText>
                        <ContentTextWithLine>
                            Посмотрите краткое видео, в котором мы делаем обзор виджетов:
                        </ContentTextWithLine>
                        <ContentVideo>
                            <StyledIFrame 
                            src="https://www.youtube.com/embed/FqIQ_nRudIc?si=UIEqUue5R5nt5Kvq" 
                            title="AW_sources_tutorial" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" 
                            ></StyledIFrame>
                        </ContentVideo>
                    </ContentLeft>
                    <ContentRight>
                        <Header>
                            Информационные панели
                        </Header>
                        <ContentText>
                            – это дашборды, собранные из виджетов, обогащённые при этом фильтрами,<br></br> контейнерами, кнопками и прочим.
                        </ContentText>
                        <ContentTextWithLine>
                            Посмотрите краткое видео, в котором мы делаем обзор информационных панелей:
                        </ContentTextWithLine>
                        <ContentVideo>
                            <StyledIFrame 
                            src="https://www.youtube.com/embed/ST1rg65Xpio?si=tsUdQPXHnL3U2HEK" 
                            title="AW_sources_tutorial" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" 
                            ></StyledIFrame>
                        </ContentVideo>
                    </ContentRight>
                </Content>
                <ContentCommentWrapper>
                    <ContentComment>
                        Вам сразу доступны примеры моделей, виджетов и дашбордов – это специально. Мы их создали, чтобы вы могли посмотреть готовые. Но вы смело создавайте свои!
                    </ContentComment>
                </ContentCommentWrapper>
        </StyledContainer>
    )
}