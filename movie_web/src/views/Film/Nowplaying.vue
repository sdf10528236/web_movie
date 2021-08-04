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
import { Indicator } from "mint-ui";

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
      isshow: true,
    };
  },
  computed: {
    ...mapState(["NowplayinList", "NowplayinIdList", "NowplayinListTotal"]),
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

    loadMore() {
      this.loading = true;
      console.log(this.NowplayinListTotal);
      this.idnum = this.NowplayinList.length;
      console.log(this.idnum);
      if (this.idnum + 10 > this.NowplayinListTotal) {
        if (this.idnum === this.NowplayinListTotal) {
          console.log("數據加載完成....");
        } else {
          this.listid = this.$store.state.NowplayinListId.slice(
            this.idnum,
            this.NowplayinListTotal
          );

          for (var i = 0; i < this.listid.length; i++) {
            if (i === 0) {
              this.idaddress += this.listid.__ob__.value[i];
            } else {
              this.idaddress += "%2C" + this.listid.__ob__.value[i];
            }
          }

          Indicator.open({
            text: "加载中...",
            spinnerType: "fading-circle",
          });

          setTimeout(() => {
            axios
              .get(
                "/ajax/moreComingList?token=&movieIds=" +
                  this.idaddress +
                  "&optimus_uuid=05803E70EEA411EBBD813B357E278EC0B683A183E55A4125B0F58D5CEDEA0485&optimus_risk_level=71&optimus_code=10"
              )
              .then((res) => {
                console.log(res.data.coming);
                this.$store.commit(
                  "NowplayinListMutation",
                  this.NowplayinList.concat(res.data.coming)
                );
                console.log(this.NowplayinList);
                Indicator.close();
              });
            this.loading = false;
            this.idaddress = "";
          }, 2000);
        }
      } else {
        this.listid = this.$store.state.NowplayinListId.slice(
          this.idnum,
          this.idnum + 10
        );
        console.log(this.listid);
        for (var i = 0; i < this.listid.length; i++) {
          if (i === 0) {
            this.idaddress += this.listid.__ob__.value[i];
          } else {
            this.idaddress += "%2C" + this.listid.__ob__.value[i];
          }
        }

        console.log(this.idaddress);
        console.log("到底了");

        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle",
        });

        setTimeout(() => {
          axios
            .get(
              "/ajax/moreComingList?token=&movieIds=" +
                this.idaddress +
                "&optimus_uuid=05803E70EEA411EBBD813B357E278EC0B683A183E55A4125B0F58D5CEDEA0485&optimus_risk_level=71&optimus_code=10"
            )
            .then((res) => {
              console.log(res.data.coming);
              this.$store.commit(
                "NowplayinListMutation",
                this.NowplayinList.concat(res.data.coming)
              );
              console.log(this.NowplayinList);
              Indicator.close();
            });
          this.loading = false;
          this.idaddress = "";
        }, 2500);
      }
    },
  },
};
</script>

<style scoped>
ul {
  padding-bottom: 50px;
}
ul li {
  overflow: hidden;
  padding: 10px;
}
ul li img {
  float: left;
}
</style>