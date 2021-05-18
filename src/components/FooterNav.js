import React from 'react';
import styled from 'styled-components';
function FooterNav() {
    return (
        <FootNav>
            <FooterNavMenu>

                <a href="/">
                    <img src="/images/home-icon.svg" />
                </a>

                <a href="/">
                    <img src="/images/search-icon.svg" />

                </a>

                <a href="/">
                    <img src="/images/watchlist-icon.svg" />

                </a>

                <a href="/">
                    <img src="/images/movie-icon.svg" />

                </a>

                <a href="/">
                    <img src="/images/series-icon.svg" />

                </a>


            </FooterNavMenu>
        </FootNav>
    )
}

export default FooterNav

const FootNav = styled.nav`

display: none;
@media only screen and (max-width: 700px){
    display: flex;
    background: rgba(0,0,0,0.9);
    width: 100%;
    position: fixed;
    align-items: center;
    height: 50px;
    width: 100%;
    bottom: 0px;
    overflow: visible;
    

}

`
const FooterNavMenu = styled.div`
    
    @media only screen and (max-width: 700px){
       
        display: grid;
        grid-gap: 10px;
        grid-template-columns:  repeat( 5, minmax(0,1fr));
        align-items: center;
        width: 100%;
        
    }

    a{  
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
        cursor: pointer;
    }
    
    img {
        width: 1.8rem;
        height: 2rem;
    }
`
