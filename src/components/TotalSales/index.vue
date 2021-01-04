<template>
  <common-card title="Total sales" value="$3000">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>Day-on-day:</span>
          <span class="emphasis">7%</span>
          <div class="increase-icon"></div>
        </div>
        <div class="compare">
          <span>Month-on-Month:</span>
          <span class="emphasis">38.75%</span>
          <div class="decrease-icon"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>Yesterday's sales: </span>
      <span class="emphasis">$3200</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
}
</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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