import React, { Component } from "react";
import styled from "styled-components";

import ic_payment from "./../Assets/images/ic_payment1.svg";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 9%;
  justify-content: center;
  align-items: center;
  .block1 {
    flex: 2;
    margin-left: 40px;
    h4 {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.67;
      letter-spacing: normal;
      color: #fff;
      opacity: 0.7;
    }
    p {
      font-family: "Roboto Light";
      font-size: 12px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.67;
      letter-spacing: normal;
      color: #fff;
      opacity: 0.5;
    }
  }
  .block2 {
    flex: 1;
    .row1,
    .row2 {
      display: flex;
      align-items: center;
      img {
        width: 10px;
        height: 10px;
        padding: 2px;
        background-color: #fff;
        border-radius: 2px;
      }
      p {
        opacity: 0.5;
        font-family: "Roboto Light";
        font-size: 12px;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
  .block3 {
    flex: 1;
    p {
      width:200px;
      opacity: 0.5;
      font-family: 'Roboto Light';
      font-size: 12px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.67;
      letter-spacing: normal;
      text-align: right;
      color: #fff;
    }
  }
`;
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="block1">
          <h4>VIETNAM EXPORT IMPORT BANK</h4>
          <p>
            8th Floor - Vincom Center, 72 Le Thanh Ton and 45A Ly Tu Trong
            Street, District 1, HCMC
          </p>
        </div>
        <div className="block2">
          <div className="row1">
            <img src={ic_payment} alt="asdasd" />
            <p>ebanking@eximbank.com.vn</p>
          </div>
          <div className="row2">
            <img src={ic_payment} alt="as" />
            <p>1800 1199</p>
          </div>
        </div>
        <div className="block3">
          <p>Copyright © 2018 Eximbank. All Rights Reserved.</p>
        </div>
      </FooterContainer>
    );
  }
}
