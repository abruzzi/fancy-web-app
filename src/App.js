import React, { Component } from 'react';

import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Report from './Report/Report';

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

const resizeImage = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = A4_WIDTH;
  canvas.height = A4_HEIGHT;

  ctx.drawImage(image, 0, 0, A4_WIDTH, A4_HEIGHT);

  return canvas.toDataURL('image/png');
}

class App extends Component {
  exportReport = (e) => {
    e.preventDefault();
    const report = document.querySelector('#report-container');

    html2canvas(report).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');

      const resized = resizeImage(canvas);

      pdf.addImage(resized, 'png', 0, 0);
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

        <ReportBox>
          <div id="report-container">
            <Report />
          </div>
        </ReportBox>
      </Page>
    );
  }
}

const ReportBox = styled.div`
  width: 1000px;
  margin: 20px auto;
  box-shadow: 0 0 5px #f2f4f6;
  
  @media print {
    margin: 0 auto;
  }
`;

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
