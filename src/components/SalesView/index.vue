<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: 0 }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            @select="onMenuSelect"
            :default-active="activeIndex"
            mode="horizontal"
            class="sales-view-menu"
          >
            <el-menu-item index="1">sales</el-menu-item>
            <el-menu-item index="2">visits</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group size="small" v-model="radioSelect">
              <el-radio-button label="Today" />
              <el-radio-button label="Week" />
              <el-radio-button label="Month" />
              <el-radio-button label="Year" />
            </el-radio-group>
            <el-date-picker
              v-model="date"
              type="daterange"
              start-placeholder="start"
              end-placeholder="end"
              size="small"
              class="sales-view-date-picker"
              unlink-panels
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOptions" />
          <div class="sales-view-list">
            <div class="sales-view-list-title">Ranking</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
function onSetDate(picker, number) {
  const start = new Date()
  const end = new Date()
  start.setTime(start.getTime() - 3600 * 24 * 1000 * number)
  picker.$emit('pick', [start, end])
}
export default {
  data() {
    return {
      activeIndex: '1',
      radioSelect: 'Today',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: 'last week',
            onClick(picker) {
              onSetDate(picker, 7)
            },
          },
          {
            text: 'last month',
            onClick(picker) {
              onSetDate(picker, 30)
            },
          },
          {
            text: 'last three months',
            onClick(picker) {
              onSetDate(picker, 30 * 3)
            },
          },
        ],
      },
      chartOptions: {
        title: {
          text: 'Sales',
          textStyle: {
            fontSize: 12,
            color: '#666',
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#999',
            },
          },
          axisLabel: {
            color: '#333',
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee',
            },
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [123, 345, 234, 123, 345, 567, 345, 234, 123, 345, 234, 234],
          },
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      },
      rankData: [
        {
          no: 1,
          name: 'McDonald\'s',
          money: '323,234',
        },
        {
          no: 2,
          name: 'KFC',
          money: '323,234',
        },
        {
          no: 3,
          name: 'Dex',
          money: '323,234',
        },
        {
          no: 4,
          name: 'Pizza Hut',
          money: '323,234',
        },
      ],
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      width: 70%;
      height: 100%;
      flex: 0, 0, 70%;
    }
  }
  .sales-view-list {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .sales-view-list-title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }
    .list-item-wrapper {
      margin-top: 15px;

      .list-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;

        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;

          &.top-no {
            background: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }

        .list-item-name {
          margin-left: 10px;
          color: #333;
        }

        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
