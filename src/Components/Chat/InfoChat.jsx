import React, { Component } from "react";
import styled from "styled-components";
import ItemUserTransfer from "./ItemUserTransfer.jsx";
import InfoUser from "./InfoUser.jsx";

import ic_wee from "./../../Assets/images/ic_wee.svg";
import ic_plus from "./../../Assets/images/ic_plus.svg";
import ic_money from "./../../Assets/images/ic_money2.svg";
import ic_search from "./../../Assets/images/ic_search.svg";

const InfoChatContainer = styled.div`
  min-width: 260px;
  height: 100%;
  overflow: hidden;
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

  .taskLinear1,
  .taskLinear2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .span1 {
      width: 28.6px;
      height: 1.4px;
      border-top: solid 0.5px#fff;
    }
    .span2 {
      width: 21.4px;
      height: 1.4px;
      opacity: 0.81;
      border-top: solid 0.5px #fff;
    }
    .span3 {
      width: 14.3px;
      height: 1.4px;
      opacity: 0.6;
      border-top: solid 0.5px #fff;
    }
  }
`;
const InfoTransfer = styled.div`
  width: 100%;
  height: 50%;
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
      &::placeholder {
        color: #fff;
      }
    }
  }
  .search {
    margin: 30px 15px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #ffffff4d;
    display: flex;
    img {
      width: 12px;
      height: 12px;
    }
    input {
      margin-left: 10px;
      width: 100%;
      margin-right: 13px;
      opacity: 0.5;
      border: none;
      outline: none;
      background-color: transparent;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
  }
`;

export default class InfoChat extends Component {
  state = {
    numberInput: "",
    value: null
  };

  changeValue = e => {
    const toNumber = Number(e.target.value.replace(/\D/g, ""));
    let toLocale = toNumber.toLocaleString();
    this.setState({
      value: toLocale
    });
  };

  render() {
    const { dataUpdate, dataUser} = this.props;
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
            <input
              type="phone"
              onChange={e => this.changeValue(e)}
              name="numberInput"
              id="idnumber"
              placeholder="200,000"
              value={this.state.value || ""}
            />
            <img className="ic_money" src={ic_money} alt="asd" />
          </div>
          <div className="search">
            <img src={ic_search} alt="asd" />
            <input type="text" placeholder="Search name" />
          </div>
          {/*  */}
          <ItemUserTransfer
          dataUser={dataUser}
          dataUpdate={dataUpdate} />
          {/*  */}
        </InfoTransfer>
        <div className="taskLinear1">
          <span className="span1" />
          <span className="span2" />
          <span className="span3" />
        </div>
        <div className="taskLinear2">
          <span className="span1" />
          <span className="span2" />
          <span className="span3" />
          <span />
        </div>
        <InfoUser dataUpdate={dataUpdate} />
      </InfoChatContainer>
    );
  }
}
