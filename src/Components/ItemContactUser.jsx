import React, { Component } from "react";
import styled from "styled-components";

const ItemUser = styled.div`
  width: 330px;
  height: 80px;
  border-radius: 5px;
  margin: 13px auto;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  position: relative;
  cursor: pointer;
  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    padding: 15px;
    object-fit: cover;
  }
  .StatusOval {
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15%;
    left: 4%;
    .oval {
      width: 9px;
      height: 9px;
      background-color: #34d859;
      border-radius: 50%;
    }
  }
  .content {
    h4 {
      padding-top: 15px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.38;
      color: #001654;
    }
    p {
      font-family: "Roboto Light";
      font-size: 12px;
      font-weight: 300;
      line-height: 1.83;
      color: #181c2f;
    }
  }
  .time {
    opacity: 0.7;
    font-family: "Roboto Light";
    font-size: 12px;
    color: #001654;
    position: absolute;
    right: 14px;
    top: 21px;
  }
`;
export default class ItemContactUser extends Component {
  render() {
      const {data, index, dataUpdate} = this.props;
    return (
      <ItemUser 
      onClick={()=>this.props.callBackDataContact(index)}
      style = {{
        backgroundImage: data.name=== dataUpdate.name ? 'linear-gradient(76deg, #f98153, #f45112) ': ''
      }}
      >
      
        <img src={data.img} alt="" />
        <div className="StatusOval"    style={{
                    backgroundColor: data.name === dataUpdate.name
                        ? "#F87B4B"
                        : "#fff",
                
                }} >
          <div className="oval"  style= {{backgroundColor: data.isOnline === true ? '#34d859': '#d0d4da'}}/>
        </div>
        <div className="content">
          <h4 style={{color: data.name === dataUpdate.name ?'#fff' :''}}>{data.name}</h4>
          <p style={{color: data.name === dataUpdate.name ?'#fff' :'#000' , opacity:.7}}>{data.content}</p>
        </div>
        <p className="time" style={{color: data.name === dataUpdate.name ?'#fff' :'#000',  opacity:.5}}>{data.time}</p>
      </ItemUser>
    );
  }
}
