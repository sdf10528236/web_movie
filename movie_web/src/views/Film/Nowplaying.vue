<template>
  <div>
    <ul>
      <li
        v-for="data in this.$store.state.NowplayinList"
        :key="data.id"
        @click="handleChangePage(data.id)"
      >
        <img :src="data.img | kerwinpath" />
        <h3>{{ data.nm }}</h3>
        <p>上映日期:{{ data.rt }}</p>
        <p>主演:{{ data.star }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

import Vue from "vue";

Vue.filter("kerwinpath", function (path) {
  return path.replace("w.h", "96.135");
});

export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    if (this.$store.state.NowplayinList.length === 0) {
      this.$store.dispatch("getNowplayinListAction");
    } else {
      console.log("使用緩存數據");
    }
  },

  methods: {
    handleChangePage(id) {
      // console.log(id);
      //編程式導航-路徑跳轉
      // this.$router.push(`/detail/${id}`);
      //編程式導航-名字跳轉
      this.$router.push({ name: "kerwindtail", params: { id: id } });
    },
  },
};
</script>

<style scoped>
ul li {
  overflow: hidden;
  padding: 10px;
}
ul li img {
  float: left;
}
</style>