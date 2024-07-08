<template>
  <div class=" px-8  ">
    <h3 class="text-white text-2xl tracking-wider my-6 hover:text-white/90 "><a href="#">News</a></h3>
    <div class="flex flex-wrap  gap-1 items-center justify-center">
      <div v-for="(item, index) in news_imgs" :key="index" class="flex flex-col items-center">
          <a href="#" class="relative" >
        <img :src="item.image"  alt="" class="w-96 h-72 object-cover select-none rounded-lg">
            <div class="news-info absolute left-3 bottom-6 text-white">
                  <span class="uppercase text-xs tracking-widest bg-primary_color2 py-[.1rem] rounded-lg  px-3">{{ item.tag }}</span>
                  <h4 class=" text-sm font-semibold uppercase">{{ item.title }}</h4>
                  <h5 class="text-xs  ">{{ item.date  }}</h5>
            </div>
          </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import news1 from '../../assets/img/news/1.webp'
import news2 from '../../assets/img/news/2.webp'
import news3 from '../../assets/img/news/3.jpg'
import news4 from '../../assets/img/news/4.png'
import news5 from '../../assets/img/news/5.jpg'
import news6 from '../../assets/img/news/6.jpg'

import {ref} from 'vue';
const news_imgs = ref([
  {
    image: news1,
    title: "International Women’s Day",
    tag: 'OG',
    date:'Mar 15, 2024'
  }, 
  {
    image:news2,
    title: "Introudcing OG Rocket Leauge ",
    tag:'Rocket Leauge',
    date:'Mar 15, 2024'
  },
  {
    title: "Misha's Long Road to Ti",
    image: news3,
    tag:'OG',
    date:'Aug 23, 2022'


  },
  {
    title: "OG Dota 2024",
    image:news4,
    tag:'OG',
    date:'Nov 12, 2023'


  },
  {
    title: "Player 6 “Ceb” has rejoined the lobby",
    image:news5,
    tag:'OG',
    date:'Jul 29, 2024'

  },
  {
    title: "DEGSTER MANIA HAS ARRIVED",
    image: news6,
    tag:'CS:GO',
    date:'Jul 15, 2024'


  }
])
</script>

<style scoped>
/* img {
  width: 380px;
  height: 220px;
  border-radius: 10px;
  object-fit: cover;
} */
</style>