import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RedButton, GreenButton } from "../UI/Buttons/Buttons";
import { LinkWithTooltip } from "../UI/Links/LinkWithTooltip";


import greetings_bg from '/src/assets/greetings_bg.png'
import greetings_tableau_png from '/src/assets/greetings_tableau.png'


const StyledBaseContainer = styled.main`
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
`

const ViewContainer = styled.div`
    min-height: 93%;
`

const Row = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 2px;
    gap: 20px;
`

const CurrentPage = styled.div`
    color: #909090;
`

export const BaseContainer: FC<PropsWithChildren> = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const [page, setPage] = useState<number>()
    const [maxPage, setMaxPage] = useState<number>(10)

    useEffect(() => {
        setPage(Number(location.pathname.slice("/slides/".length)));
    }, [location])

    return (
        <StyledBaseContainer>
            <ViewContainer>
                <Outlet></Outlet>
            </ViewContainer>
            <Row>
                <CurrentPage>{page}/{maxPage}</CurrentPage>
                <GreenButton
                    onClick={() => {
                        if (page == 2) {
                            navigate("/");
                        } else {
                            navigate(`/slides/${page - 1}`);
                        }
                    }}
                >Назад</GreenButton>
                {
                    page == maxPage
                        ?
                        <LinkWithTooltip marginLink={0}>
                            <RedButton
                            ><a href="https://aw-demo.ru/app/sources" target="_blank" onClick={(e) => {
                                e.preventDefault();
                                // @ts-ignore
                                redirect("https://aw-demo.ru/app/sources", true);
                            }
                            }>Перейти в систему</a></RedButton>
                        </LinkWithTooltip>
                        :
                        <RedButton
                            onClick={() => {
                                navigate(`/slides/${page + 1}`);
                            }}
                        >Далее</RedButton>
                }
            </Row>
        </StyledBaseContainer>)
}