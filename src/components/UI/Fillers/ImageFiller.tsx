import styled from "styled-components"
import video_filler from '/src/assets/video_filler.png'
import play from '/src/assets/play.png'

const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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

`


export const ImageFiller = ({imageSrc, linkTo}) => {
    return(
        <Card>
            <PlayWrapper>
                <a href={linkTo ? linkTo : "http://google.com"}>
                    <Play src={play}></Play>
                </a>
            </PlayWrapper>
            <FillerVideo src={imageSrc ? imageSrc : video_filler}>
            </FillerVideo>
        </Card>
    )
}