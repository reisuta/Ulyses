<template>
  <div>
    <v-col>
      <v-text-field
        v-model="document.title"
        label="タイトルを入力してください"
      />
      <v-textarea 
        v-model="document.body"
        label="文章を作成してください"
        auto-grow
        />
      <v-select
        :items="items"
        label="Category"
      />
    </v-col>
    <v-btn @click="createDocument">作成</v-btn>
  </div>
</template>

<script>
import DocumentsApi from "@api/documents_api";

export default {
  name: "DocumentNew",
  data: () => ({
    document: {},
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
  created(){
    this.loadDocument()
  },
  methods: {
    loadDocument() {
      DocumentsApi.new(this.$route.query.source).then(
        (res) => {
          this.document = res.data.records
          console.log(this.document)
        });
    },
    createDocument() {
      console.log(this.document)
      DocumentsApi.create(this.document)
        .then(() => this.$router.push(`/`))
        },
    },
  }
</script>

<style>
</style>
