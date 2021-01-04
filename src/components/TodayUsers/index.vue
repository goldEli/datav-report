<template>
  <common-card title="Today users" value="200">
    <template>
      <div
        id="today-users-chart"
        :style="{ height: '100%', height: '100%' }"
      ></div>
    </template>
    <template v-slot:footer>
      <span>Return rate: </span>
      <span class="emphasis">2%</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' })
    const data = [300, 123, 345, 423, 432, 333, 222, 433, 345, 435, 399, 456]
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        // boundaryGap: false, // remove gap
        data: data.map((_, idx) => `${idx}:00`),
      },
      yAxis: {
        show: false,
        min: 0,
        max: 600,
      },
      series: [
        {
          color: ['#3398DB'],
          type: 'bar',
          data,
          barWidth: '60%',
        },
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    })
  },
}
</script>
<style lang="scss" scoped>
</style>
