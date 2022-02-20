<template>
  <!-- <SearchableTable -->
  <!--   :search-form="searchForm" -->
  <!--   :headers="headers" -->
  <!--   :items="approvals" -->
  <!--   :total-count="totalCount" -->
  <!--   :item-class="rowClass" -->
  <!--   @click-row="clickRow" -->
  <!--   @update-form="loadDocuments" -->
  <!-- > -->  
  <div>
    <v-row dense>
      <v-col cols="12"> </v-col>
      <v-data-table
        :headers="headers"
        :items="documents"
        />
      <ul>
        <li v-for="document in documents" :key="document.id">
        {{ document.title }}
        <br>
        {{ document.body}}
	<br>
	{{ document.category }}
        </li>
      </ul>
    </v-row>
    <v-row dense class="mt-0">
        <div>documents/index.vue</div>
    </v-row>
    <v-row dense>
      <router-link :to="`/documents/new`" >
        文書作成
      </router-link>
    </v-row>
  </div>
  <!-- </SearchableTable> -->
</template>

<script>
  import DocumentsApi from "@api/documents_api"
  //import SearchableTable from '@components/search_list'

  export default {
    name:       'DocumentIndex',
    //components: {
     // DatePicker, SearchableTable, TextField, RadioButton, ProjectSelect,
    //},
    data:       () => ({
      searchForm: {
        text:            undefined,
        created_at_from: undefined,
        created_at_to:   undefined,
        status:          'all',
        category:        'all',
      },
      totalCount: 0,
      approvals:   [],
    }),
    computed: {
      statuses: () => ({
        all:               'すべて',
        temporarily_saved: '一時保存中',
        pending:           '承認待ち',
        permission:        '承認済み',
        disconfirm:        '差し戻し',
        invalid:           '取り消し',
      }),
      categories: () => ({
        all:                   'すべて',
        contract_relationship: '契約関係',
        new_client:            '新規取引先',
        consumables:           '消耗品',
        other_purchasing:      'その他購買',
        other:                 'その他',
      }),
      headers: () => ([
        { text: '件名', width: '30%', value: 'name' },
        { text: '種別', width: '15%', value: 'categoryI18n' },
        { text: 'ステータス', width: '15%', value: 'statusI18n' },
        { text: '作成者', width: '15%', value: 'createdUserName' },
        { text: '作成日', width: '15%', value: 'createdAt', format: 'date' },
      ]),
    },
    created() {
      this.loadDocuments()
    },
    methods: {
      loadDocuments() {
        DocumentsApi.index(this.$route.params.id).then((res) => {
          this.documents = res.data.records;
          console.log(this.documents.title)
        });
      },
    },
  }
</script>
