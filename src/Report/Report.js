import React, { Component } from 'react';

import styled from 'styled-components';

import Table from './Table';
import LineChart from "./LineChart";
import ScatterChart from "./ScatterChart";

class Report extends Component {
  render() {
    return (
      <div>
        <ReportHeader>
          <div className="heading">
            Fancy Report
          </div>
          <div className="description">
            Subtitle
          </div>
        </ReportHeader>

        <FlexBox>
          <section className="fixed">
            <h3>10.5%</h3>
            <p>Interest Rate</p>
          </section>

          <section className="fixed">
            <h3>$1,204.00</h3>
            <p>Margin</p>
          </section>

          <section className="fixed">
            <h3>$339.00</h3>
            <p>Repayment</p>
          </section>

          <section className="fixed">
            <h3>20.5%</h3>
            <p>Some other Rate</p>
          </section>
        </FlexBox>

        <FlexBox>
          <section className="flex">
            <LineChart/>
          </section>
        </FlexBox>

        <FlexBox>
          <section className="flex">
            <ScatterChart/>
          </section>
        </FlexBox>

        <FlexBox>
          <section className="flex">
            <Table />
          </section>
        </FlexBox>
      </div>
    );
  }
}

const ReportHeader = styled.header`
  display: flex;
  padding: 20px 0;
  background-color: #403256;
  color: #f2f4f6;
  align-items: baseline;
  
  .heading {
    flex: 8;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 32px;
  }
  
  .description {
    flex: 2;
    text-align: right;
    padding-right: 32px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  
  section.fixed {
    width: 240px;
    background-color: #F7F7F7;
    color: darkslategrey;
    border: 1px solid #f6f6f6;
    
    h3 {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
    }
    
    p {
      text-align: center;
    }
  }
  
  section.flex {
    flex: 1;
  }
`;

export default Report;
