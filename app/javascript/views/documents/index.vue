<template>
  <div>
    <v-row dense>
      <v-col cols="12"> </v-col>
      <ul>
        <li v-for="document in documents" :key="document.id">
        {{ document.title }}
        <br>
        {{ document.body}}
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
</template>

<script>
import DocumentsApi from "@api/documents_api"

export default {
  name: "DocumentIndex",
  components: {},
  data: () => ({
    documents: [],
  }),
  created() {
    this.loadDocuments()
    },
  methods: {
    loadDocuments() {
      DocumentsApi.index(this.$route.params.id).then((res) => {
        this.documents = res.data.records;
        console.log(this.documents)
      });
    },
  },
};
</script>
