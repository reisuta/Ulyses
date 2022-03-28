<template>
  <div>
    <v-row dense>
      <v-col cols="6" class="mt-3 pl-4 text-h5">
        {{ nav }}
      </v-col>
      <v-col cols="6" class="d-flex justify-end pr-3">
        <router-link :to="`/documents/new`"
          ><v-btn class="mt-2 primary" right> 文書作成 </v-btn></router-link
        >
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4" v-for="document in documents" :key="document.id">
        <router-link
          :to="`/documents/${document.id}`"
          style="text-decoration: none"
        >
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <!-- <v-img src="https://picsum.photos/id/180/2400/1600"></v-img> -->

            <v-card-title>{{ document.title }}</v-card-title>

            <v-card-text>
              {{ document.body }}
            </v-card-text>

            <v-card-actions>
              <router-link :to="`/documents/${document.id}`">
                <v-btn outlined rounded color="blue" text> 詳細 </v-btn>
              </router-link>
              <v-btn
                outlined
                rounded
                color="blue"
                text
                class="ml-2"
                v-on:click.prevent="isDeleteable = true"
              >
                削除
              </v-btn>
              <v-dialog v-model="isDeleteable">
                <div style="background: white; color: #222222">
                  <div>本当に削除してもよろしいですか？</div>
                  <v-btn
                    outlined
                    rounded
                    color="blue"
                    text
                    class="ml-2"
                    @click="deleteDocument(document.id)"
                  >
                    削除
                  </v-btn>
                </div>
              </v-dialog>
              <!-- <v-menu offset-y> -->
              <!--   <template v-slot:activator="{ on, attrs }"> -->
              <!--     <v-btn -->
              <!--       color="primary" -->
              <!--       dark -->
              <!--       v-bind="attrs" -->
              <!--       v-on:click.prevent="on" -->
              <!--     > -->
              <!--       Dropdown -->
              <!--     </v-btn> -->
              <!--   </template> -->
              <!--   <v-list> -->
              <!--     <v-list-item -->
              <!--       v-for="(item, index) in items" -->
              <!--       :key="index" -->
              <!--     > -->
              <!--       <v-list-item-title>{{ item.title }}</v-list-item-title> -->
              <!--     </v-list-item> -->
              <!--   </v-list> -->
              <!-- </v-menu> -->
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <v-row dense class="mt-0"> </v-row>
  </div>
</template>

<script>
import DocumentsApi from "@api/documents_api";

export default {
  name: "DocumentIndex",
  components: {},
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    documents: [],
    isShow: false,
    isDeleteable: false,
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
    },
    deleteDocument(id) {
      this.isDeleteable = true;
      DocumentsApi.destroy(id).then(() => {
        this.loadDocuments();
      });
    },
  },
};
</script>
