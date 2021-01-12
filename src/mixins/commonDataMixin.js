export default {
  computed: {
    reportData() {
      return this.getReportData()
    },
    mapData() {
      return this.getMapData()
    },
    wordCloud() {
      return this.getWordCloud()
    },
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
}
