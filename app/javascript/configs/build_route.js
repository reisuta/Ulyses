export default function BuildRoute(path, title, page, meta) {
  return {
    path,
    name:      page.name,
    component: page,
    meta:      {
      title, ...meta,
    },
  }
}
