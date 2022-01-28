import Api from './api'

export default {
  index:        (id) => Api.get('documents', {}),
  new:            (id) => Api.get('documents/new', { source: id }),
  show:         (id) => Api.get(`documents/${id}`, {}),
  create:         (documentParams) => Api.post('documents', { document: documentParams }),
  me:           () => Api.get2('sign_in', {}),
}
