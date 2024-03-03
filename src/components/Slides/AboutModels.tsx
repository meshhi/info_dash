import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_about_models from "/src/assets/about_models/bg_about_models.svg"
import { ImageFiller } from "../UI/Fillers/ImageFiller";

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
    padding: 88px 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1600px) and (max-height: 900px) {
        padding: 58px 50px;
    }
`

const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 21px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 585px;
    gap: 10%;
`

const ContentLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    text-wrap: balance;
`

const ContentRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`

const TextWrapper = styled.div`
    min-height: 167.95px;
    display: flex;
    flex-direction: column;    
    overflow: hidden;
`

const ContentText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 300;
    max-width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
    word-wrap: break-word;

    @media (max-width: 1200px) {
        font-size: 16px;
    }
`


const ContentTextWithLine = styled.span`
    margin-top: 44px;
    margin-bottom: 33px;
    font-size: 16px;
    text-decoration: underline;

    @media (max-width: 1200px) {
        margin-top: 20px;
        margin-bottom: 15px;
    }

    @media (max-width: 850px) or (max-height: 755px){
        display: none;
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

    // min-width: 500px;
    min-height: 250px;
`

const StyledIFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const AboutModels: FC<PropsWithChildren> = () => {
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
                Модели
            </Header>
            <Content>
                <ContentLeft>
                    <TextWrapper>
                        <ContentText>
                        – это раздел, в котором вы можете объединить одни данные с другими, трансформировать их, применить прогнозирование и много-много другого. ETL и ML – это наша суперсила!
                        </ContentText>
                        <ContentTextWithLine>
                            Посмотрите краткий обзор раздела Модели:
                        </ContentTextWithLine>
                    </TextWrapper>
                    <ContentVideo>
                        <ImageFiller 
                        imageSrc={undefined} linkTo={"https://www.youtube.com/embed/UUNxPv0xNsw?si=hHIbuHyF0Wd7DCde"}                        
                        ></ImageFiller>
                        {/* <StyledIFrame 
                        src="https://www.youtube.com/embed/UUNxPv0xNsw?si=hHIbuHyF0Wd7DCde" 
                        title="AW_sources_tutorial" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" 
                        ></StyledIFrame> */}
                    </ContentVideo>
                </ContentLeft>
                <ContentRight>
                    <TextWrapper>
                        <ContentText>
                            А ещё есть большой эфир, в котором рассказываем о применении ML (его посмотрите позже):
                        </ContentText>
                    </TextWrapper>
                    <ContentVideo>
                        <ImageFiller        
                        imageSrc={undefined} linkTo={"https://www.youtube.com/embed/x-bBELwwcxE?si=qr_NA18_CXSCBejZ"}                        
                        ></ImageFiller>
                        {/* <StyledIFrame 
                        src="https://www.youtube.com/embed/x-bBELwwcxE?si=qr_NA18_CXSCBejZ" 
                        title="AW_sources_tutorial" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" 
                        ></StyledIFrame> */}
                    </ContentVideo>

                </ContentRight>
            </Content>
        </StyledContainer>
    )
}