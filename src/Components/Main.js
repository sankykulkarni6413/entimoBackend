import React, { Component } from 'react'
import styled from 'styled-components';
import logo from '../accessts/logo.png'
import Header from './Header';

 class Main extends Component {
    render() {
        return (
            <>
            <Logo></Logo>
            <Header></Header>
            </>
        )
    }
}

const Logo=styled.div
`
position: absolute;
width: 146.01px;
height: 145px;
left: 40px;
top: 8px;

background: url(${logo});
`
export default Main;