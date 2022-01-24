/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosResponse } from 'axios'

import Qs from 'qs'
import { csrfToken } from '@rails/ujs'
import Toastr from 'toastr'
// import convetToFormData from '../utils/convet_to_form_data'
// import convertSnakeCase from '../utils/convert_to_snake_case'

const headers = {
  ContentType:        'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN':     csrfToken(),
}
const baseURL = process.env.API_PREFIX ? `/api/${process.env.API_PREFIX}` : '/api'
const paramsSerializer = (params) => Qs.stringify(convertSnakeCase(params), {
  arrayFormat: 'brackets',
  encode:      false,
})
const api = Axios.create({
  headers,
  responseType: 'json',
  baseURL,
  paramsSerializer,
})

api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.message) {
      Toastr.success(response.data.message)
    }
    return response.data
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = '/login'
        break
      case 422:
        if (error.response.data.message) {
          Toastr.error(error.response.data.message)
        }
        break
      case 404:
        Toastr.error('ページは存在しません。')
        break
      case 500:
        Toastr.error('サーバー内部でエラーが発生しました。')
        break
      default:
    }
    return Promise.reject(error)
  },
)

export default {
  baseURL,
  paramsSerializer,
  get:       (url: string, params: any): Promise<AxiosResponse<any>> => api.get(url, { params }),
  post:      (url: string, params: any): Promise<AxiosResponse<any>> => api.post(url, convetToFormData(params)),
  patch:     (url: string, params: any): Promise<AxiosResponse<any>> => api.patch(url, convetToFormData(params)),
  destroy:   (url: string, params: any): Promise<AxiosResponse<any>> => api.delete(url, params),
  resources: (...prefixes: (string|number)[]): any => {
    const prefix = [].concat(...prefixes).join('/')
    return (...suffix: string[]): string => `/${prefix}/${suffix.join('/')}`
  },
}
