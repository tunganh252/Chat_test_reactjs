import React, { Component } from "react";
import styled from "styled-components";

const UserTransferContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 240px;
  height: 80px;
  padding-top: 12px;
  overflow: hidden;
`;
const UserItem = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }
  h3 {
    font-family: utm;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin-top: 6px;
  }
`;
export default class ItemUserTransfer extends Component {
  scrollY = e => {
    console.log(e);
    console.log("deltaX", e.deltaX);
    console.log("deltaY", e.deltaY);
    console.log("currenttarget", e.currentTarget);
    if (e.deltaY < 0) {
      e.currentTarget.scrollLeft -= 30;
    } else e.currentTarget.scrollLeft += 30;
  };

  renderItem = () => {
    let { dataUpdate } = this.props;

    console.log(dataUpdate);
  };
  renderUser = () => {
    let { dataUser } = this.props;

    return dataUser.map((item, index) => {
      return (
        <UserItem key={index}>
          <img src={item.img} alt="sdfsdf" />
          <h3>{item.userName}</h3>
        </UserItem>
      );
    });
  };

  render() {
    return (
      <UserTransferContainer onWheel={e => this.scrollY(e)}>
        {this.renderUser()}

        
      </UserTransferContainer>
    );
  }
}
