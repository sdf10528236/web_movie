<template>
  <div>
    <ul>
      <li v-for="data in this.$store.state.ComingList" :key="data.id">
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
  mounted() {
    if (this.$store.state.ComingList.length === 0) {
      this.$store.dispatch("getCominListAction");
    } else {
      console.log("使用緩存數據");
    }
  },
  computed: {},
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