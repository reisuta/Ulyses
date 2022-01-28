<template>
  <div>
    <v-row dense>
      <v-col cols="12"> </v-col>
      <p>Message is: {{ documents }}</p>
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
        this.documents = res.data.records[0].title;
      });
    },
  },
};
</script>
