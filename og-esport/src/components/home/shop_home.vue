<template>
  <div class="shop_home xl:container px-1 ">
    <h3 class="text-white font-semibold text-xl tracking-[.3rem] my-6 hover:text-white/90 uppercase px-4 sm:px-6 md:px-8 lg:px-10"><a href="#">Our Official Shop</a></h3>

        <div class="mx-auto grid xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-4   gap-4 xl:gap-6  lg:gap-y-2 place-items-center  px-4 sm:px-6 md:px-8 lg:px-10 items-baseline  ">
          <a class="shop-card flex flex-col  text-white items-start   " v-for="(item,index) in Shop_items" :key="index" href="https://google.com">
            <img :src="item.img" alt=""  class="rounded-xl  max-w-80 sm:max-w-full md:max-w-[21rem]  lg:max-w-full">
            <p class="text-base tracking-[.2rem] py-1 max-w-[20rem]  ">{{ item.title }}</p>
            <span>{{ item.price  }}</span>
          </a>

    </div>

  </div>
</template>

<script setup>
import item1 from '../../assets/img/shop/hat.webp'
import item2 from '../../assets/img/shop/cap.webp'
import item3 from '../../assets/img/shop/curve_cap.webp'
import item4 from '../../assets/img/shop/baseball_tShirt.webp'

import { ref } from 'vue'

const Shop_items = ref([
  {
    img: item1,
    title: 'OG X NEW ERA BEANIE',
    price:'€ 30,00 EUR'
  },
    {
    img: item2,
    title: 'OG X NEW ERA 9FIFTY SNAPBACK CAP    ',
    price:'€ 30,00 EUR'
  },
    {
    img: item3,
    title: 'OG X NEW ERA 9FORTY CAP',
    price:'€ 30,00 EUR'
  },
    {
    img: item4,
      title: 'OG X NEW ERA BASEBALL TEE',
    price:'€ 30,00 EUR'
  },

])

</script>
<style scoped>

</style>
