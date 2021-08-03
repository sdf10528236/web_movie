<template>
  <div>
    <tabbar v-show="istabbarshow"></tabbar>

    <!--路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import navbar from "./components/Navbar.vue";
import sidebar from "./components/Sidebar.vue";
import tabbar from "./components/Tabbar.vue";
import { mapState } from "vuex";
// import axios from "axios";

import Vue from "vue";
Vue.component("navbar", navbar);
Vue.component("sidebar", sidebar);

var i = 0;
export default {
  data() {
    return {
      datalist: [],
      isshow: false,
    };
  },
  mounted() {
    // axios.get("/ajax/movieOnInfoList?token=").then((res) => {
    //   console.log(res.data);
    // });
  },
  methods: {
    handleclick() {
      this.datalist.push({ text: this.$refs.mytext.value, id: i });
      i++;
    },
  },
  computed: {
    ...mapState(["istabbarshow"]),
  },
  components: {
    tabbar,
  },
};
</script>
<style >
* {
  margin: 0px;
  padding: 0px;
}
html {
  height: 100%;
}
</style>
