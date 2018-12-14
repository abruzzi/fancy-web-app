import React, {PureComponent} from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import diskData from "./disk-data";

export default class TreeMap extends PureComponent {
  getOption = () => {
    var formatUtil = echarts.format;
    function getLevelOption() {
      return [{
        itemStyle: {
          normal: {
            borderWidth: 0,
            gapWidth: 5
          }
        }
      }, {
        itemStyle: {
          normal: {
            gapWidth: 1
          }
        }
      }, {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          normal: {
            gapWidth: 1,
            borderColorSaturation: 0.6
          }
        }
      }];
    }

    return {
      tooltip: {
        formatter: function (info) {
          var value = info.value;
          var treePathInfo = info.treePathInfo;
          var treePath = [];

          for (var i = 1; i < treePathInfo.length; i++) {
            treePath.push(treePathInfo[i].name);
          }

          return [
            '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
            'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
          ].join('');
        }
      },

      series: [{
        name:'Disk Usage',
        type:'treemap',
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}'
        },
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        levels: getLevelOption(),
        data: diskData
      }]
    };
  };

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{height: '500px', width: '100%'}}
        className='react_for_echarts' />
    );
  }
}