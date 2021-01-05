<template>
  <common-card title="Total orders" value="3000,238">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>Yesterday's orders: </span>
      <span class="emphasis">3200</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false, // remove gap
        },
        yAxis: {
          show: false,
          min: 0,
          max: 600,
        },
        series: [
          {
            type: 'line',
            data: [300, 123, 345, 423, 432, 333, 222, 433, 345, 435, 399, 456],
            areaStyle: {
              color: 'purple',
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
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