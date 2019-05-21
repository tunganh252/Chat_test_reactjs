import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MainChat from "./Chat/MainChat";
import PageHome from "./Home/PageHome";

import { Route, Switch, Redirect } from "react-router-dom";
const MainContainer = styled.div`
  width: 82%;
`;

export default class MainComponent extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/home" component={PageHome} />
            <Route path="/chat" component={MainChat} />
            <Route path="/transfer" component={MainChat} />
            <Route path="/payment" component={MainChat} />
            <Route path="/product" component={MainChat} />
            <Redirect from='/' to='/home'/>    
        </Switch>
        

        <Footer />
      </MainContainer>
    );
  }
}
