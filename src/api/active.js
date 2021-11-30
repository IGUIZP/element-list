import request from '@/utils/request'

export function getActives() {
  return request({
    url: '/vue-element-admin/active/list',
    method: 'get'
  })
}

export function createActive(params) {
  return request({
    url: '/vue-element-admin/active/create',
    method: 'post',
    data: params
  })
}

