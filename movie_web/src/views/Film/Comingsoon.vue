<template>
  <div>
    <ul>
      <li
        v-for="data in comingListGetter"
        :key="data.id"
        @click="handleChangePage(data.preShow, data.id)"
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
import { mapGetters } from "vuex";
import { MessageBox } from "mint-ui";
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
  computed: {
    ...mapGetters(["comingListGetter"]),
  },
  methods: {
    handleChangePage(preShow, id) {
      if (!preShow) {
        MessageBox({
          title: "提示",
          message: "此檔電影沒有排期",
          showCancelButton: true,
        }).then((action) => {
          if (action === "confirm") {
            this.$router.push(`/film/comingsoon`);
          }
        });
      } else {
      }
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