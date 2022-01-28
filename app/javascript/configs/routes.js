import BuildRoute from './build_route'
import DocumentIndex from '../views/documents/index'
import DocumentNew from '../views/documents/new'

export default [
  BuildRoute('/', '文書一覧', DocumentIndex),
  BuildRoute('/documents/new', '文書', DocumentNew),
]
