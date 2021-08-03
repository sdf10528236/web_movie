<template>
  <div>
    <div class="shadowbox">
      <img
        :src="datalist.img | detailkerwinpath"
        style="float: left; margin: 20px 20px 0px 20px"
      />
      <h3 style="padding: 10px">片名:{{ datalist.nm }}</h3>
      <h4>上映日期:{{ datalist.rt }}</h4>
      <h4>主演:{{ datalist.star }}</h4>
      <h4>類型:{{ datalist.cat }}</h4>
    </div>
    <div class="photobox">
      <h2>劇照</h2>
      <swiper :key="datalist.length">
        <div
          class="swiper-slide"
          v-for="(data, index) in datalist.photos"
          :key="index"
        >
          <img :src="data | photokerwinpath" />
        </div>
      </swiper>
    </div>
    <div class="infobox">
      <div style="margin-bottom: 10px">
        <h2 style="text-align: left">劇情</h2>
      </div>
      <div>
        <h4>{{ datalist.dra }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import Vue from "vue";
import swiper from "./Detail/DetailSwiper.vue";

Vue.filter("detailkerwinpath", function (path) {
  if (!path) {
    return "";
  }
  return path.replace("w.h", "96.135");
});

Vue.filter("photokerwinpath", function (path) {
  if (!path) {
    return "";
  }

  return path.replace("w.h", "96.135");
});

export default {
  data() {
    return {
      id: "",
      color: "",
      datalist: [],
    };
  },
  components: {
    swiper,
  },
  beforeMount() {
    this.$store.commit("HideTabbar", false); //第一個參數就是mutation的名字
    window.onscroll = null;
  },
  mounted() {
    // console.log(this.$route);
    // this.id = this.$route.params.id;
    axios
      .get("/api/mtrade/mmdb/movie/v5/" + this.$route.params.id + ".json")
      .then((res) => {
        // console.log(res.data.data);
        this.datalist = res.data.data.movie;
      });
  },
  beforeDestroy() {
    this.$store.commit("ShowTabbar", true); //第一個參數就是mutation的名字
  },
};
</script>

<style scoped>
.shadowbox {
  width: 100%;
  background: rgb(204, 204, 204);
  padding: 0px 0px 60px 0px;
}
.photobox {
  width: 100%;
  text-align: left;
  padding: 20px 20px;
  display: block;
  background: rgb(255, 255, 255);
}
.infobox {
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  margin: 0px 0px 80px 0px;
  display: block;
  background: rgb(255, 255, 255);
}
</style>
