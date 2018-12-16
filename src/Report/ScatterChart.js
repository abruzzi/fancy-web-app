import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

function data () {
  var d = [];
  var len = 500;
  var value;
  while (len--) {
    value = (Math.random() * 100).toFixed(2) - 0;
    d.push([
      (Math.random() * value + value).toFixed(2) - 0,
      (Math.random() * value).toFixed(2) - 0,
      value
    ]);
  }
  return d;
}

class ScatterChart extends PureComponent {
  getOption = () => {
    return {
      xAxis: [
        {
          type: 'value',
          scale: true
        }
      ],
      yAxis: [
        {
          type: 'value',
          position: 'right',
          scale: true
        }
      ],
      animation: false,
      series: [
        {
          name: 'scatter1',
          type: 'scatter',
          symbolSize: 5,
          data: data()
        }
      ]
    };
  };

  render() {
    return (
      <ChartContainer>
        <h3>Scatter chart</h3>
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

export default ScatterChart;