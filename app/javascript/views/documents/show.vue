<template>
  <v-row>
    <v-col>
      {{ document.id }}
    </v-col>
  </v-row>
</template>

<script>
import DocumentsApi from "../../api/documents_api";
export default {
  name: "DocumentShow",
  data: () => ({
    document: null,
  }),
  created() {
    this.loadDocument();
  },
  methods: {
    loadDocument() {
      DocumentsApi.show(this.$route.params.id).then((res) => {
        this.document = res.data.records;
      });
    },
  },
};
</script>
