import { FC, PropsWithChildren, forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg_briefly from "/src/assets/briefly_about/bg_briefly.png";
import aw_briefly from "/src/assets/briefly_about/aw_briefly.png";
import arrow_top_briefly from "/src/assets/briefly_about/arrow_top_briefly.svg";
import arrow_top_center_briefly from "/src/assets/briefly_about/arrow_top_center_briefly.svg";
import arrow_bottom_center_briefly from "/src/assets/briefly_about/arrow_bottom_center_briefly.svg";
import arrow_bottom_briefly from "/src/assets/briefly_about/arrow_bottom_briefly.svg";
import LeaderLine from "leader-line-new";
import { useLocation } from "react-router-dom";

const StyledContainer = styled(motion.section)`
  width: 100%;
  height: 100%;
  border: 2px solid #48d6e5;
  border-radius: 15px;
  background-color: #edf3fa;
  background-image: url(${!process.env.NODE_ENV ||
        process.env.NODE_ENV === "development"
        ? bg_briefly
        : "bg_briefly.png"});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const LeftContent = styled.article`
  color: black;
  padding: 80px 50px;
  height: 100%;

  @media (max-height: 800px) {
    padding: 50px 50px;
  }

  @media (max-width: 1316px) or (max-height: 595px) {
    & > p {
        display: none;
    }
  }

  @media (max-width: 1766px) {
    & > p {
        font-size: 16px;
    }
  }

  @media (max-width: 1446px) {
    & > p {
        font-size: 14px;
    }
  }
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 30px;

  @media (max-height: 900px) {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 1rem;

  @media (max-height: 900px) {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1040px) {
    margin-bottom: 0.5rem;
  }

  
`;

const GraphicContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100%;
`;

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
`;

const LinkCard = styled.div`
  --_height: 69px;
  height: var(--_height);
  padding: 22px 25px 23px;
  margin-bottom: 20px;
  border: 1px solid #789bb9;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 15%;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1040px) {
    width: 90%;
  }

  @media (max-width: 865px) {
    width: 70%;
  }
`;

const AWImageContainer = styled.div`
  position: absolute;
  // right: 0;
  bottom: 0;
  right: 0;
  // top: 0;
  // left: 600px;
  background-image: url(${!process.env.NODE_ENV ||
        process.env.NODE_ENV === "development"
        ? aw_briefly
        : "aw_briefly.png"});
  // background-position: 0 0;
  // background-size: cover;
  background-repeat: no-repeat;
  width: 64%;
  height: 100%;
`;

const LeftColumn = styled.div``;
const RightColumn = styled.div``;

function addArc(pathData, radius) {
    var reL = /^L ?([\d.\-+]+) ([\d.\-+]+) ?/,
        newPathData,
        curXY,
        curDir,
        newXY,
        newDir,
        sweepFlag,
        arcXY,
        arcStartXY;

    function getDir(xy1, xy2) {
        if (xy1.x === xy2.x) {
            return xy1.y < xy2.y ? "d" : "u";
        } else if (xy1.y === xy2.y) {
            return xy1.x < xy2.x ? "r" : "l";
        }
        throw new Error("Invalid data");
    }

    function captureXY(s, x, y) {
        newXY = { x: +x, y: +y };
        return "";
    }

    function offsetXY(xy, dir, offsetLen, toBack) {
        return {
            x:
                xy.x +
                (dir === "l" ? -offsetLen : dir === "r" ? offsetLen : 0) *
                (toBack ? -1 : 1),
            y:
                xy.y +
                (dir === "u" ? -offsetLen : dir === "d" ? offsetLen : 0) *
                (toBack ? -1 : 1),
        };
    }

    pathData = pathData
        .trim()
        .replace(/,/g, " ")
        .replace(/\s+/g, " ")
        .replace(/^M ?([\d.\-+]+) ([\d.\-+]+) ?/, function (s, x, y) {
            curXY = { x: +x, y: +y };
            return "";
        });
    if (!curXY) {
        throw new Error("Invalid data");
    }
    newPathData = "M" + curXY.x + " " + curXY.y;

    while (pathData) {
        newXY = null;
        pathData = pathData.replace(reL, captureXY);
        if (!newXY) {
            throw new Error("Invalid data");
        }

        newDir = getDir(curXY, newXY);
        if (curDir) {
            arcStartXY = offsetXY(curXY, curDir, radius, true);
            arcXY = offsetXY(curXY, newDir, radius);
            sweepFlag =
                curDir === "l" && newDir === "u"
                    ? "1"
                    : curDir === "l" && newDir === "d"
                        ? "0"
                        : curDir === "r" && newDir === "u"
                            ? "0"
                            : curDir === "r" && newDir === "d"
                                ? "1"
                                : curDir === "u" && newDir === "l"
                                    ? "0"
                                    : curDir === "u" && newDir === "r"
                                        ? "1"
                                        : curDir === "d" && newDir === "l"
                                            ? "1"
                                            : curDir === "d" && newDir === "r"
                                                ? "0"
                                                : null;
            if (!sweepFlag) {
                throw new Error("Invalid data");
            }
            newPathData +=
                "L" +
                arcStartXY.x +
                " " +
                arcStartXY.y +
                "A " +
                radius +
                " " +
                radius +
                " 0 0 " +
                sweepFlag +
                " " +
                arcXY.x +
                " " +
                arcXY.y;
        }

        curXY = newXY;
        curDir = newDir;
    }
    newPathData += "L" + curXY.x + " " + curXY.y;
    return newPathData;
}

export const BrieflyAbout: FC<PropsWithChildren> = () => {
    const startRef1 = useRef();
    const startRef2 = useRef();
    const startRef3 = useRef();
    const startRef4 = useRef();
    const endRef = useRef();

    useEffect(() => {
        let myFunc1 = () => { };
        setTimeout(() => {
            const line1 = new LeaderLine(
                startRef1.current,
                LeaderLine.pointAnchor(endRef.current, {
                    x: 40,
                    y: 115,
                }),
                {
                    startSocketGravity: [0, 0],
                    endSocketGravity: [-100, 0],
                    color: "#789BB9",
                    path: "grid",
                    startSocket: "right",
                    endSocket: "left",
                    startPlug: "disc",
                    size: 1,
                }
            );
            myFunc1 = () => line1.remove();
        }, 500);

        let myFunc2 = () => { };
        setTimeout(() => {
            const line2 = new LeaderLine(
                startRef2.current,
                LeaderLine.pointAnchor(endRef.current, {
                    x: 40,
                    y: 160,
                }),
                {
                    startSocketGravity: [40, 0],
                    endSocketGravity: [-60, 0],
                    color: "#789BB9",
                    path: "grid",
                    startSocket: "right",
                    endSocket: "left",
                    startPlug: "disc",
                    size: 1,
                }
            );
            myFunc2 = () => line2.remove();
        }, 500);

        let myFunc3 = () => { };
        setTimeout(() => {
            const line3 = new LeaderLine(
                startRef3.current,
                LeaderLine.pointAnchor(endRef.current, {
                    x: 40,
                    y: 205,
                }),
                {
                    startSocketGravity: [40, 0],
                    endSocketGravity: [0, 0],
                    color: "#789BB9",
                    path: "grid",
                    startSocket: "right",
                    endSocket: "left",
                    startPlug: "disc",
                    size: 1,
                }
            );
            myFunc3 = () => line3.remove();
        }, 500);

        let myFunc4 = () => { };
        setTimeout(() => {
            const line4 = new LeaderLine(
                startRef4.current,
                LeaderLine.pointAnchor(endRef.current, {
                    x: 40,
                    y: 250,
                    width: 0,
                    height: 0,
                }),
                {
                    startSocketGravity: [100, 0],
                    endSocketGravity: [0, 0],
                    color: "#789BB9",
                    path: "grid",
                    startSocket: "right",
                    endSocket: "left",
                    startPlug: "disc",
                    size: 1,
                }
            );
            myFunc4 = () => line4.remove();
        }, 500);

        return () => {
            myFunc1();
            myFunc2();
            myFunc3();
            myFunc4();
        };
    }, []);
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
                },
            }}
            initial="initial"
            animate="final"
        >
            <LeftContent>
                <Header>
                    Кратко про разделы<br></br> системы
                </Header>
                <Text>
                    Не удивляйтесь, что у нас всего 4 основных<br></br> пункта в меню – их
                    хватит, чтобы сделать<br></br> потрясающую отчётность.
                </Text>
                <Text>
                    А ещё можно в тёмную тему переключиться 😉 <br></br>Дашборды тоже
                    переключатся – многим это<br></br> нравится.
                </Text>
            </LeftContent>
            <GraphicContainer>
                <CardsContent>
                    <LinkCard ref={startRef1}>Источники данных</LinkCard>
                    <LinkCard ref={startRef2}>Модели</LinkCard>
                    <LinkCard ref={startRef3}>Виджеты</LinkCard>
                    <LinkCard ref={startRef4}>Информационные панели</LinkCard>
                </CardsContent>
                <AWImageContainer ref={endRef}></AWImageContainer>
            </GraphicContainer>
        </StyledContainer>
    );
};
