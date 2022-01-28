<template>
  <div>
    <router-link class="" :to="`/`">
      ホーム
    </router-link>
    <router-link class="" :to="`/login`">
      ログイン
    </router-link>
    <router-link class="" :to="`/login`">
      ユーザー名
    </router-link>
    <router-link class="" :to="`/`">
      文書一覧
    </router-link>


    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  
  created(){
  },
};
</script>

