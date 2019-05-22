import React, { Component } from "react";
import styled from "styled-components";

const TableUserContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 210px;
  /* overflow: auto; */
  border-radius: 5px;
  background-color: #005c90;
  #tableHead {
    border-spacing: 0;
    width: 100%;
    border-radius: 5px;
    .tagHead {
      background-color: #1aa4e5;
      th {
        width: 2%;
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
    }
  }

  .bodyTable {
    overflow: auto;
    width: 99.75%;
    height: 175px;
    #customers {
      border-radius: 5px;
      border-spacing: 0;
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
        border-bottom: 1px solid #ffffff1c;
      }
      .thead {
        background-color: #1aa4e5;
      }
      .tbody {
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
    /* Custom Scroll content */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 4px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #003f66;
      border-radius: 5px;
      /* background-color: transparent */
    }
  }
`;

export default class TableUser extends Component {
  render() {
    return (
      <TableUserContainer>
        <table id="tableHead">
          <thead className="tagHead">
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
        <div className="bodyTable">
          <table id="customers">
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
        </div>
      </TableUserContainer>
    );
  }
}
