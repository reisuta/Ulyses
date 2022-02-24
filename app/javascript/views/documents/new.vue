<template>
  <div>
    <v-alert v-if="error" border="bottom" color="pink darken-1" dark>
      {{ errorMessage }}
    </v-alert>
    <v-col>
      <v-text-field
        v-model="document.title"
        label="文書タイトルを入力してください"
        class="mt-2 mb-3"
      />
      <v-textarea
        v-model="document.body"
        label="文章を作成してください"
        class="mb-3"
        auto-grow
      />
      <v-select v-model="document.category" :items="items" label="Category" />
    </v-col>
    <v-col>
      <v-select :status="status" label="文書タイプ" />
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
    error: false,
	  errorMessage: [],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  created() {
    this.loadDocument();
  },
  methods: {
    loadDocument() {
      DocumentsApi.new(this.$route.query.source).then((res) => {
        this.document = res.data.records;
      });
    },
    createDocument() {
      DocumentsApi.create(this.document)
        .then(() => {
          this.$router.push(`/`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>

<style>
</style>
