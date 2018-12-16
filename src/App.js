import React, { Component } from 'react';

import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Report from './Report/Report';

class App extends Component {
  exportReport = (e) => {
    e.preventDefault();
    const report = document.querySelector('#report-container');

    html2canvas(report).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      console.log(image);

      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.addImage(image, 'png', 0, 0);
      pdf.save('report.pdf');
    });
  }

  render() {
    return (
      <Page>
        <Header>
          <div>
            <h1>Sales <span>Force</span></h1>
            <a href="#" onClick={this.exportReport}>Export to PDF</a>
          </div>
        </Header>

        <div id="report-container">
          <Report />
        </div>
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
    
    a {
      color: deeppink;
    }
  }
`;

const Page = styled.div`

`;

export default App;
