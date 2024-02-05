import styled from "styled-components";

export const StyledButton = styled.button`
width: 185px;
height: 53px;
border-radius: 9px;
-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
transition: all 0.2s ease-in-out;
`

export const RedButton = styled(StyledButton)`
    background-color: #E8698A;

    &:hover {
        background-color: #E64F76;
    }
`

export const GreenButton = styled(StyledButton)`
    background-color: #65CCCC;

    &:hover {
        background-color: #42CECE;
    }
`   