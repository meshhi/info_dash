import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    border: 2px solid #48D6E5;
    border-radius: 15px;
    background-color: #EDF3FA;
`

export const BrieflyAbout : FC<PropsWithChildren>= () => {
    return(
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

        </StyledContainer>
    )
}