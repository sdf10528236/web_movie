<template>
  <div>
    <swiper :key="looplist.length" ref="myswiper"
      ><div
        class="swiper-slide"
        v-for="(data, index) in fakeimglist"
        :key="index"
      >
        <img :src="data" />
        <router-link to="/city"
          ><mt-badge
            size="normal"
            style="position: absolute; top: 20px; left: 20px; opacity: 0.4"
            color="#777"
            >地區:{{ localcity }}</mt-badge
          >
        </router-link>
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
import { mapState } from "vuex";

Vue.filter("kerwinpath", function (path) {
  return path.replace("w.h", "180.96");
});

export default {
  data() {
    return {
      looplist: [],
      fakeimglist: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      ],
      isfixed: false,
      localcity: "",
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
    this.localcity = this.City;
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
  computed: {
    ...mapState(["City"]),
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

