import React, { Component } from "react";
import styled from "styled-components";
import HomeContent from "./HomeContent";
import TableUser from "./TableUser";
import { listContact } from "../../Data/Data";


const MainHomeContainer = styled.div`
  min-height: 81%;
  padding: 30px 20px 0 20px;
`;

export default class PageHome extends Component {
  state = {
    user: listContact
  };

  render() {
    return (
      <MainHomeContainer>
        <HomeContent 
        dataUser={this.state.user}
        />
        <TableUser/>
      </MainHomeContainer>
    );
  }
}
