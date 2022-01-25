<template>
  <div id="app">

    <v-row dense>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row dense class="mt-0">
      <v-col cols="2"> </v-col>
      <v-col cols="1" class="d-flex justify-center align-end mb-2">
        <div>documents/index.vue</div>
      </v-col>

      <v-col cols="2"> </v-col>
      <v-col cols="1" />
      <v-col cols="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
import DocumentsApi from "@api/documents_api"

export default {
  name: "DocumentIndex",
  components: {},
  data: () => ({}),
  created() {
    this.loadDocuments()
    },
  methods: {
    loadDocuments() {
      console.log('wjgew')
      DocumentsApi.index(this.$route.params.id).then((res) => {
        console.log(res)
        this.documents = res.records;
      });
    },
  },
};
</script>
