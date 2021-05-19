import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {


    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
        })

    }, [])


    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />

        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
    overflow-x: hidden;
    margin: 0px;
    &:before{
        background: url("/images/home-background.png") center center / cover
        repeat fixed;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;
    }

    @media only screen and (max-width: 700px){
        padding: 0px 0px 40px 0px;
        margin-bottom: 0px;
    }
`