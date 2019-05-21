import React, { Component } from "react";
import styled from "styled-components";

const TableUserContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 220px;
  border-radius: 5px;
  background-color: #005c90;
  overflow:auto;

  /* Custom Scroll content */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(121deg, #00a1e4, #005d98);
    border-radius: 5px;
    /* background-color: transparent */
  }
  #customers {
    border-spacing: 0;
    overflow:auto;
    th {
      width: 5%;
      font-family: Roboto;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
      padding: 10px 20px;
    }
    .thead {
      background-color: #1aa4e5;
    }
    .tbody {
      opacity: 0.6;
      td {
        font-family: "Roboto light";
        font-size: 14px;
        font-style: normal;
        font-stretch: normal;
        line-height: 2.89;
        letter-spacing: normal;
        color: #ffffff;
      }
    }
  }
`;

export default class TableUser extends Component {
  render() {
    return (
      <TableUserContainer>
        <table id="customers">
          <thead className="thead">
            <tr>
              <th>DATE</th>
              <th>TYPE</th>
              <th>DETAILS</th>
              <th>DEPOSITS</th>
              <th>WITHDRAWALS</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          </table>
        <table id="customers">
          {/* <thead className="thead">
            <tr>
              <th>DATE</th>
              <th>TYPE</th>
              <th>DETAILS</th>
              <th>DEPOSITS</th>
              <th>WITHDRAWALS</th>
              <th>BALANCE</th>
            </tr>
          </thead> */}
          <tbody className="tbody">
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
            <tr>
              <th>30 Sep 2018</th>
              <th>Money Transfer</th>
              <th>Phone number: 0987654321</th>
              <th>10,000,000</th>
              <th>200,000</th>
              <th>12,453,000</th>
            </tr>
          </tbody>
        </table>
      </TableUserContainer>
    );
  }
}
