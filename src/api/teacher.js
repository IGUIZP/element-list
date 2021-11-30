import request from '@/utils/request'

export function getTeachers() {
  return request({
    url: '/vue-element-admin/teacher/list',
    method: 'get'
  })
}

