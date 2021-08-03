<template>
  <div>
    center
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    if (true) {
      console.log("局部盤查");
      next();
    } else {
      next("/login");
    }
  },
};
</script>
