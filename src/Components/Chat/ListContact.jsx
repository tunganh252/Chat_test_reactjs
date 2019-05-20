import React, { Component } from "react";
import styled from "styled-components";
import ItemContactUser from './ItemContactUser'

import ic_search from "./../../Assets/images/ic_search.svg";
import ic_arrow from "./../../Assets/images/ic-arrow-back.svg";
import ic_plus from "./../../Assets/images/ic_plus.svg";

const ListContactContainer = styled.div`
  width: 360px;
  min-width:360px;
  height: 100%;
  overflow:hidden;

  .BlockSearch {
    padding: 17px 20px;
    position: relative;
    display: flex;
    .inputSearch {
      width: 320px;
      height: 40px;
      border-radius: 24px;
      background-color: #eff1f5;
      border: none;
      padding-left: 52px;
      outline:none
    }
    img {
      position: absolute;
      width: 16px;
      height: 16px;
      opacity: 0.5;
      top: 50%;
      transform: translateY(-50%);
      left: 10%;
    }
    p {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.5;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #001654;
      left: 20%;
    }
  }
  .BlockTitle {
    display: flex;
    .column1,
    .column2 {
      display: flex;
      align-items: center;
    }
    .column1 {
      margin-left: 17px;
      h4 {
        opacity: 0.3;
        font-family: "Roboto Light";
        font-size: 12px;
        line-height: 1.17;
        color: #181c2f;
      }
      p {
        font-family: Roboto;
        margin-left: 11px;
        font-size: 12px;
        line-height: 1.17;
        color: #001654;
      }
      img {
        width: 9px;
        height: 7.5px;
        object-fit: contain;
        margin-left: 5px;
        margin-top: 4px;
      }
    }
    .column2 {
      margin-left: 115px;

      p {
        font-family: Roboto;
        font-size: 12px;
        font-weight: 300;
        line-height: 1.17;
        text-align: right;
        color: #001654;
      }
      img {
        width: 11px;
        height: 11px;
        padding: 10px;
        border-radius: 50%;
        margin-left: 10px;
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);
        background-image: linear-gradient(28deg, #f98153, #f45112);
      }
    }
  }
  .listUser{
    margin-top: 34px;
  }
  .listContactUser{
    overflow: scroll;
    height: 78%;
  }
  /* Custom Scroll */
  .listContactUser::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .listContactUser::-webkit-scrollbar {
    background-color: transparent;
  }

  .listContactUser::-webkit-scrollbar-thumb {
    background-image: transparent;
  }
`;


export default class ListContact extends Component {

  render() {
  const  { listContact,callBackDataContact, dataUpdate} = this.props
    return (
      <ListContactContainer>
        <div className="BlockSearch">
          <input className="inputSearch" placeholder="Search" />
          <img src={ic_search} alt="abc" />
        </div>
        <div className="BlockTitle">
          <div className="column1">
            <h4>Sort by:</h4>
            <p>Latest</p>
            <img src={ic_arrow} alt="" />
          </div>
          <div className="column2">
            <p>New Message</p>
            <img src={ic_plus} alt="aad" />
          </div>
        </div>
        <div className="listUser">
        </div>
        {/* {this.renderItemContactUser()} */}
        <div className='listContactUser'>

        {listContact.map((item,index) => {
          return (
            <ItemContactUser
            callBackDataContact={callBackDataContact}
            key={index} 
            data={item}
            index={index}
            dataUpdate={dataUpdate}
            
            />)
          })}
          </div>
      </ListContactContainer>
    );
  }
}
