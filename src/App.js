import React, { Component } from 'react';

import styled from 'styled-components';

import Simple from './Simple';
import TreeMap from './TreeMap';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <ReportContainer>
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
            <h3>20.5%</h3>
            <p>Interest Rate</p>
          </section>

          <section className="fixed">
            <h3>20.5%</h3>
            <p>Interest Rate</p>
          </section>

          <section className="fixed">
            <h3>20.5%</h3>
            <p>Interest Rate</p>
          </section>

          <section className="fixed">
            <h3>20.5%</h3>
            <p>Interest Rate</p>
          </section>
        </FlexBox>

        <FlexBox>
          <section className="flex">
            <TreeMap />
          </section>
          <section className="flex">
            <Simple/>
          </section>
        </FlexBox>

        <FlexBox>
          <section className="flex">
            <Table />
          </section>
        </FlexBox>
      </ReportContainer>
    );
  }
}

const ReportContainer = styled.div`
  width: 1000px;
  margin: 20px auto;
  border: 1px solid #f2f4f6;
`;

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
  margin: 10px 0;
  
  section.fixed {
    width: 240px;
    background-color: #b51a2c;
    color: white;
    
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

export default App;
