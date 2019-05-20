import React, { Component } from 'react'
import styled from 'styled-components'
import ListChat from './ListChat'
import ListContact from './../Chat/ListContact'
import InfoChat from './../Chat/InfoChat'
import { listContact } from '../../Data/Data';



const MainChatContainer = styled.div`
  width:100%;
  height:84% ;
  display: flex;
  background-color:#fff;
`
export default class MainChat extends Component {

  listContact = {
    dataContact: listContact,
}


state = {
    listContact:this.listContact.dataContact[0],
    listChat:this.listContact.dataContact[0]
    // listChat:this.state.listContact.listChat[0]
}

callBackDataContact = (index)=>{
  this.setState({
      listContact:this.listContact.dataContact[index],
      listChat: this.listContact.dataContact[index]
  })
  console.log(this.state.listContact);
}

callBackMessenger = (mess) => {
  let itemObj = {
    content: mess,
    timeSend: '20:42 PM',
    type: 1
  }

  let chatUser = this.state.listChat
  chatUser.listChat.push(itemObj)
  this.setState({
    listChat: chatUser
  })
}

  render() {
    return (

        <MainChatContainer>
          <ListContact  listContact= {this.listContact.dataContact} 
             callBackDataContact = {this.callBackDataContact}
             dataUpdate ={this.state.listContact}
             />
          <ListChat
            listChat={this.state.listContact.listChat}
            dataUpdate={this.state.listContact}
            callBackMessenger={this.callBackMessenger}
            />
            <InfoChat 
            dataUpdate={this.state.listContact}
            />
        </MainChatContainer>
    )
  }
}
