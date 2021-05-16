import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';



function Detail() {

    const { id } = useParams();
    const [ movie, setMovie] = useState();
    useEffect( () => {
        db.collection("movies").doc(id).get().then((doc) => {
            if(doc.exists){
                setMovie(doc.data());
            }
            else{
                    //redirect to home
            }
        })
    },[]) 

    //console.log(movie);
    return (
        <Container>
            {movie && <>
                <Background>
                <img src={movie.backgroundImg}/>
            </Background>
            <ImageTitle>
                <img src={movie.titleImg}/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src= "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src= "/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
            </>
            }
            
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    margin-left: 10px;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: fit;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls= styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    
`

const PlayButton= styled.button`
    
    border-radius: 4px;
    font-size: 16   px;
    margin-right: 22px;
    padding: 0 24px;
    align-items: center;
    display: flex;
    background: rgb(249, 249, 249);
    height: 56px;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
   
    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton= styled(PlayButton)`
    background: rgba(0, 0, 0 , 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton= styled.button`
    margin-right:16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border-color: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor:pointer;
    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton= styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 760px;
`