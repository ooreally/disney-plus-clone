import React from 'react';
import styled from 'styled-components';
function SampleVideo() {
    return (
        <Container>
            <video autoplay="true" height="100%" width="100%" controls >
                <source src="/videos/marvel.mp4" type="video/mp4" />
            Unable to play this video.
        </video>

        </Container>

    )
}

export default SampleVideo

const Container = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    @media only screen and (max-width: 700px) {
        
        height: 80%;
        width: 100%;
    }
`