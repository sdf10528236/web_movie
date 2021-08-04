<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="myactive"
        ><i class="demo-icon icon-home"></i>Home
      </router-link>
      <router-link to="/cinema" tag="li" active-class="myactive">
        <i class="demo-icon icon-basket"></i>Basket
      </router-link>
      <router-link to="/center" tag="li" active-class="myactive">
        <i class="demo-icon icon-user"></i>
        User</router-link
      >
    </ul>
  </nav>
</template>
<style  scoped>
.myactive {
  color: orange;
}
nav {
  display: block;

  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: white;
}
nav ul {
  display: flex;
  list-style-type: none;
}
nav ul li {
  flex: 1;
  line-height: 50px;
  text-align: center;
}
</style>
