<template>
  <div>
    <div class="swiper-container filmswiper">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { Swiper, SwiperSlide } from "swiper";

import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  mounted() {
    // console.log("swiper-mounted");
    new Swiper(".filmswiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
    });
  },
};
</script>
<style scoped>
.swiper-wrapper img {
  width: 100%;
}
</style>