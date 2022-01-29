<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>文書一覧</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link class="" :to="`/login`"> ログイン </router-link>

      <v-spacer></v-spacer>
      <router-link class="" :to="`/`"> ホーム </router-link>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view />

  </div>
</template>
    


<script>
export default {
  data() {
    return {};
  },

  created() {},
};
</script>

