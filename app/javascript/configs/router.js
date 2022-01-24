import Qs from 'qs'
import VueRouter from 'vue-router'
import routes from './routes'

export default new VueRouter({
  mode:       'history',
  routes,
  parseQuery: (query) => Qs.parse(query, {
    arrayFormat: 'bracket',
  }),
  stringifyQuery: (params) => {
    if (Object.keys(params).length === 0) return ''
    const stringifyParams = Qs.stringify(params, {
      arrayFormat: 'bracket',
      encode:      false,
    })

    return `?${stringifyParams}`
  },
})
