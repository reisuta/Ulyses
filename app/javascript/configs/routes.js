import BuildRoute from './build_route'
import DocumentIndex from '../views/documents/index'
import DocumentShow from '../views/documents/show'
import DocumentNew from '../views/documents/new'

export default [
  BuildRoute('/', '文書一覧', DocumentIndex),
  BuildRoute('/documents/new', '文書新規作成', DocumentNew),
  BuildRoute('/documents/:id', '文書詳細画面', DocumentShow),
]
