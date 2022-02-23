<template>
  <div>
    <v-row dense>
      <v-col cols="6" class="mx-3 mt-3 text-h5">
        {{ nav }}
        <router-link :to="`/documents/new`"
          ><v-btn> 文書作成 </v-btn></router-link
        >
      </v-col>
    </v-row>
    <v-row dense>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
      <v-col cols="4" v-for="document in documents" :key="document.id">
        <v-card class="mt-4 mb-2" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4"></div>
              <v-list-item-title class="text-h4">
                {{ document.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-h6">{{
                document.body
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
	  <router-link :to="`/documents/${document.id}`" >
            <v-btn outlined rounded color="blue" text>
              詳細へ
            </v-btn>
	  </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense class="mt-0"> </v-row>
  </div>
  <!-- </SearchableTable> -->
</template>

<script>
<<<<<<< HEAD
import DocumentsApi from "@api/documents_api";

export default {
  name: "DocumentIndex",
  components: {},
  data: () => ({
    documents: [],
    nav: "",
  }),
  created() {
    this.loadDocuments();
  },
  methods: {
    loadDocuments() {
      DocumentsApi.index(this.$route.params.id).then((res) => {
        this.documents = res.data.records;
        this.nav = this.$route.meta.title + "ページ(googledoc の一覧参考)";
      });
=======
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
>>>>>>> 64561301c2a9d7d6fc4b2a0d0b830b1d1dddf124
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
