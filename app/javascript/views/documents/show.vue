<template>
  <div>
    <v-col>
      <v-text-field
        v-model="document.title"
        label="文書タイトル"
        class="mt-2 mb-3"
	:disabled="!editmode"
      />
      <v-textarea
        v-model="document.body"
        label="本文"
        class="mb-3"
        auto-grow
	:disabled="!editmode"
      />
      <v-select 
	v-model="document.category"
	:items="items" 
	label="Category" 
	:disabled="!editmode"
	/>
    </v-col>
    <v-col>
	    <v-select :status="status" label="文書タイプ" :disabled="!editmode" />
    </v-col>
    <v-btn  class="ml-3 mr-2" color="primary" @click="editmode=true">編集</v-btn>
    <v-btn @click="editmode=false">キャンセル</v-btn>
  </div>
</template>

<script>
import DocumentsApi from "@api/documents_api";
export default {
  name: "DocumentShow",
  data: () => ({
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
      });
    },
	  editDocument(){
		  this.editmode = true
		  console.log('jel')

	  }
  },
};
</script>
