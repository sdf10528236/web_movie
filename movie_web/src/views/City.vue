<template>
  <div>
    <mt-index-list>
      <mt-index-section
        :index="data.index"
        v-for="data in datalist"
        :key="data.index"
      >
        <div
          v-for="city in data.list"
          :key="city.id"
          @click="handleClick(city.nm)"
        >
          <mt-cell :title="city.nm"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
/* eslint-disable */
import Chinalist from "@/../public/json/china.json";

export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    console.log(Chinalist.data);
    this.datalist = this.handleCity(Chinalist.data);
    console.log(this.datalist);
  },
  methods: {
    handleCity(datalist) {
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      //   console.log(letterArr);

      var newlist = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(
          (item) => item.py.substring(0, 1) === letterArr[j].toLowerCase()
        );

        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr,
          });
        }
      }
      return newlist;
    },
    handleClick(city) {
      this.$router.push(`/film`);
      this.$store.commit("CityMutation", city);
    },
  },
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
</style>
