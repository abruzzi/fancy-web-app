import React, { Component } from 'react';

import styled from 'styled-components';

import Report from './Report/Report';

class App extends Component {
  render() {
    return (
      <Page>
        <Header>
          <div>
            <h1>Sales <span>Force</span></h1>
          </div>
        </Header>
        <Report />
      </Page>
    );
  }
}

const Header = styled.div`
  background-color: #323232;
  color: whitesmoke;
  
  @media print {
    display: none;
  }
  
  div {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    
    h1 {
    font-size: 32px;
    padding: 0;
    margin: 0;
    
      span {
        font-style: italic;
      }
    }
  }
`;

const Page = styled.div`

`;

export default App;
