<template>
  <common-card title="Today users" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>Return rate:</span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          // boundaryGap: false, // remove gap
          data: this.orderUserTrendAxis,
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
            data: this.orderUserTrend,
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
