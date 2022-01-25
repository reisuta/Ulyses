import Api from './api'

export default {
  // index:        (searchParams) => Api.get('documents', { search: searchParams }),
  index:        (id) => Api.get('documents', {}),
  show:         (id) => Api.get(`documents/${id}`, {}),
}
