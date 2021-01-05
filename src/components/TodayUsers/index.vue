<template>
  <common-card title="Today users" value="200">
    <template>
      <v-chart :options="getOptions()" />
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
  methods: {
    getOptions() {
      const data = [300, 123, 345, 423, 432, 333, 222, 433, 345, 435, 399, 456]
      return {
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
      }
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
