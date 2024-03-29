import styled from "styled-components"
import video_filler from '/src/assets/video_filler.png'
import video_filler_2 from '/src/assets/video_filler_2.png'
import play from '/src/assets/play.png'
import { LinkWithTooltip } from "../Links/LinkWithTooltip"

const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 740px;
    max-height: 370px;
    border-radius: 15px;
    overflow: hidden;
`

const FillerVideo = styled.img`
    width: 100%;
    height: 100%;
`

const PlayWrapper = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(60, 59, 59, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Play = styled.img`
    cursor: pointer;
`


export const ImageFiller = ({imageSrc, linkTo}) => {
    return(
        <Card>
            <PlayWrapper>
                <LinkWithTooltip>
                    <a href={linkTo ? linkTo : "http://google.com"}
                    target="_blank"
                    >
                        <Play src={play}></Play>
                    </a>
                </LinkWithTooltip>
            </PlayWrapper>
            <FillerVideo src={imageSrc ? imageSrc : video_filler_2}>
            </FillerVideo>
        </Card>
    )
}