<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">Keyword Search</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{ userCount | format }}</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{ searchCount | format }}</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group
                v-model="radioSelect"
                size="small"
                @change="onCategoryChange"
              >
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
// const colors = [
//   '#8d7fec',
//   '#5085f2',
//   '#f8726b',
//   '#e7e702',
//   '#78f283',
//   '#4bc1fc',
// ]

export default {
  data() {
    return {
      searchUserOption: {},
      searchNumberOption: {},
      tableData: [
        { rank: 1, keyword: '123', count: 3000, users: 3234, range: '20%' },
        { rank: 2, keyword: '123', count: 3000, users: 3234, range: '20%' },
        { rank: 3, keyword: '123', count: 3000, users: 3234, range: '20%' },
        { rank: 4, keyword: '123', count: 3000, users: 3234, range: '20%' },
      ],
      totalData: [],
      total: 0,
      pageSize: 4,
      userCount: 0,
      searchCount: 0,
      radioSelect: '品类',
      categoryOptions: {},
    }
  },
  methods: {
    onCategoryChange(type) {
      this.radioSelect = type
      // this.renderPieChart()
    },
    onPageChange(page) {
      // this.renderTable(page)
    },
    renderPieChart() {
      // let axis = ['eli', 'susie', 'jack']
      const chartData = [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' },
      ]
      this.categoryOptions = {
        title: [
          {
            text: `${this.radioSelect}分布`,
            textStyle: {
              fontSize: 14,
              color: '#666',
            },
            left: 20,
            top: 20,
          },
          {
            text: '累计订单量',
            subtext: '1000',
            x: '34.5%',
            y: '42.5%',
            textStyle: {
              fontSize: 14,
              color: '#999',
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333',
            },
            textAlign: 'center',
          },
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: chartData,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function (params) {
                  return params.data.name
                },
              },
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true,
              },
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff',
            },
          },
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c',
          },
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        // tooltip: {
        //   trigger: 'item',
        //   formatter: function (params) {
        //     const str =
        //       params.seriesName +
        //       '<br />' +
        //       params.marker +
        //       params.data.legendname +
        //       '<br />' +
        //       '数量：' +
        //       params.data.value +
        //       '<br />' +
        //       '占比：' +
        //       params.data.percent +
        //       '%'
        //     return str
        //   },
        // },
      }
    },
    renderTable(page) {
      this.tableData = this.totalData.slice(
        (page - 1) * this.pageSize,
        (page - 1) * this.pageSize + this.pageSize
      )
    },
    renderLineChart() {
      const createOption = (key) => {
        const data = [123, 234, 465]
        // const axis = [1, 2, 3]
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: axis,
          },
          yAxis: {
            show: false,
          },
          tooltip: {},
          series: [
            {
              type: 'line',
              data,
              areaStyle: {
                color: 'rgba(95,187,255,.5)',
              },
              lineStyle: {
                color: 'rgb(95,187,255)',
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
            bottom: 0,
            right: 0,
          },
        }
      }
      this.searchUserOption = createOption('user')
      this.searchNumberOption = createOption('count')
    },
  },
  mounted() {
    this.renderLineChart()
    this.renderPieChart()
  },
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>

