import React, { Component } from "react";
import styled from "styled-components";

import bg from "./../../Assets/images/img2.jpg";
import arrow from "./../../Assets/images/arrow-right-solid.svg";

const RightContainer = styled.div`
  width: 30%;
  .block1 {
    width: 95%;
    height: 150px;
    border-radius: 5px;
    position: relative;
    background-image: url(${bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 15px 0 0 15px;
    .overlay {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-image: linear-gradient(64deg, #00cfff, #005cec, #005bec);
      opacity: 0.3;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 0;
    }
    .content {
      z-index: 10;
      .titleBill {
        font-family: Roboto;
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        text-transform: uppercase;
      }
      .time {
        font-family: "Roboto light";
        font-size: 16px;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        padding: 40px 0 0 0;
      }
      .money {
        font-family: Lato;
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        padding: 5px 0 0 0;
      }
      .text {
        padding: 10px 0 0 0;
        font-family: "Roboto light";
        font-size: 16px;
        font-style: italic;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
    }
  }
  .block2 {
    padding: 25px 0 0 15px;
    margin-top: 20px;
    width: 95%;
    height: 165px;
    border-radius: 5px;
    opacity: 0.85;
    background-image: linear-gradient(to top, #000f2f, #00385c);
    .title {
      font-family: Roboto;
      font-size: 28px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
    }
    .text {
      font-family: "Roboto light";
      font-size: 26px;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
      margin-top: 10px;
    }
    .input {
      position: relative;
      input {
        width: 85%;
        height: 45px;
        /* opacity: 0.1; */
        border-radius: 22.5px;
        background-color:rgba(255,255,255, 0.1);
        border: none;
        outline: none;
        margin-top: 30px;
        padding: 0 20px;
        color: #fff;
      }
      input::placeholder {
        color: #fff !important;
      }
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10%;
        bottom: 15%;
      }
    }
  }
`;

export default class RightContent extends Component {
  render() {
    return (
      <RightContainer className="rightContent">
        <div className="block1">
          <div className="content">
            <p className="titleBill">NEXT Recurring Bill Payment</p>
            <p className="time">15 October, 2018</p>
            <p className="money">220,000 VND</p>
            <p className="text">Water bill monthly</p>
          </div>
          <div className="overlay" />
        </div>
        <div className="block2">
          <p className="title">Hello</p>
          <p className="text">May I help you?</p>
          <div className="input">
            <input placeholder="Answer here" type="text" />
            <img src={arrow} alt="saasd" />
          </div>
        </div>
      </RightContainer>
    );
  }
}
