import React, { Component } from 'react'
import styled from 'styled-components';

import serach from '../accessts/search.png';
import bell from '../accessts/BellIcon.png';
function Header() {
    
        return (
            <>
            <Headercontainer>
              <Nav>  
                <SearchContainer>
                    <Rectange6>
                    <Searchbar>
                        <SearchIcon></SearchIcon>
                        <SearchText></SearchText>
                    </Searchbar>
                   
                    </Rectange6>
                    <PostContainer>
                        <BellIcon></BellIcon>
                        <PostTask>Post Task</PostTask>
                    </PostContainer>
                </SearchContainer>
                </Nav>
            </Headercontainer>
            </>
        )
    }


    export default Header;

    const Headercontainer=styled.div
    `
    /* Toppanal */


    position: absolute;
    width: 1440px;
    height: 120px;
    left: 0px;
    top: 0px;
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `

   const Nav=styled.div
   `
   /* Nav */


   position: absolute;
   width: 1240px;
   height: 40px;
   left: 160px;
   top: 20px;
   `

const SearchContainer=styled.div
`
/* Nav */


position: absolute;
width: 1240px;
height: 40px;
left: 160px;
top: 20px;
`

const Searchbar=styled.div
`/* Searchbar */


position: absolute;
left: 1.29%;
right: 24.27%;
top: 5%;
bottom: 5%;`

const SearchIcon=styled.div
`
/* Vector */


position: absolute;
left: 94.04%;
right: 3.79%;
top: 19.44%;
bottom: 25%;

background:  url(${serach});


`

const SearchText=styled.h2
`
/* search for people task or update */


position: absolute;
left: 3.14%;
right: 63.27%;
top: 11.11%;
bottom: 11.11%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18.9296px;
line-height: 28px;
text-align: center;

color: rgba(0, 0, 0, 0.7);
`

const Rectange6=styled.div
`/* Rectangle 6 */


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Background */

background: #FAF8F9;
border-radius: 30px;`

const PostContainer=styled.div
`
/* Post task,notification,profile */


position: absolute;
left: 79.8%;
right: 1.62%;
top: 15%;
bottom: 15%;
`

const Group=styled.div
`
/* Group */


position: absolute;
left: 96.35%;
right: 1.62%;
top: 20%;
bottom: 17.5%;
`

const BellIcon=styled.div
`
/* Vector */


position: absolute;
left: 91.16%;
right: 6.81%;
top: 22.5%;
bottom: 15%;

background:url(${bell});
`

const PostTask=styled.h2

`
/* POST TASK */


position: absolute;
left: 79.8%;
right: 12.01%;
top: 15%;
bottom: 22.5%;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18.9296px;
line-height: 28px;
text-align: center;

color: #000000;
`
