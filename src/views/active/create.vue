<template>
  <div class="form-box">
    <form-solt #default="{ validate }" :value="formDate.values.name" :rules="formDate.rules.name">
      <span class="label">活动名称：</span>
      <el-input v-model="formDate.values.name" class="form-item" type="text" @blur="validate" />
    </form-solt>
    <form-solt #default="{ validate }" :value="formDate.values.region" :rules="formDate.rules.region">
      <span class="label">活动区域：</span>
      <el-select v-model="formDate.values.region" class="form-item" placeholder="请选择活动区域" @change="validate">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </form-solt>
    <form-solt>
      <span class="label">活动时间：</span>
      <div class="form-item date-form">
        <form-solt #default="{ validate }" :value="formDate.values.date1" :rules="formDate.rules.date1" class="inline-item time-left">
          <el-date-picker v-model="formDate.values.date1" class="form-item time-left" type="date" placeholder="选择日期" @change="validate" />
        </form-solt>
        <span class="line">-</span>
        <form-solt #default="{ validate }" :value="formDate.values.date2" :rules="formDate.rules.date2" class="inline-item time-right">
          <el-time-picker v-model="formDate.values.date2" class="form-item" placeholder="选择时间" @change="validate" />
        </form-solt>
      </div>
    </form-solt>
    <form-solt #default="{ validate }" :value="formDate.values.delivery" :rules="formDate.rules.delivery">
      <span class="label">即时配送：</span>
      <el-switch v-model="formDate.values.delivery" class="form-item" @change="validate" />
    </form-solt>
    <form-solt #default="{ validate }" :value="formDate.values.type" :rules="formDate.rules.type">
      <span class="label">活动性质：</span>
      <el-checkbox-group v-model="formDate.values.type" class="form-item" @change="validate">
        <el-checkbox label="美食/餐厅线上活动" name="type" />
        <el-checkbox label="地推活动" name="type" />
        <el-checkbox label="线下主题活动" name="type" />
        <el-checkbox label="单纯品牌曝光" name="type" />
      </el-checkbox-group>
    </form-solt>
    <form-solt #default="{ validate }" :value="formDate.values.resource" :rules="formDate.rules.resource">
      <span class="label">特殊资源：</span>
      <el-radio-group v-model="formDate.values.resource" class="form-item" @change="validate">
        <el-radio label="线上品牌商赞助" />
        <el-radio label="线下场地免费" />
      </el-radio-group>
    </form-solt>
    <form-solt #default="{ validate }" :value="formDate.values.desc" :rules="formDate.rules.desc">
      <span class="label">活动形式：</span>
      <el-input v-model="formDate.values.desc" class="form-item" type="text" @blur="validate" />
    </form-solt>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </div>
</template>

<script>
import FormSolt from '@/components/FormSolt'
import { createActive } from '@/api/active'
export default {
  components: {
    FormSolt
  },
  data() {
    return {
      formDate: {
        values: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {
              test: (value) => /^\w\w+/.test(value),
              message: '请输入正确的活动名称'
            }
          ],
          region: [],
          date1: [],
          date2: [],
          type: [],
          resource: [],
          delivery: [],
          desc: []
        }
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formDate)
      createActive(this.formDate.values).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box {
  margin-top: 20px;
  text-align: center;
}
.form-item {
  display: inline-block;
  width: 30%;
  text-align: left;
}
.date-form {
  text-align: left;
}
.inline-item {
  display: inline-block;
  .form-item {
    width: 100%
  }
}
.time-left {
    margin-right: 20px;
  }
.time-right {
  margin-left: 20px;
}
</style>
