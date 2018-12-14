import React, { Component } from 'react';

import styled from 'styled-components';

import Report from './Report';

class App extends Component {
  render() {
    return (
      <Page>
        <Header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quos recusandae sed sit! Accusamus adipisci corporis dolorem doloremque dolores doloribus, ducimus est fugiat labore laborum molestiae, numquam repudiandae sed voluptas?
          </div>
        </Header>
        <Report />
      </Page>
    );
  }
}

const Header = styled.div`
  background-color: #222;
  color: whitesmoke;
  
  div {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
  }
`;

const Page = styled.div`

`;

export default App;
