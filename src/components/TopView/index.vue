<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover"> <total-sales/> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-orders /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <today-users /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-users /> </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalUsers from '../TotalUsers'
import TotalOrders from '../TotalOrders'
import TodayUsers from '../TodayUsers'
export default {
  components: {
    TotalSales,
    TotalUsers,
    TotalOrders,
    TodayUsers
  },
}
</script>

<style lang="scss" scoped>
</style>