import React, { Component } from "react";
import styled from "styled-components";

import ic_chat from "./../Assets/images/ic_chat.svg";
import ic_payment from "./../Assets/images/ic_payment1.svg";
import ic_letter from "./../Assets/images/ic_letter.svg";

const HeaderContainer = styled.div`
  width: 100%;
  height:7% ;
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex: 1;
  .aaa {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .titleApp {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #70c0e4;
      position: relative;
      overflow: hidden;
      .blockImg {
        width: 26.5px;
        height: 22px;
        margin-right: 10%;
      }
      .text {
        font-family: "Roboto Light";
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-left: 10px;
        color: #fff;
      }
    }
    .triangle {
      border-left: solid 30px #70c0e4;
      border-bottom: solid 27px transparent;
      border-top: solid 25px transparent;
    }
  }
  .customer {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    .customContent {
      font-family: "Roboto Light";
      font-size: 12px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
      margin-left: 10px;
      opacity: 0.5;
    }
    .border {
      margin-left: 25px;
      height: 25%;
      width: 1px;
      background-color: #ffffff8f;
    }
    .language {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.5px;
      color: #fff;
      margin-left: 20px
    }
  }
`;

const BlockImg = styled.div`
  width: 16px;
  height: 16px;
  border-radius: ${props => props.boderRadius || "0"};
  background-color: ${props => props.bgColor || "transparent"};
  margin-left: ${props => props.mgLeft || "0"};
  display: flex;
  justify-content: center;
  align-items: center;
  .img1 {
    width: 8.6px;
    height: 11.1px;
  }
  .img2 {
    width: 100%;
    height: 100%;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="aaa">
          <div className="titleApp">
            <div className="blockImg">
              <img className="img" src={ic_chat} alt="abc" />
            </div>
            <div className="text">Chat</div>
          </div>
          <div className="triangle" />
        </div>
        <div className="customer">
          <BlockImg boderRadius="3px" bgColor="#fff">
            <img className="img1" src={ic_payment} alt="abc" />
          </BlockImg>
          <p className="customContent">Customer Survey</p>
          <BlockImg mgLeft="50.8px">
            <img className="img2" src={ic_letter} alt="abc" />
          </BlockImg>
          <div className="border" />
          <p className="language">EN</p>
        </div>
      </HeaderContainer>
    );
  }
}
