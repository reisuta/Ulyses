<template>
  <div>
    <v-col cols="12" class="mt-6 mb-1 pa-0">
      <v-text-field
        v-model="document.title"
        label="文書タイトルを入力してください"
        class="ml-6 pa-0"
        :disabled="!editmode"
      />
    </v-col>
    <v-row>
      <v-col cols="3" class="pa-0">
        <v-select
          v-model="document.category"
          label="Category"
          class="ml-6 pa-0"
          :disabled="!editmode"
        />
      </v-col>
      <!-- <v-col cols="2"> -->
      <!-- <v-select 
        :status="status" 
        label="文書タイプ" 
        class="pa-0"
        :disabled="!editmode"
        /> -->
      <!-- </v-col> -->
      <v-col cols="2" class="pa-0">
        <v-text-field
          v-model="document.created_at"
          label="作成日時"
          class="ml-6 pa-0"
          :disabled="true"
        />
      </v-col>
      <v-col cols="2" class="pa-0">
        <v-text-field
          v-model="document.updated_at"
          label="更新日時"
          class="ml-6 pa-0"
          :disabled="true"
        />
      </v-col>
      <v-col cols="3" class="pa-0">
        <v-row class="justify-center">
          <v-btn
            v-if="!editmode"
            class="mt-3 pa-0"
            color="primary"
            @click="editmode = true"
            >編集</v-btn
          >
          <v-btn
            v-if="editmode"
            class="mt-3 mr-2 pa-0"
            color="primary"
            @click="updateDocument"
            >更新</v-btn
          >
          <v-btn v-if="editmode" class="mt-3 pa-0" @click="editmode = false"
            >キャンセル</v-btn
          >
        </v-row>
      </v-col>
      <v-col cols="2" class="d-flex justify-end pa-0">
        <router-link :to="`/documents/new`"
          ><v-btn class="mr-4" fab dark color="purple">
            <v-icon dark> mdi-plus </v-icon></v-btn
          ></router-link
        >
      </v-col>
          </v-row>

    <v-col>
      <v-textarea
        v-model="document.body"
        auto-grow
        label="文章を作成してください"
        class="mb-3 mx-auto"
        outlined
        background-color="#ff99ff50"
        :style="styleObj"
        color="purple lighten-3"
        rows="30"
        clearable
        :disabled="!editmode"
      />
    </v-col>
  </div>
</template>

<style>
.v-text-field {
  width: 95%;
}
</style>
<script>
import DocumentsApi from "@api/documents_api";
import moment from 'moment';

export default {
  name: "DocumentShow",
  data: () => ({
    styleObj: {
      width: "75%",
      borderRadius: "15px",
      fontSize: "15px",
    },
    document: null,
    editmode: false,
  }),
  created() {
    this.loadDocument();
  },
  methods: {
    loadDocument() {
      DocumentsApi.show(this.$route.params.id).then((res) => {
        this.document = res.data.records;
        this.document.created_at = moment(this.document.created_at).format('YYYY年MM月DD日')
        this.document.updated_at = moment(this.document.updated_at).format('YYYY年MM月DD日')
      });
    },
    updateDocument() {
      DocumentsApi.update(this.document.id, this.document).then(() => {
        this.loadDocument();
        this.editmode = false;
      });
    },
  },
};
</script>
