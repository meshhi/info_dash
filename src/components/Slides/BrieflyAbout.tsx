import { FC, PropsWithChildren, forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_briefly from "/src/assets/briefly_about/bg_briefly.png"
import aw_briefly from "/src/assets/briefly_about/aw_briefly.png"
import arrow_top_briefly from "/src/assets/briefly_about/arrow_top_briefly.svg"
import arrow_top_center_briefly from "/src/assets/briefly_about/arrow_top_center_briefly.svg"
import arrow_bottom_center_briefly from "/src/assets/briefly_about/arrow_bottom_center_briefly.svg"
import arrow_bottom_briefly from "/src/assets/briefly_about/arrow_bottom_briefly.svg"
import LeaderLine from 'leader-line-new';

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
    overflow: hidden;
`

const LeftContent = styled.article`
    color: black;
    padding: 80px 50px;
    height: 100%;

    @media (max-height: 800px) {
        padding: 50px 50px;
    }
`

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 30px;

    @media (max-height: 900px) {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 15px;
    }
`

const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1rem;

    @media (max-height: 900px) {
        margin-bottom: .5rem;
    }
`

const GraphicContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;

    height: 100%;

    // @media (max-height: 900px) {
    //     height: 700px;
    // }

    // @media (max-width: 1600px) {
    //     width: 1550px;
    // }

    // @media (min-width: 1601px) {
    //     width: 1800px;
    // }
`

const CardsContent = styled.div`
    position: absolute;
    left: 50px;
    bottom: 48px;
    color: black;
    height: 40%;
    min-height: 250px;
    width: 25%;

    @media (max-height: 900px) {
        bottom: 5px;
    }
`

const LinkCard = styled.div`
    --_height: 69px;
    height: var(--_height);
    // min-width: 456px;
    // max-width: 456px;
    padding: 22px 25px 23px;
    margin-bottom: 20px;
    border: 1px solid #789BB9;
    border-radius: 15px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 15%;
    width: 100%;
`

const AWImageContainer = styled.div`
    position: absolute;
    // right: 0;
    bottom: 0;
    right: 0;
    // top: 0;
    // left: 600px;
    background-image: url(${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? aw_briefly
    : "aw_briefly.png"});
    // background-position: 0 0;
    // background-size: cover;
    background-repeat: no-repeat;
    width: 64%;
    height: 100%;
`

const LeftColumn = styled.div``
const RightColumn = styled.div``


export const BrieflyAbout: FC<PropsWithChildren> = () => {
    const startRef1 = useRef();
    const startRef2 = useRef();
    const startRef3 = useRef();
    const startRef4 = useRef();
    const endRef = useRef();

    useEffect(() => {
        const line1 = new LeaderLine(
            startRef1.current,   LeaderLine.pointAnchor(endRef.current, {
                x: 40,
                y: 115,
              }),
            {
                startSocketGravity: 0, 
                endSocketGravity: 120,
                color: '#789BB9',
                path: 'grid', 
                startSocket: 'right', 
                endSocket: 'left', 
                startPlug: 'disc',
                size: 1,
            }
        );

        const line2 = new LeaderLine(
            startRef2.current, LeaderLine.pointAnchor(endRef.current, {
                x: 40,
                y: 160,
              }),
              {
                startSocketGravity: 0, 
                endSocketGravity: 80,
                color: '#789BB9',
                path: 'grid', 
                startSocket: 'right', 
                endSocket: 'left', 
                startPlug: 'disc',
                size: 1,
            }
        );

        const line3 = new LeaderLine(
            startRef3.current, LeaderLine.pointAnchor(endRef.current, {
                x: 40,
                y: 205,
              }),
              {
                startSocketGravity: 0, 
                endSocketGravity: 40,
                color: '#789BB9',
                path: 'grid', 
                startSocket: 'right', 
                endSocket: 'left', 
                startPlug: 'disc',
                size: 1,
            }
        );

        const line4 = new LeaderLine(
            startRef4.current, LeaderLine.pointAnchor(endRef.current, {
                x: 40,
                y: 250,
                width: 0,
                height: 0,
              }),
              {
                startSocketGravity: 0, 
                endSocketGravity: 0,
                color: '#789BB9',
                path: 'grid', 
                startSocket: 'right', 
                endSocket: 'left', 
                startPlug: 'disc',
                size: 1,
            }
        );
        
        return () => {
            line1.remove();
            line2.remove();
            line3.remove();
            line4.remove();
        }
    }, [])
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
            <GraphicContainer>
                <CardsContent>
                    <LinkCard ref={startRef1}>Источники данных
                    </LinkCard>
                    <LinkCard ref={startRef2}>Модели
                    </LinkCard>
                    <LinkCard ref={startRef3}>Виджеты
                    </LinkCard>
                    <LinkCard ref={startRef4}>Информационные панели
                    </LinkCard>
                </CardsContent>
                <AWImageContainer
                ref={endRef}>
                </AWImageContainer>
            </GraphicContainer>
        </StyledContainer>
    )
}