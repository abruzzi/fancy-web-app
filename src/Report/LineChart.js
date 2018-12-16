import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

class LineChart extends PureComponent {
  getOption = () => {
    return {
      color: ['#3C3452'],
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 432, 801, 934, 1290, 1330, 1620],
        type: 'line',
        smooth: true
      }]
    };
  };

  render() {
    return (
      <ChartContainer>
        <h3>Product distribution</h3>
        <ReactEcharts
          option={this.getOption()}
          style={{height: '350px', width: '100%'}}/>
      </ChartContainer>

    );
  }
}

const ChartContainer = styled.div`
  h3 {
    color: #333333;
    text-align: center;
  }
`;

export default LineChart;