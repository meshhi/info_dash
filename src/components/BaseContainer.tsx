import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./UI/Buttons/Button";

const StyledBaseContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: transparent;
    position: relative;
    overflow: hidden;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 16px;
    gap: 20px;
`

const CurrentPage = styled.div`
    color: #909090;
`

export const BaseContainer : FC<PropsWithChildren> = () => {
    const location = useLocation()
    const [page, setPage] = useState<number>()
    
    useEffect(() => {
        setPage(Number(location.pathname.slice(1)));
    }, [location])

    return(
        <StyledBaseContainer>
            <Outlet></Outlet>
            <Row>
                <CurrentPage>{page}/10</CurrentPage>
                <Button>Назад</Button>
                <Button>Далее</Button>
            </Row>
            <Link to="/">agag </Link>
        </StyledBaseContainer>)
}