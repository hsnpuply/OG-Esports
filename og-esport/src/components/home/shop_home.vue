<template>
  <div class="shop_home px-8">
    <h3 class="text-white font-semibold text-xl tracking-[.3rem] my-6 hover:text-white/90 uppercase"><a href="#">Our Official Shop</a></h3>

        <div class="flex  gap-8 items-center justify-center flex-wrap  ">
          <div class="shop-card flex flex-col text-white items-start " v-for="(item,index) in Shop_items" :key="index">
            <img :src="item.img" alt=""  class="rounded-lg my-3">
            <p class="text-base tracking-[.2rem] py-1  ">{{ item.title }}</p>
            <span>{{ item.price  }}</span>
          </div>

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
img{
    width: 320px;
    height: 340px;
    object-fit: cover;
}
</style>
