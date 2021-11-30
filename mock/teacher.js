
const teachers = [
  {
    nickname: '红中',
    phone: '16978465234',
    name: '张三丰',
    subject: '数学',
    job: '教师',
    year: 3,
    updatedAt: '2021-11-29'
  }
]

module.exports = [
  {
    url: '/vue-element-admin/teacher/list',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: teachers
      }
    }
  }
]
