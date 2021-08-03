<template>
  <div>
    <swiper :key="looplist.length" ref="myswiper"
      ><div
        class="swiper-slide"
        v-for="(data, index) in fakeimglist"
        :key="index"
      >
        <img :src="data" />
      </div>
    </swiper>

    <filmhider :class="isfixed ? 'fixed' : ''"></filmhider>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import swiper from "@/views/Film/Swiper";
import filmhider from "@/views/Film/Filmhider";
import axios from "axios";
import Vue from "vue";

Vue.filter("kerwinpath", function (path) {
  return path.replace("w.h", "180.96");
});

export default {
  data() {
    return {
      looplist: [],
      fakeimglist: [
        "https://image.16pic.com/00/24/71/16pic_2471124_s.jpg?imageView2/0/format/png",
        "https://image.16pic.com/00/51/41/16pic_5141612_s.jpg?imageView2/0/format/png",
        "https://image.16pic.com/00/50/75/16pic_5075211_s.jpg?imageView2/0/format/png",
        "https://image.16pic.com/00/79/08/16pic_7908021_s.jpg?imageView2/0/format/png",
        "https://image.16pic.com/00/61/17/16pic_6117212_s.jpg?imageView2/0/format/pngw",
      ],
      isfixed: false,
    };
  },
  components: {
    swiper,
    filmhider,
  },

  mounted() {
    axios.get("/ajax/movieOnInfoList?token=").then((res) => {
      // console.log(res.data);
      this.looplist = res.data.movieList;
    });

    window.onscroll = this.handleScroll;
  },
  beforeDestry() {
    window.onscroll = null;
  },
  methods: {
    handleScroll() {
      // console.log(this.$refs.myswiper);
      if (
        document.documentElement.scrollTop >=
        this.$refs.myswiper.$el.offsetHeight
      ) {
        this.isfixed = true;
      } else {
        this.isfixed = false;
      }
    },
  },
};
</script>

<style  scoped>
div img {
  width: 100%;
  height: 250px;
}
.fixed {
  position: sticky;
  top: -1px;
  left: 0px;
  height: 40px;
  width: 100%;
  padding-top: 8px;

  background: white;
}
</style>

