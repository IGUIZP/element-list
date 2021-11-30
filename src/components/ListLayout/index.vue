<template>
  <div class="list-wrapper">
    <div class="conditon">
      <slot name="header" />
    </div>
    <div class="list-box">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListLayout'
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .conditon {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    line-height: 40px;
  }
  .list-box {
    width: 100%;
  }
}
</style>
