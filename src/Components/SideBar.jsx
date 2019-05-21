import React, { Component } from "react";
import styled from "styled-components";

import logo from "./../Assets/images/logo.svg";
import user1 from "./../Assets/images/avatar.png";
import { dataMenu } from "./../Data/Data.js";
import {  Link } from "react-router-dom";


const SideBarContainer = styled.div`
  width: 18%;
  z-index: 99;
  .logo {
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d7ca7;
    img {
      width: 146px;
      height: 30px;
      object-fit: contain;
      padding: 7%;
      cursor: pointer;
    }
  }
  .user {
    width: 46%;
    height: auto;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }
  .titleUser {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 13px;
    opacity: 0.9;
    h4 {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
      margin: 0;
    }
    p {
      font-family: "Roboto light";
      font-size: 12px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
      opacity: 0.7;
      margin: 0;
      padding-top: 8px;
    }
  }
`;

const MenuSideBar = styled.div`
  margin: 50px 0 218px 0;
`;
const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ffffff61;
  cursor: pointer;
  transition: 0.4s all;
  position: relative;
  overflow: hidden;
  &:last-child {
    border-bottom: 1px solid #ffffff61;
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 100%;
    background-color: #f9890c;
    position: absolute;
    right: -10%;
    top: 0;
    transition: 0.4s all;
  }
  &:hover,
  &:active {
    background-color: #0084c2;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.15);
    &::before {
      width: 4px;
      right: 0%;
    }
    .blockImg {
      opacity: 1;
    }
    .settingText {
      opacity: 1;
    }
  }
  .blockImg {
    width: 16px;
    height: auto;
    padding: 13px;
    opacity: 0.5;
    transition: 0.4s all;
    img {
      width: 100%;
      color: #fff;
    }
  }
  .settingText {
    opacity: 0.5;
    transition: 0.4s all;
    color: #fff;
    font-family: "Roboto light";
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const ItemSpecial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-image: linear-gradient(80deg, #9000ff, #005bec);
  text-decoration:none;
  cursor: pointer;
  .blockImg {
    width: 42px;
    height: auto;
    object-fit: contain;
    img {
      width: 100%;
    }
  }
  .settingText {
    width: 154px;
    height: 14px;
    opacity: 0.8;
    font-family: "Roboto light";
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  }
`;
export default class SideBar extends Component {
  state = {
    itemMenu: dataMenu
  };
  render() {
    return (
        <SideBarContainer>
          <div className="logo">
            <div className="blockImg">
              <img src={logo} alt="logoEximbank" />
            </div>
          </div>
          <div className="user">
            <div className="blockImg">
              <img src={user1} alt="User" />
            </div>
          </div>
          <div className="titleUser">
            <h4>Nguyễn Tùng Anh</h4>
            <p>Last login at 12:02 PM - Oct 01, 2018</p>
          </div>
          <MenuSideBar>
            {this.state.itemMenu.map((item, index) => {
              if (index === 2) {
                return (
                  <ItemSpecial key={index}>
                    <div className="settingText">{item.title}</div>
                    <div className="blockImg">
                      <img src={item.ic} alt="abc" />
                    </div>
                  </ItemSpecial>
                );
              } else
                return (
                  <Link to={item.url} key={index}  style={{textDecoration:'none'}}>
                    <ItemMenu >
                      <div className="blockImg">
                        <img src={item.ic} alt="abc" />
                      </div>
                      <div className="settingText">{item.title}</div>
                    </ItemMenu>
                  </Link>
                );
            })}
          </MenuSideBar>
        </SideBarContainer>
    );
  }
}
