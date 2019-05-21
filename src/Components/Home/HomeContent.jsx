import React, { Component } from "react";
import styled from "styled-components";

import img_vnd from "./../../Assets/images/combined-shape.svg";
import img_eye from "./../../Assets/images/ic-invisible-copy.svg";
import ic_plus from "./../../Assets/images/group-7.svg";
import RightContent from "./RightContent";
import UserScroll from "./UserScroll";

const TopHomeContainer = styled.div`
  min-height: 45.35%;
  width: 100%;
  display: flex;
  .leftContent {
    width: 70%;
    height: 290px;
    .blockMoney {
      display: flex;
      .ItemInfor2 {
        margin-left: 20px;
      }
      .ItemInfor1,
      .ItemInfor2 {
        width: 47.5%;
        height: 90px;
        opacity: 0.95;
        border-radius: 5px;
        box-shadow: 0 6px 10px 0 rgba(169, 71, 0, 0.25);
        background-image: linear-gradient(65deg, #f98153, #f45112);
        .current1 {
          display: flex;
          justify-content: space-between;
          .title {
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
            margin: 15px 0 0 20px;
          }
          .img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin: 15px 18px 0 0;
            opacity: 0.8;
          }
        }
        .current2 {
          display: flex;
          justify-content: space-between;
          position: relative;
          .img {
            width: 46px;
            height: 20px;
            object-fit: contain;
            padding: 15px 0 0 20px;
          }
          .title {
            font-family: Lato;
            font-size: 26px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.3px;
            color: #ffffff;
            padding: 10px 46px 0 0;
          }
          span {
            font-family: Lato;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0.3px;
            color: #ffffff;
            position: absolute;
            right: 5%;
            bottom: 22%;
          }
        }
      }
    }
    .blockBanner {
      background-image: url(/static/media/banner1.c6ce4bbb.jpg);
      background-repeat: no-repeat, repeat;
      background-position: center center;
      background-size: cover;
      width: 97%;
      height: 170px;
      margin-top: 20px;
    }
    .MoneyTransfer {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .itemPlus {
        margin-right:5px;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }
      }
    }
  }
  .scrollY {
    display: flex;
    overflow: hidden;
    border-radius: 3px;
    margin-right: 25px;
  }
`;

export default class HomeContent extends Component {
  renderUser = () => {
    let { dataUser } = this.props;
    console.log(dataUser);

    return dataUser.map((item, index) => {
      return <UserScroll key={index} itemUser={item} />;
    });
  };

  scrollY = e => {
    if (e.deltaY < 0) {
      e.currentTarget.scrollLeft -= 30;
    } else e.currentTarget.scrollLeft += 30;
  };

  render() {
    return (
      <TopHomeContainer>
        <div className="leftContent">
          <div className="blockMoney">
            <div className="ItemInfor1">
              <div className="current1">
                <p className="title">CURRENT ACCOUNT</p>
                <img className="img" src={img_eye} alt="asd" />
              </div>
              <div className="current2">
                <img className="img" src={img_vnd} alt="asd" />
                <p className="title">12,864,000</p>
                <span>.00</span>
              </div>
            </div>
            <div className="ItemInfor2">
              <div className="current1">
                <p className="title">TERM DEPOISITS ACCOUNT</p>
                <img className="img" src={img_eye} alt="asd" />
              </div>
              <div className="current2">
                <img className="img" src={img_vnd} alt="asd" />
                <p className="title">200,000,000</p>
                <span>.00</span>
              </div>
            </div>
          </div>
          <div className="blockBanner" />
          <div className="MoneyTransfer">
            <div className="itemPlus">
              <img src={ic_plus} alt="abc" />
            </div>
            <div className="scrollY" onWheel={e => this.scrollY(e)}>
              {this.renderUser()}
            </div>
          </div>
        </div>
        <RightContent />
      </TopHomeContainer>
    );
  }
}
