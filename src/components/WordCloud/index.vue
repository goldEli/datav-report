<template>
  <ve-wordcloud :data="chartData" height="100%"></ve-wordcloud>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: [],
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,.7)',
          'rgba(204,178,26,.7)',
          'rgba(245,166,35,.7)',
          'rgba(156,13,113,.7)',
        ],
      },
    }
  },
  watch: {
    wordCloud() {
      this.chartData.rows = this.wordCloud
    },
  },
}
</script>