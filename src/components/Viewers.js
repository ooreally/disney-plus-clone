import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>

                <video autoplay="true" loop muted>
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <video autoplay="true" loop muted>
                    <source src="/videos/pixar.mp4" type="video/mp4" />
                </video>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <video autoplay="true" loop muted>
                    <source src="/videos/marvel.mp4" type="video/mp4" />
                </video>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <video autoplay="true" loop muted>
                    <source src="/videos/star-wars.mp4" type="video/mp4" />
                </video>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <video autoplay="true" loop muted>
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
                <img src="/images/viewers-national.png" />
            </Wrap>

        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 30px 10px;
    display: grid;
    grid-gap: 25px;
    // padding: 10px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    // margin-right: 0px;
    @media only screen and (max-width: 700px){
        padding-right: 20px;
        grid-gap: 120px;
       
        overflow-x: scroll;
        overflow-y: hidden;
    }
    
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 10px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    
        @media only screen and (max-width: 700px){
            height: 5rem;
            width: 7rem;
            // overflow-x: scroll;
            // overflow-y: hidden;
        }

    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        display:none;
        overflow:hidden;
        z-index:-1;
    }

    &:hover {

        video{
            display:block;
        }
        // img{
        //     display:none;
        // }
        transform: scale(1.05);
        box-shadow: rgb(0 0 0/ 80%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 72%) 0px 16px 10px -10px;
        border-color: rgba( 249, 249, 249, 0.8);
    }

    
`