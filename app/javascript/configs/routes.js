import BuildRoute from './build_route'
import DocumentIndex from '../views/documents/index'

export default [
  BuildRoute('/', '文書一覧', DocumentIndex),
]
