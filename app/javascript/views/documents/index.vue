<template>
  <v-row dense>
    <v-col cols="12">
      <TextField
        v-model="searchForm.text"
        placeholder="件名,作成者で検索できます"
        clearable
      />
    </v-col>
  </v-row>
  <v-row dense class="mt-0">
    <v-col cols="2">
      <DatePicker v-model="searchForm.created_at_from" label="作成日" />
    </v-col>
    <v-col cols="1" class="d-flex justify-center align-end mb-2">
      <div>〜</div>
    </v-col>

    <v-col cols="2">
      <DatePicker v-model="searchForm.created_at_to" label=" " />
    </v-col>
    <v-col cols="1" />
    <v-col cols="4">
      <ProjectSelect v-model="searchForm.projectId" label="プロジェクト" />
    </v-col>
  </v-row>
  <v-row dense class="mt-0">
    <v-col>
      <RadioButton
        v-model="searchForm.status"
        :values="statuses"
        radio-class="ml-3 mt-0"
        label="ステータス"
        class="d-flex"
      />
    </v-col>
  </v-row>
  <v-row dense class="mb-2">
    <v-col cols="8">
      <RadioButton
        v-model="searchForm.category"
        :values="categories"
        radio-class="ml-3 mt-0"
        label="種別"
        class="d-flex"
      />
    </v-col>
    <v-spacer />
    <v-btn large color="primary" href="/approvals/new">
      <v-icon dense class="mr-2"> fa-check </v-icon>
      稟議新規作成
    </v-btn>
  </v-row>
</template>

<script>
import {
  DatePicker,
  TextField,
  RadioButton,
  ProjectSelect,
} from "@components/forms";
import ApprovalsApi from "@api/approvals_api";
import SearchableTable from "@components/searchable_list";

export default {
  name: "ApprovalIndex",
  components: {
    DatePicker,
    SearchableTable,
    TextField,
    RadioButton,
    ProjectSelect,
  },
  data: () => ({
    searchForm: {
      text: undefined,
      created_at_from: undefined,
      created_at_to: undefined,
      status: "all",
      category: "all",
    },
    totalCount: 0,
    approvals: [],
  }),
  computed: {
    statuses: () => ({
      all: "すべて",
      temporarily_saved: "一時保存中",
      pending: "承認待ち",
      permission: "承認済み",
      disconfirm: "差し戻し",
      invalid: "取り消し",
    }),
    categories: () => ({
      all: "すべて",
      contract_relationship: "契約関係",
      new_client: "新規取引先",
      consumables: "消耗品",
      other_purchasing: "その他購買",
      other: "その他",
    }),
    headers: () => [
      { text: "件名", width: "30%", value: "name" },
      { text: "種別", width: "15%", value: "categoryI18n" },
      { text: "ステータス", width: "15%", value: "statusI18n" },
      { text: "作成者", width: "15%", value: "createdUserName" },
      { text: "作成日", width: "15%", value: "createdAt", format: "date" },
    ],
  },
  methods: {
    loadApprovals(searchForm) {
      const params = searchForm;
      if (params.category === "all") {
        params.category = "";
      }
      if (params.status === "all") {
        params.status = "";
      }
      ApprovalsApi.index(params).then((res) => {
        this.approvals = res.records;
        this.totalCount = res.pages.totalCount;
      });
    },
    rowClass(approval) {
      const classes = ["v-data-table__expand-icon"];
      switch (approval.status) {
        case "disconfirm":
          return classes.concat(["grey", "lighten-1"]);
        default:
          return classes;
      }
    },
    clickRow(approval) {
      this.$router.push({ name: "ApprovalShow", params: { id: approval.id } });
    },
  },
};
</script>
