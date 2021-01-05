<template>
  <common-card title="Total users" value="1,087,503">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <div class="compare-wrapper">
        <div class="compare">
          <span>Day-on-day:</span>
          <span class="emphasis">7%</span>
          <div class="increase-icon"></div>
        </div>
        <div class="compare month">
          <span>Month-on-Month:</span>
          <span class="emphasis">8.73%</span>
          <div class="decrease-icon"></div>
        </div>
      </div>
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
          type: 'value',
          show: false,
          // boundaryGap: false, // remove gap
          min: 0,
          max: 450,
        },
        yAxis: {
          type: 'category',
          show: false,
        },
        series: [
          {
            itemStyle: {
              color: '#45c946',
            },
            stack: '1',
            type: 'bar',
            data: [200],
            barWidth: '10px',
          },
          {
            itemStyle: {
              color: '#eee',
            },
            stack: '1',
            type: 'bar',
            data: [250],
            barWidth: '10px',
          },
          {
            type: 'custom',
            itemStyle: {
              color: '#45c946',
            },
            stack: '1',
            data: [200],
            renderItem: (parms, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M981.33333301 128l-938.66666602 0L512 938.666667',
                      x: -10,
                      y: -30,
                      width: 20,
                      height: 20,
                      layout: 'center',
                    },
                    style: {
                      fill: '#45c946',
                    },
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M42.666667 896h938.666666L512 85.333333',
                      x: -10,
                      y: 10,
                      width: 20,
                      height: 20,
                      layout: 'center',
                    },
                    style: {
                      fill: '#45c946',
                    },
                  },
                ],
              }
            },
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
.compare-wrapper {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  .month {
    margin-left: 8px;
  }
  .compare {
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>