<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" activeClass="active"
        >正在熱映</router-link
      >
      <router-link to="/film/comingsoon" tag="li" active-class="active"
        >即將登場</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myclass: this.changeclass,
    };
  },
};
</script>

<style scoped>
.active {
  color: orange;

  border-bottom: 2px solid orange;
}

ul {
  display: flex;
}
ul li {
  list-style-type: none;
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;

  background: white;
}
</style>
