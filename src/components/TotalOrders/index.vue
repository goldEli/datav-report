<template>
  <common-card title="Total orders" :value="salesLastDay">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>Yesterday's orders:</span>
      <span class="emphasis">{{orderLastDay}}</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions() {
      return this.orderTrend.length > 0
        ? {
            xAxis: {
              type: 'category',
              show: false,
              boundaryGap: false,
            },
            yAxis: {
              show: false,
            },
            series: [
              {
                type: 'line',
                data: this.orderTrend,
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
              bottom: 0,
              left: 0,
              right: 0,
            },
          }
        : null
    },
  },
}
</script>
<style lang="scss" scoped>
</style>