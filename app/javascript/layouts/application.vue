<template>
  <v-app>
    <div>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title><router-link :to="`/`">文書一覧</router-link></v-toolbar-title>
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
  </v-app>
</template>
    


<script>
export default {
  data() {
    return {};
  },

  created() {},
};
</script>

