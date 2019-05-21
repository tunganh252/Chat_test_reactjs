import React, { Component } from "react";
import styled from "styled-components";

const UserScrollContainer = styled.div`
  .user {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 10px;
    img {
      width: 40.5px;
      height: 40.5px;
      border-radius: 50%;
    }
    .name {
      font-family: utm;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #001654;
    }
  }
`;

export default class UserScroll extends Component {
  scrollY = e => {
    if (e.deltaY < 0) {
      e.currentTarget.scrollLeft -= 30;
    } else e.currentTarget.scrollLeft += 30;
  };

  render() {
    const { itemUser } = this.props;
    return (
      <UserScrollContainer>
        <div className="user">
          <img src={itemUser.img} alt="asd" />
          <p className="name">{itemUser.userName}</p>
        </div>
      </UserScrollContainer>
    );
  }
}
