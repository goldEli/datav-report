<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
import SalesView from '@/components/SalesView'
import TopView from '@/components/TopView'
import { wordcloud, mapScatter, screenData } from '../api'
export default {
  name: 'Home',
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData,
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.getMapData
    },
  },
  mounted() {
    wordcloud().then((data) => {
      this.wordCloud = data
    })
    mapScatter().then((data) => {
      this.mapData = data
    })
    screenData().then((data) => {
      this.reportData = data
    })
  },

  components: {
    BottomView,
    MapView,
    SalesView,
    TopView,
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
