import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import can_right from '/src/assets/can_right.png';
import { motion } from "framer-motion";
import top from "/src/assets/restrictions/restrictions_top.png"
import bottom from "/src/assets/restrictions/restrictions_bottom.png"
import { LinkWithTooltip } from "../UI/Links/LinkWithTooltip";

const StyledContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`

const LeftContent = styled(motion.div)`
overflow: hidden;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? can_right
    : "can_right.png"});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 1800px) {
        gap: 40px;
    }

    @media (max-width: 1400px) {
        gap: 20px;  
    }

    @media (max-width: 1000px) {
        gap: 10px;  
    }

    @media (max-height: 800px) {
        gap: 10px;
    }

    @media (max-height: 1000px) {
        gap: 30px;
    }
    
`

const Header = styled.h1`
    font-size: 40px;
    color: #000B18;
    text-align: start;
    padding-inline: 10px;
    font-weight: 500;

    @media (max-width: 1600px) and (max-height: 800px) {
        font-size: 30px;
        line-height: normal;
    }

    @media (max-width: 1200px) and (max-height: 800px) {
        font-size: 20px;
        line-height: normal;
    }

`

const TextList = styled.ol`
    color: #000000;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 24px;
    font-weight: 300;
    padding-left: 5%;

    overflow-y: scroll;
    overflow-x: hidden;

    @media (max-width: 1600px) and (max-height: 800px) {
        font-size: 16px;
        line-height: normal;
        gap: 20px;
    }

    @media (min-width: 1601px) or (min-height: 801px) {
        font-size: 22px;
        line-height: normal;
    }

    @media (max-width: 1600px) {
        font-size: 18px;
        gap: 20px;
    }

    @media (max-width: 800px) {
        font-size: 16px;
        gap: 10px;
    }

    @media(max-height: 800px) {
        font-size: 20px;
        gap: 10px;
    }
`

const TextListItem = styled.li`
    white-space: pre-line;
`

const Text = styled.p`
    font-size: 20px;
    color: inherit;
    text-align: start;
    padding-inline: 10px;
    font-weight: 300;
    white-space: nowrap;

    @media (max-width: 1600px) {
        font-size: 20px;
    }

    @media (max-width: 800px) {
        font-size: 12px;
    }
`

const TextRightBottom = styled(Text)`
    font-size: 30px;
    font-weight: 300;

    @media (max-width: 1600px) {
        font-size: 25px;
    }

    @media (max-width: 800px) {
        font-size: 15px;
    }
`

const StyledLink = styled.a`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 23px;
    margin-left: 12px;
    text-decoration: underline;
    cursor: pointer;

    @media (max-width: 1600px) {
        font-size: 25px;
    }

    @media (max-width: 800px) {
        font-size: 15px;
    }
`

const RightContent = styled(motion.div)`
    height: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    max-width: 1063px;
`

const RightTopContent = styled.div`
    color: black;
    padding: 2%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? top
    : "restrictions_top.png"});
    background-repeat: no-repeat;
    background-size: cover;
`

const RightBottomContent = styled.div`
    color: white;
    font-size: 30px;
    padding: 2%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? bottom
    : "restrictions_bottom.png"});
    background-repeat: no-repeat;
    background-size: cover;
        border: 2px solid #48D6E5;
        border-radius: 15px;

`

export const Restrictions: FC<PropsWithChildren> = () => {
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
                        Чтобы хватило на всех, мы сделали небольшие технические ограничения в демо-версии:
                    </Header>
                    <TextList>
                        <TextListItem>Вы сможете использовать до 12 файловых источников, до 50 Мб каждый. Базы данных и веб-сервисы можетеподключать в любом количестве.</TextListItem>
                        <TextListItem>Вы можете создать до 10 моделей, включая удалённые. Мы советуем не удалять модели, а переиспользовать.</TextListItem>
                        <TextListItem>Во время визуализации и анализа данных мы не используем прямое подключение к вашим источникам – все данные после трансформации в разделе “Модели” перекладываются в аналитическую витрину в Clickhouse. Мы ожидаем, что данные в одной витрине будут “весить” до 524 Мб.</TextListItem>
                    </TextList>
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
                    <RightTopContent>
                        <Header>
                            Кстати!
                        </Header>
                        <Text>
                            Мы советуем работать с демо-версией AW BI <br></br> с ноутбука или ПК. Смотреть дашборды можно <br></br> и со смартфона, если они адаптированы,<br></br> но работать с системой лучше с использованием <br></br>мышки или аналога.
                        </Text>
                    </RightTopContent>
                    <RightBottomContent>
                        <TextRightBottom>
                            Если вам нужна демо-версия <br></br> для работы на своих серверах – <br></br> напишите нам:
                        </TextRightBottom>
                        <StyledLink 
                        href="https://t.me/awcommunity"
                        target="_blank"
                        >
                            <LinkWithTooltip>
                                <span style={{"textDecoration": "underline"}}>t.me/AnalyticWorkspace</span>
                            </LinkWithTooltip>
                        </StyledLink>
                    </RightBottomContent>
                </RightContent>
        </StyledContainer>)
}