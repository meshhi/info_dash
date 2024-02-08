import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import can_right from '/src/assets/can_right.png';
import { motion } from "framer-motion";
import top from "/src/assets/restrictions/top.svg"
import bottom from "/src/assets/restrictions/bottom.svg"

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
    // justify-content: space-between;
    gap: 80px;
    align-items: center;
    overflow: hidden;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? can_right
    : "can_right.png"});
    background-repeat: no-repeat;
    background-size: cover;
    // background-position: 100%;

    // &:before {
    //     content: "";
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     left: 0;
    //     right: 0;
    //     top: 0;
    //     bottom: 0;
    //     z-index: -1;
    //     background-image: url(${can_right});
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     background-position: 100%;
    // }
`

const Header = styled.h1`
    font-size: 40px;
    color: #000B18;
    text-align: start;
    padding-inline: 10px;
    font-weight: 500;
`

const TextList = styled.ol`
    color: #000000;
    margin-left: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 20px;
    font-weight: 300;
`

const Text = styled.p`
    font-size: 20px;
    color: inherit;
    text-align: start;
    padding-inline: 10px;
    font-weight: 300;
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
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    flex: 1;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? top
    : "top.svg"});
    background-size: cover;
    background-repeat: no-repeat;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const RightBottomContent = styled.div`
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
    padding: 2%;
    flex: 1;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? bottom
    : "bottom.svg"});
    background-repeat: no-repeat;
    color: white;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledLink = styled.a`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 23px;
    margin-left: 20px;
    text-decoration: underline;
    cursor: pointer;
`

export const Restrictions: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();

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
                    <li>Вы сможете использовать до 5 файловых источников,<br></br> до 100 Мб каждый. Базы данных и веб-сервисы можете<br></br> подключать в любом количестве.</li>
                    <li>Вы можете создать до 5 моделей, включая удалённые.<br></br> Мы советуем не удалять модели, а переиспользовать.</li>
                    <li>Во время визуализации и анализа данных мы<br></br> не используем прямое подключение к вашим <br></br>источникам – все данные после трансформации<br></br> в разделе “Модели” перекладываются в аналитическую<br></br> витрину в Clickhouse. Мы ожидаем, что данные в одной <br></br>витрине будут “весить” до 524 Мб.</li>
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
                    <Text style={{ "fontSize": "30px", "fontWeight": "300", "marginTop": "43px", "marginLeft": "20px" }}>
                        Если вам нужна демо-версия <br></br> для работы на своих серверах – <br></br> напишите нам:
                    </Text>
                    <StyledLink 
                    href="https://t.me/awcommunity"
                    target="_blank"
                    >
                        t.me/AnalyticWorkspace
                    </StyledLink>
                </RightBottomContent>
            </RightContent>
        </StyledContainer>)
}