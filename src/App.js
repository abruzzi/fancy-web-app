import React, { Component } from 'react';

import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Report from './Report/Report';

const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1123;

const A4_WIDTH_IN = 8.3;
const A4_HEIGHT_IN = 11.7;

const resizeImage = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const ratio = image.width / A4_WIDTH_PX;
  canvas.width = A4_WIDTH_PX;
  canvas.height = image.height / ratio;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  return canvas;
}

class App extends Component {
  exportReport = (e) => {
    e.preventDefault();
    const report = document.querySelector('#report-container');

    html2canvas(report, {logging: false}).then((canvas) => {
      const pdf = new jsPDF('p', 'in', 'a4');

      const resized = resizeImage(canvas);
      const imageData = resized.toDataURL('image/png');

      for(var i = 0; i < resized.height / A4_HEIGHT_PX; i++) {
        pdf.addImage(imageData, 'png', 0, -(i * A4_HEIGHT_IN));
        pdf.addPage();
      }

      pdf.save('report.pdf');
    });
  }

  exportReportBackend = (e) => {
    e.preventDefault();

    window.open('http://localhost:4000/printing', '_blank');
  }

  render() {
    return (
      <Page>
        <Header>
          <div>
            <h1>Sales <span>Force</span></h1>
            <a href="#" onClick={this.exportReport}>Export to PDF</a>
            <a href="#" onClick={this.exportReportBackend}>Export to PDF by backend</a>
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
