import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_briefly from "/src/assets/briefly_about/bg_briefly.png"
import aw_briefly from "/src/assets/briefly_about/aw_briefly.png"
import arrow_top_briefly from "/src/assets/briefly_about/arrow_top_briefly.svg"
import arrow_top_center_briefly from "/src/assets/briefly_about/arrow_top_center_briefly.svg"
import arrow_bottom_center_briefly from "/src/assets/briefly_about/arrow_bottom_center_briefly.svg"
import arrow_bottom_briefly from "/src/assets/briefly_about/arrow_bottom_briefly.svg"

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

const ContenContainer = styled.div`
    position: relative;
    max-width: 1796px;
    max-height: 850px;
    min-width: 1796px;
    min-height: 850px;
    height: 100%;
    margin: 0 auto;
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
    --_width: 561px;
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

const Icon = styled.div<{ $srcImg?: string; $width?: number; $height?: number; $margin?: string; $backgroundColor?: string; $right?: string;}>`
    width: ${props => props.$width ? props.$width + "px" : "50px"};
    height: ${props => props.$height ? props.$height + "px" : "50px"};
    mask-image: url(${props => props.$srcImg});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    background-color: ${props => props.$backgroundColor ? `${props.$backgroundColor}` : "var(--smooth-grey)"};
    cursor: pointer;
    ${props => props.$margin ? `margin: ${props.$margin};` : ""}
    position: absolute;
    bottom: 30px;
    right: ${props => props.$right ? props.$right : "-156px"};
    z-index: 1000;
`

const LeftColumn = styled.div``
const RightColumn = styled.div``

export const BrieflyAbout: FC<PropsWithChildren> = () => {
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
            <ContenContainer>

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
                        <Icon $srcImg={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? arrow_top_briefly
                            : "arrow_top_briefly.png"}
                            $width={157}
                            $height={312}
                            $backgroundColor="#789BB9"
                            $right={"-154px"}
                            ></Icon>
                    </LinkCard>
                    <LinkCard>Модели
                    <Icon $srcImg={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? arrow_top_center_briefly
                            : "arrow_top_center_briefly.png"}
                            $width={157}
                            $height={358}
                            $backgroundColor="#789BB9"
                            $right={"-155px"}
                            ></Icon>
                    </LinkCard>
                    <LinkCard>Виджеты
                    <Icon $srcImg={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? arrow_bottom_center_briefly
                            : "arrow_bottom_center_briefly.png"}
                            $width={177}
                            $height={400}
                            $backgroundColor="#789BB9"
                            $right={"-165px"}
                            ></Icon>
                    </LinkCard>
                    <LinkCard>Информационные панели
                    <Icon $srcImg={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                            ? arrow_bottom_briefly
                            : "arrow_bottom_briefly.png"}
                            $width={170}
                            $height={446}
                            $backgroundColor="#789BB9"
                            $right={"-164px"}
                            ></Icon>
                    </LinkCard>
                </CardsContent>


                <AWImage src={!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                    ? aw_briefly
                    : "aw_briefly.png"
                }></AWImage>
            </ContenContainer>


        </StyledContainer>
    )
}