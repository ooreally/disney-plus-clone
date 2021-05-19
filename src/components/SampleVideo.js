import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
function SampleVideo() {

    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc) => {
            if (doc.exists) {
                setMovie(doc.data());
            }

        })
    }, [])

    return (
        <Container>

            <Video autoplay="true" controls loop>
                {/* Sample video */}
                <source src="/videos/marvel.mp4" type="video/mp4" /> 
            Unable to play this video.
        </Video>
            {
                movie &&
                <>
                    <H1>{movie.title}</H1>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>

                    <Description>
                        <H4>Plot</H4>
                        {movie.description}
                    </Description>
                </>
            }

        </Container>

    )
}

export default SampleVideo

const Container = styled.div`

`
const Video = styled.video`
    height: 680px;
    width: 100%;
    padding: 0;
    margin: 0;
    // margin-bottom: 0px;
    @media only screen and (max-width: 1160px) {
        width: 100%;
        height: max-content;
    }
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    margin-left: 40px;
    @media only screen and (max-width: 700px){
        margin-left: 10px;
        font-size: 13px;
    }
`

const Description = styled.div`
    
    font-size: 20px;
    margin-top: 0px;
   
    float: block;
    margin-left: 40px;
    padding: 0 0 30px;
    @media only screen and (max-width: 700px){
        margin-left: 10px;
        font-size: 18px;
        height: fit-content;
        // position: fixed;
        max-width: 760px;
        margin-bottom: 30px;
    }
`
const H1 = styled.h1`
    margin-top: 30px;        
    margin-left: 40px;
    font-size: 1.5rem;
    

@media only screen and (max-width: 700px){
    margin-left: 10px;
    margin-top: 10px; 
}
`

const H4 = styled.h4`
    margin-bottom: 5px;        
    margin-left: 0;
    line-height: 1;

@media only screen and (max-width: 700px){
    // margin-left: 10px;
}
`