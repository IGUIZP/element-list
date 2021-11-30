<template>
  <div class="ellist-wraper">
    <list-layout>
      <template slot="header" />
      <template slot="content">
        <lb-table
          :column="formData.columns"
          :data="formData.list"
          :pagination="true"
        />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getActives } from '@/api/active'
import listLayout from '@/components/ListLayout'
import lbTable from '@/components/lb-table/lb-table.vue'
export default {
  components: {
    listLayout,
    lbTable
  },
  data() {
    return {
      formData: {
        columns: [
          {
            prop: 'name',
            label: '活动名称'
          }, {
            prop: 'region',
            label: '活动区域'
          }, {
            prop: 'date1',
            label: '活动时间'
          }, {
            prop: 'delivery',
            label: '即时配送'
          }, {
            prop: 'type',
            label: '活动性质'
          }, {
            prop: 'resource',
            label: '特殊资源'
          }, {
            prop: 'desc',
            label: '活动形式'
          }, {
            prop: 'actions',
            label: '操作',
            render: () => (
              <div>
                <a>详情</a>
                <span>|</span>
                <a>编辑</a>
                <span>|</span>
                <a>删除</a>
              </div>
            )
          }
        ],
        list: []
      }
    }
  },
  created() {
    getActives().then(res => {
      console.log(res)
      this.formData.list = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.ellist-wraper {
  margin: 30px 20px;
  .header input {
    height: 28px;
    line-height: 28px;
  }
}
</style>
