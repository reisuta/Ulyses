<template></template>

<script>
export default {
  name: "DocumentShow",
  data: () => {},
  created() {},
  methods: {
    loadDocument() {
      DocumentsApi.show();
    },
  },
};
</script>
