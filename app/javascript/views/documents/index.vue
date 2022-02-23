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
                <v-btn outlined rounded color="blue" text> 詳細へ </v-btn>
              </router-link>
              <v-btn icon v-on:click.prevent="showDetail">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
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
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
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
    },
    showDetail() {
      console.log("jgl");
    },
  },
};
</script>
