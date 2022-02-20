<template>
  <div>
    <form>
      <slot name="form" />
    </form>
    <div class="text-right">
      {{ startCount }}〜{{ endCount }}件 (全{{ totalCount }}件)
    </div>
    <div @click="clickRow">
      <v-data-table
        :items="items"
        :headers="fixedHeaders"
        hide-default-footer
        :server-items-length="perPage"
        disable-pagination
        :item-class="itemClass"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        @click:row="clickRowItem = $event"
      >
        <template v-for="header in headers" #[`item.${header.value}`]="{ item }">
          <slot v-if="$scopedSlots[`item.${header.value}`]" :name="`item.${header.value}`" :item="item" />
          <template v-else>
            {{ formatedText(item, header) }}
          </template>
        </template>
      </v-data-table>
      <v-pagination v-if="totalPages !== 1" v-model="page" :length="totalPages" total-visible="7" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref, watch, PropType } from '@vue/composition-api'
  import { debounce, snakeCase, camelCase, isEqual } from 'lodash'
  import I18n from '@utils/i18n'
  import Formatter from '../utils/formatter'

  export class Header {
    text: string
    value: string
    width: string
    align: string
    disabled: boolean

    constructor(props) { Object.assign(this, props) }
  }

  export interface SearchForm {
    sortOrders: string[],
    sortKeys: string[],
  }

  interface Props {
    searchForm: SearchForm,
    items: [],
    headers: Header[],
    totalCount: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    itemClass: any,
    perPage: number,
    modelName: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    linkUrl: any,
  }

  export default defineComponent<Props>({
    props: {
      searchForm: { type: Object as PropType<SearchForm>, required: true },
      items:      { type: Array, required: true },
      headers:    { type: Array as PropType<Header[]>, required: true },
      totalCount: { type: Number, required: true },
      itemClass:  { type: Function, default: () => 'clickable' },
      perPage:    { type: Number, default: 25 },
      modelName:  { type: String, default: '' },
      linkUrl:    { type: Function, default: null },
    },
    setup(props: Props, { emit, root }) {
      const sortOrders = props.searchForm.sortOrders || []
      const sortKeys = props.searchForm.sortKeys || []
      const page = ref(parseInt(props.searchForm.page, 10) || 1)
      const sortBy = ref(root.$route.query.sortBy || [])
      const sortDesc = ref(root.$route.query.sortDesc || [])

      sortOrders.forEach((order) => sortDesc.value.push(order === 'desc'))
      sortKeys.forEach((key) => sortBy.value.push(camelCase(key)))

      const queryParams = computed(() => ({
        ...props.searchForm,
        page:       page.value,
        sortKeys:   sortBy.value.map((key) => snakeCase(key)),
        sortOrders: sortDesc.value.map((desc) => (desc ? 'desc' : 'asc')),
      }))

      emit('update-form', queryParams.value)

      let creating = true
      const clickRowItem = ref(null)

      root.$nextTick(() => creating = false)

      const totalPages = computed(() => Math.ceil(props.totalCount / props.perPage))
      const startCount = computed(() => props.perPage * (page.value - 1) + 1)
      const endCount = computed(() => Math.min(props.perPage * page.value, props.totalCount))

      const updateForm = debounce(
        () => {
          if (!isEqual(queryParams.value, root.$router.currentRoute.query.search)) {
            root.$router.push({ name: root.$route.name, query: { search: queryParams.value } })
          }
          emit('update-form', queryParams.value)
        },
        300,
      )
      const onUpdateParams = () => {
        if (creating) return
        updateForm()
      }
      const resetPage = () => {
        page.value = 1
        updateForm()
      }
      const formatedText = (item, header) => Formatter(
        item[header.value],
        header.format,
        { modelName: props.modelName, attrName: header.value },
      )
      watch(props.searchForm, () => resetPage(), { deep: true })
      watch(queryParams, () => onUpdateParams(), { deep: true })

      const fixedHeaders = props.headers.map((header) => {
        if (!props.modelName) return header
        const fixedHeader = { ...header }
        fixedHeader.text ||= I18n.$attrName(header.value, props.modelName)
        return fixedHeader
      })
      const clickRow = (event) => {
        if (!clickRowItem.value) { return }
        if (!props.linkUrl) {
          emit('click-row', clickRowItem.value, event, root.$router)
          return
        }

        const link = props.linkUrl(clickRowItem.value)

        if (event.metaKey) {
          window.open(link, '_blank')
        } else if (root.$router && root.$router.matcher.match(link).name) {
          root.$router.push(link)
        } else {
          window.location = link
        }

        clickRowItem.value = null
      }
      return {
        page,
        sortBy,
        clickRow,
        sortDesc,
        totalPages,
        startCount,
        endCount,
        onUpdateParams,
        resetPage,
        formatedText,
        clickRowItem,
        fixedHeaders,
      }
    },
  })
</script>
