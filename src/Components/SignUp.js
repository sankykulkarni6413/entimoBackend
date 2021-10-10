import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import img from '../accessts/Rectangle.png'
import logo from '../accessts/logo.png'
import Credential from './Credential';
import Data from './data';

class Button extends React.Component{
 
  
    render()
    {
        return <Backround>
          

          <Logo></Logo>
          <Credential/>
          <Data/>
         
          
        </Backround>
          
          
             
          
    }
   
    
}
export default Button

  const Backround=styled.div
  `
  position:absulute;
  width: 720px;
  height: 100vh;
  left: 0px;
  top: 0px;
  
  background: url(${img});
  `

  const Logo=styled.div
  `
  position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;

background: url(${logo});
  `
  
 


    
  