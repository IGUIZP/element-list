<template>
  <div class="item-validate">
    <slot :validate="validate"></slot>
    <span class="error-msg">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'rules'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      const validate = this.rules.reduce((pre, cur) => {
        const status = pre && cur && cur.test && cur.test(this.value)
        this.errMsg = status ? '' : cur.message
        return status
      }, true)
      return validate
    }
  }
}
</script>

<style lang="scss" scoped>
.item-validate {
  margin-bottom: 10px;
}
.error-msg {
  color: red;
  display: block;
}
</style>
