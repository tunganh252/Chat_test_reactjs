import React, { Component } from "react";
import styled from "styled-components";

import img_send from "./../Assets/images/ic_send.svg";
import img_clip from "./../Assets/images/ic_clip.svg";
import img_smile from "./../Assets/images/ic_smile.svg";

const ListChatContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  .statusUser {
    width: 100%;
    height: 12%;
    display: flex;
    position: relative;
    box-shadow: inset 0 -0.5px 0 0 #d0d4da;
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
      top: 15px;
      left: 10px;
      .oval {
        width: 8px;
        height: 8px;
        background-color: #34d859;
        border-radius: 50%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      h4 {
        font-family: Roboto;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.22;
        color: #001654;
        margin-top: 17px;
      }
      .content_status {
        display: flex;
        justify-content: center;
        align-items: center;
        .nickName,
        .statusOnline {
          opacity: 0.5;
          font-family: "Roboto Light";
          font-size: 12px;
          font-weight: 300;
          line-height: 1.83;
          color: #001654;
        }
        .ovalOnline {
          width: 4px;
          height: 4px;
          background-color: #001654;
          margin: 0 10px;
          border-radius: 50%;
        }
      }
    }
    .settings {
      display: flex;
      position: absolute;
      right: 42px;
      top: 20px;
      cursor: pointer;
      div {
        width: 5px;
        height: 5px;
        opacity: 0.3;
        background-color: #292f4c;
        margin-left: 3.3px;
        border-radius: 50%;
      }
    }
  }
  .contentChat {
    width: 98%;
    height: 77%;
    overflow: scroll;
    box-shadow: inset 0.5px 0 0 0 #d0d4da;
    .rowMessenger {
      display: flex;
      flex-direction: row-reverse;
      .messenger {
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        justify-content: flex-end;
        .text_mess {
          border-radius: 12px;
          background-color: #008bcc;
          font-family: "Roboto Light";
          font-size: 14px;
          line-height: 1.29;
          opacity: 0.9;
          padding: 15px 30px;
          color: #fff;
          width: fit-content;
          box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
          margin: 23px 40px 6px 0;
        }
        .time_mess {
          text-align: right;
          opacity: 0.5;
          font-family: "Roboto Light";
          font-size: 10px;
          font-weight: 300;
          line-height: 1.2;
          color: #001654;
          margin-right: 45px;
        }
      }
    }
  }
  .sendBox {
    width: 100%;
    height: 11%;
    box-shadow: 0 -8px 30px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    input {
      width: 70%;
      height: 66%;
      border-radius: 24px;
      border: none;
      padding: 0 17% 0 10%;
      background-color: #eff1f5;
      outline: none;
    }
    .button {
      cursor: pointer;
      position: absolute;
      right: 2%;
      .blockImg {
        width: 52px;
        height: 52px;
        border-radius: 26px;
        background-image: linear-gradient(28deg, #f98153, #f45112);
        display: flex;
        justify-content: center;
        align-items: center;
        .img_send {
          width: 23.3px;
          height: 21.2px;
        }
      }
    }
    .img_clip {
      width: 22px;
      height: 20px;
      opacity: 0.2;
      position: absolute;
      left: 4%;
    }
    .img_smile {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 13%;
    }
  }
  /* Custom Scroll content Chat */
  #customScroll::-webkit-scrollbar-track {
    background-color: transparent;
  }

  #customScroll::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  #customScroll::-webkit-scrollbar-thumb {
    background-image: linear-gradient(76deg, #f98153, #f45112);
    border-radius: 5px;
    /* background-color: transparent */
  }
`;
export default class ListChat extends Component {
  state = {
    tmp: ""
  };
  onClear = () => {
    this.setState({
      tmp: ""
    });
  };

  onEnter = e => {
    if (this.state.tmp === "") {
      alert("Bạn chưa nhập tin nhắn !!!");
    } else if (e.keyCode === 13) {
      this.onSendMess();
    }
  };
  onSendMess = () => {
    this.onClear();
    this.props.callBackMessenger(this.state.tmp);
  };
  renderListChat = () => {
    console.log(this.props.listChat);

    return this.props.listChat.map((item, index) => {
      return (
        <div key={index} className="rowMessenger">
          <div className="messenger">
            <p className="text_mess">{item.content}</p>
            <p className="time_mess"> {item.timeSend}</p>
          </div>
        </div>
      );
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  callBackMessenger = () => {
    if (this.state.tmp === "") {
      alert("Bạn chưa nhập tin nhắn !!!");
    } else this.props.callBackMessenger(this.state.tmp);

    this.setState({
      tmp: ""
    });
  };

  render() {
    const { dataUpdate } = this.props;
    return (
      <ListChatContainer>
        <div className="statusUser">
          <img src={dataUpdate.img} alt="asd" />
          <div className="StatusOval">
            <div
              className="oval"
              style={{
                backgroundColor:
                  dataUpdate.isOnline === true ? "#34d859" : "#d0d4da"
              }}
            />
          </div>
          <div className="content">
            <h4>{dataUpdate.name}</h4>
            <div className="content_status">
              <p className="nickName">{dataUpdate.userName}</p>
              <div
                className="ovalOnline"
                style={{
                  backgroundColor:
                    dataUpdate.isOnline === true ? "#34d859" : "#d0d4da"
                }}
              />
              <p className="statusOnline">{dataUpdate.timeActive}</p>
            </div>
          </div>
          <div className="settings">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="contentChat" id="customScroll">
          {this.renderListChat()}
        </div>
        <div className="sendBox">
          {/* xử lý handleChange */}
          <input
            name="tmp"
            type="text"
            value={this.state.tmp}
            placeholder="Type something..."
            onKeyUp={e => this.onEnter(e)}
            onChange={e => this.handleChange(e)}
          />
          <div className="button" onClick={() => this.callBackMessenger()}>
            <div className="blockImg">
              <img className="img_send" src={img_send} alt="asd" />
            </div>
          </div>
          <img className="img_clip" src={img_clip} alt="as" />
          <img className="img_smile" src={img_smile} alt="as" />
        </div>
      </ListChatContainer>
    );
  }
}
