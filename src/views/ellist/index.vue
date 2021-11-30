<template>
  <div class="ellist-wraper">
    <list-layout>
      <template slot="header">
        <el-row :gutter="20">
          <el-col :span="4">
            <span>昵称: <input type="text"></span>
          </el-col>
          <el-col :span="4">
            <span>所属科学: <input type="text"></span>
          </el-col>
          <el-col :span="4">
            <span>职位: <input type="text"></span>
          </el-col>
          <el-col :span="4">
            <span>工作年限: <input type="text"></span>
          </el-col>
          <el-col :span="4">
            <span>手机号: <input type="text"></span>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="mini">搜索</el-button>
            <el-button size="mini">重置</el-button>
          </el-col>
        </el-row>
      </template>
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
import { getTeachers } from '@/api/teacher'
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
            prop: 'nickname',
            label: '昵称'
          }, {
            prop: 'phone',
            label: '手机号'
          }, {
            prop: 'name',
            label: '真实姓名'
          }, {
            prop: 'subject',
            label: '所属学科'
          }, {
            prop: 'job',
            label: '职位'
          }, {
            prop: 'year',
            label: '工作年限'
          }, {
            prop: 'updatedAt',
            label: '录入时间'
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
    getTeachers().then(res => {
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
