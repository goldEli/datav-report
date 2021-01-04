<template>
  <common-card title="Total sales" value="$3000">
    <template>
      <div class="compare"></div>
    </template>
    <template v-slot:footer>
      <div>
        <span>Yesterday's sales: </span>
        <span class="money">$3200</span>
      </div>
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
.compare {
  height: 100%;
  background-color: red;
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>