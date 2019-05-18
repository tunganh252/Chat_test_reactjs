import React, { Component } from "react";
import styled from "styled-components";

const InfoUserContainer = styled.div`
  width: 100%;
  height: 45%;
  .blockImg {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 18px 0 15px 0;
    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 50%;
    }
    .oval {
      width: 14px;
      height: 14px;
      background-color: #34d859;
      border: 8px solid #fff;
      position: absolute;
      top: 0;
      left: 0;
      top: 2px;
      left: 77px;
      border-radius: 50%;
    }
  }
  .name {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: center;
    color: #001654;
  }
  .userName {
    opacity: 0.5;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #001654;
    text-align: center;
  }
  .accId {
    display: flex;
    justify-content: space-between;
    margin: 18px;
    padding-bottom: 3px;
    border-bottom: 1px solid #d0d4da;
    .acc {
      opacity: 0.4;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #181c2f;
    }
    .id {
      font-family: Roboto;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #001654;
    }
  }
`;

const Media = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${props => props.margin || "10px 20px"};
    padding-bottom: ${props => props.pd_bt || "13px"};;
    border-bottom: ${props => props.border || "none"};
    .title {
      font-family: 'Roboto Light';
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #001654;
    }
    .more {
      font-family: 'Roboto Light';
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #f5581c;
    }
`

export default class InfoUser extends Component {
  render() {
    const { dataUpdate } = this.props;
    return (
      <InfoUserContainer>
        <div className="blockImg">
          <img src={dataUpdate.img} alt="asd" />
          <span className="oval" style={{
            backgroundColor: dataUpdate.isOnline === true ? ' #34d859': '#d0d4da'
          }} />
        </div>
        <h3 className="name">{dataUpdate.name}</h3>
        <p className="userName">{dataUpdate.userName}</p>
        <div className="accId">
          <p className="acc">Acc No:</p>
          <p className="id">{dataUpdate.id}</p>
        </div>
        <Media border='1px solid #d0d4da'>
          <p className="title">
            Media <span>(31)</span>
          </p>
          <p className="more">See all ></p>
        </Media>
        <Media  pd_bt='0'>
          <p className="title">
          Last transaction
          </p>
          <p className="more">See all ></p>
        </Media>
      </InfoUserContainer>
    );
  }
}
