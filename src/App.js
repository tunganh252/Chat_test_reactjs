import React, {Component} from 'react'
import styled from 'styled-components';
import SideBar from './Components/SideBar'
import MainComponent from './Components/MainComponent'

import { BrowserRouter as Router } from "react-router-dom";
// import MainChat from './Components/Chat/MainChat';
// import Home from './Components/Home/Home';

// import Home from './Components/Home'

// import {     BrowserRouter as Router,     Route,     Link,   } from
// 'react-router-dom'

const AppContainer = styled.div `
  display: flex;
  width: 100%;
  height:100vh;
  background-image: linear-gradient(121deg, #00a1e4, #005d98);
  position: relative;
  .overlaySideBar{
      position: absolute;
      top:0;
      left:0;
      width:18%;
      height: 100%;
      background-color:#000;
      opacity: .25;
  }
  /* .MainContainer{
      width: 82%;
  } */
`
export default class App extends Component {

    render() {
        return (
            <Router>
            <AppContainer>
                <SideBar></SideBar>
                <div className='overlaySideBar'/>

                
                <MainComponent/>
            </AppContainer>
            </Router>
        )
    }
}
