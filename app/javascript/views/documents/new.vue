<template>
  <div>
    <input
      v-model="document"
      type="text"
      placeholder="本文を入力してください"
    />
    <button @click="createDocument">作成</button>
  </div>
</template>

<script>
import DocumentsApi from "@api/documents_api";

export default {
  name: "DocumentNew",
  data: () => ({
    document: "",
  }),
  methods: {
    loadDocument() {
      DocumentsApi.new(this.$route.query.source).then(
        (res) => (this.document = res)
      );
    },
    createDocument() {
      //this.errorFullMessages = [];
      DocumentsApi.create(this.document)
        .then(() => this.$router.push(`/documents`))
        //.catch((error) => {
         // this.errorFullMessages = error.response.data.errors.full_messages;
         // window.scrollTo({ top: 0 });
        },
    },
  }
</script>

<style>
</style>
