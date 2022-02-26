<template>
  <div>
    <v-alert v-if="error" border="bottom" color="pink darken-1" dark>
      {{ errorMessage }}
    </v-alert>
    <v-alert v-if="isSuccess" color="blue"> </v-alert>
    <v-row>
      <v-col cols="4" class="ml-3">
        <v-text-field
          v-model="document.title"
          label="文書タイトルを入力してください"
          class="mt-2 mb-3"
        />
      </v-col>
      <v-col cols="2">
        <v-select
          v-model="document.category"
          :items="items"
          label="Category"
        />
      </v-col>
      <!-- <v-col cols="2"> -->
      <!--   <v-select :status="status" label="文書タイプ" /> -->
      <!-- </v-col> -->
      <v-col cols="4">
        <v-row class="justify-center">
          <v-btn class="mt-6 primary" @click="createDocument">保存</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-col>
      <v-textarea
        v-model="document.body"
        label="文章を作成してください"
        class="mb-3 mx-auto"
        :style="styleObj"
        color="green"
        rows="30"
        clearable
        auto-grow
      />
    </v-col>
  </div>
</template>


<script>
import DocumentsApi from "@api/documents_api";

export default {
  name: "DocumentNew",
  data: () => ({
    styleObj: {
      color: "white",
      width: "75%",
      //backgroundColor: "#ff99ff13",
      backgroundColor: 'red',
      fontSize: "24px",
    },
    document: {},
    error: false,
    errorMessage: [],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  created() {
    this.initialDocument();
  },
  methods: {
    initialDocument() {
      DocumentsApi.new(this.$route.query.source).then((res) => {
        this.document = res.data.records;
        console.log(this.document)
      });
    },
    createDocument() {
      DocumentsApi.create(this.document)
        .then((res) => {
          this.doc = res.data.id;
          console.log(this.doc);
          this.$router.push(`/documents/${this.doc}`)
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
