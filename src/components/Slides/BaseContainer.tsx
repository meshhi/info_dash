import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RedButton, GreenButton } from "../UI/Buttons/Buttons";

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
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 16px;
    gap: 20px;
`

const CurrentPage = styled.div`
    color: #909090;
`

export const BaseContainer : FC<PropsWithChildren> = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const [page, setPage] = useState<number>()
    const [maxPage, setMaxPage] = useState<number>(10)
    
    useEffect(() => {
        setPage(Number(location.pathname.slice("/slides/".length)));
    }, [location])

    return(
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
                    ? false
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