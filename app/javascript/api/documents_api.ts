import Api from './api'

export default {
  index:        (searchParams) => Api.get('documents', { search: searchParams }),
  show:         (id) => Api.get(`documents/${id}`, {}),
}
