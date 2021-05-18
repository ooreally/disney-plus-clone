import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { selectUserName } from '../features/user/userSlice';

function Movies() {

    const movies = useSelector(selectMovies);
    const userName = useSelector(selectUserName);
    console.log(movies);
    return (
        <Container>
            <H> Recommended for You</H>
            <Content>

                {movies &&
                    movies.map((movie) => (
                        //  console.log(movie);

                        <Wrap key={movie.id}>
                            {
                                !userName ?
                                    <Link to="/login" >
                                        <img src={movie.cardImg} />
                                    </Link>
                                    :
                                    <Link to={`/detail/${movie.id}`} >
                                        <img src={movie.cardImg} />
                                    </Link>
                            }
                        </Wrap>
                    ))
                }

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    overflow: hidden;
    grid-gap: 25px;
    
    grid-template-columns: repeat(4, minmax(0, 1fr));
   
    padding: 10px;
    margin: 15px 10px;
   
    @media only screen and (max-width: 600px){
        grid-template-rows: 200px;
        grid-column-gap: 150px;
        grid-auto-columns: 0px;
        grid-auto-flow: column;
        // margin-top: 5px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`

const Wrap = styled.div`
   border-radius: 10px;
   overflow: hidden;
   border: 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


   @media only screen and (max-width: 800px){
    // margin-top: 5px;
        width: 9rem;
       height: 11rem;
       
    //    img{
    //     object-fit: fill;
    //     }
   }

   img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const H =styled.h4`
@media only screen and (max-width: 700px){
    margin: 15px;
}
`