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

import { Swiper, Autoplay } from "swiper";
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
Swiper.use([Autoplay]);

export default {
  mounted() {
    // console.log("swiper-mounted");
    new Swiper(".filmswiper", {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>