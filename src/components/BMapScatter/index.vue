<template>
  <ve-bmap
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="chartTooltip"
    :title="title"
    height="100%"
  ></ve-bmap>
</template>

<script>
/* eslint-disable */
import { data, geo, styleJson } from './data'
const convertData = function (data, geo) {
  const res = []
  data.forEach((item) => {
    const { name, value } = item
    const coord = geo[name]
    res.push({
      name,
      value: [...coord, value],
    })
  })
  return res
}

export default {
  inject: ["getReportData"],
  data() {
    this.chartTooltip = { show: true }
    return {
      chartSettings: {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson,
          },
        },
      },
      chartTooltip: {},
      chartSeries: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(data, geo),
          encode: {
            value: 2,
          },
          itemStyle: {
            color: 'purple',
          },
          symbolSize: (val) => {
            return val[2] / 10
          },
          label: {
            show: false,
            formatter: `{b}`,
            position: 'right',
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        {
          name: 'top 10',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(
            data.sort((a, b) => b.value - a.value),
            geo
          ).slice(0, 10),
          encode: {
            value: 2,
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333',
          },
          symbolSize: (val) => {
            return val[2] / 10
          },
          label: {
            show: false,
            formatter: (v) => {
              return `${v.data.name} - ${v.data.value[2]}`
            },
            position: 'right',
          },
          hoverAnimation: true,
          emphasis: {
            label: {
              show: true,
            },
          },
          rippleEffect: {
            brushType: 'stroke',
          },
        },
      ],
      title: {
        text: '销售数据大盘',
        subtext: '销售趋势统计',
        sublink: 'https://www.baidu.com',
        left: 'center',
      },
    }
  },
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>