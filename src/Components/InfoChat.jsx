import React, { Component } from "react";
import styled from "styled-components";

import ic_wee from "./../Assets/images/ic_wee.svg";
import ic_plus from "./../Assets/images/ic_plus.svg";
import ic_money from "./../Assets/images/ic_money2.svg";

const InfoChatContainer = styled.div`
  min-width: 260px;
  height: 100%;

  .taskLinear1 {
    min-width: 260px;
    height: 2.5%;
    background-image: linear-gradient(87deg, #f7bb25, #ff2424);
  }
  .taskLinear2 {
    min-width: 260px;
    height: 2.5%;
    background-image: linear-gradient(87deg, #00a548, #bdd50a);
  }
`;
const InfoTransfer = styled.div`
  width: 100%;
  height: 47.5%;
  background-image: linear-gradient(
    37deg,
    #9000ff 0%,
    #8100e1 24%,
    #005cec,
    #005bec
  );
  .titleTransfer {
    display: flex;
    padding-top: 30px;
    justify-content: space-around;
    h4 {
      font-family: utm;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
    }
  }
  .moneyTransfer {
    display: flex;
    justify-content: center;
    margin-top: 43px;
    position: relative;
    .blockImg {
      width: 14px;
      height: 14px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      .ic_plus {
        width: 10px;
        height: 10px;
      }
    }
    .ic_money {
      width: 22px;
      height: 22px;
      object-fit: contain;
      opacity: 0.5;
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      width: 173px;
      height: 50px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.15);
      border: none;
      outline: none;
      font-family: Lato;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.4px;
      color: #fff;
      padding: 0px 40px 0 25px;
      text-align: center;
    }
  }
`;
const InfoUser = styled.div`
  width: 100%;
  height: 47.5%;
`;
export default class InfoChat extends Component {

  state = {
    numberInput : ''

  }

  format_num =(e)=>{
    let numberConvert = e.target.value;
    console.log(numberConvert);
    return numberConvert.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g)
    
    // this.setState({
    //   [e.target.name]:numberConvert
    // })
  }
  render() {
    return (
      <InfoChatContainer>
        <InfoTransfer>
          <div className="titleTransfer">
            <h4>DRAG MONEY TO SEND</h4>
            <img src={ic_wee} alt="asd" />
          </div>
          <div className="moneyTransfer">
            <div className="blockImg">
              <img className="ic_plus" src={ic_plus} alt="asd" />
            </div>
            <input type="phone" name="numberInput" value={this.state.numberInput}
            id='idnumber'
           onKeyPress={(e)=>this.format_num(e)}
            />
            <img className="ic_money" src={ic_money} alt="asd" />
          </div>
        </InfoTransfer>
        <div className="taskLinear1" />
        <div className="taskLinear2" />
        <InfoUser />
      </InfoChatContainer>
    );
  }
}
