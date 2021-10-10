import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Section from './Section';

import Nav from './Nav';
import Qa from './Qa';
import Profile from './Profile';
import {useHistory} from 'react-router-dom';

function Homepage() {
const history=useHistory();
const [userData,setUserData]=useState();
  const callHomepage=async()=>{
    try{
    
      const res=await fetch('/Homepage',{
        method:'GET',
        headers:{
          Accept:'application/json',
          "Content-Type":"application/json",
         
        },
        
        credentials:'include'
      });
      
      const data=await res.json();

      //console.log(data);
      //console.log("Error");
      setUserData(data);

      if(!res.status ==200)
      {
        const error=new Error(res.error);
        throw error;
      }
    }catch(err)
    {
        console.log(err);
        history.push('/Homepage');
    }
  }
  useEffect(() => {
    callHomepage();
  }, [])
  return (
    <Container >
   <h5 method='GET'>{useState.fullname}</h5>
      <Nav method="POST" />
      <Section />
      <Qa />
      <Profile />

    </Container>
    

  );
}

export default Homepage;

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;

`;
