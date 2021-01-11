<template>
  <v-chart :options="options" />
</template>
<script>
import 'echarts/extension/bmap/bmap'
export default {
  data() {
    return {
      options: {},
    }
  },
  methodName(params) {
    this.options = {
      bmap: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {},
      },
    }
  },
}
</script>
