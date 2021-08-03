<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <li
        v-for="data in NowplayinList"
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
import { mapState } from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.filter("kerwinpath", function (path) {
  if (!path) {
    return "";
  } else {
    return path.replace("w.h", "96.135");
  }
});

export default {
  data() {
    return {
      datalist: [],
      loading: false,
      idnum: 0,
      listid: [],
      idaddress: "",
    };
  },
  computed: {
    ...mapState(["NowplayinList", "NowplayinIdList"]),
  },
  mounted() {
    if (this.$store.state.NowplayinList.length === 0) {
      this.$store.dispatch("getNowplayinListAction");
    } else {
      console.log(this.idnum);
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

    loadMore() {
      this.loading = true;
      if (this.idnum === 0) {
        this.idnum = this.NowplayinList.length;
      }

      console.log(this.idnum);
      this;
      console.log(
        this.$store.state.NowplayinListId.slice(this.idnum + 1, this.idnum + 10)
      );
      this.listid = this.$store.state.NowplayinListId.slice(
        this.idnum + 1,
        this.idnum + 10
      );
      console.log(this.listid);
      for (var i = 0; i < this.listid.length; i++) {
        this.idaddress += this.listid.__ob__.value[i];
      }
      console.log(this.idaddress);
      console.log("到底了");
      setTimeout(() => {
        axios.get("/ajax/comingList?ci=10&token=").then((res) => {
          console.log(res.data);
        });
        this.loading = false;
      }, 2500);
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