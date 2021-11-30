const actives = []
module.exports = [
  {
    url: '/vue-element-admin/active/list',
    type: 'get',
    response: () => {
      console.log(actives)
      return {
        code: 20000,
        data: actives
      }
    }
  },
  {
    url: '/vue-element-admin/active/create',
    type: 'post',
    response: (req) => {
      console.log(req.body)
      actives.push(req.body)
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
