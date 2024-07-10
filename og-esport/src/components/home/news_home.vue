<template>
  <div class=" xl:container px-1">
    <h3 class="text-white text-2xl tracking-wider my-6 hover:text-white/90 px-4 sm:px-6 md:px-8 lg:px-10  "><a href="#">News</a></h3>
    <div class="news-content sm:!grid-cols-3   px-4 sm:px-6 md:px-8 lg:px-10  ">
      <div v-for="(item, index) in news_imgs" :key="index" class=" w-full h-48 lg:h-56 xl:h-64 p-5 relative  bg-cover bg-center" :class="item.image">
          <a href="#" class="" >
            <!-- w-96 h-72 -->
            <div class="news-info absolute left-3 bottom-6 text-white  ">
                  <span class="uppercase text-xs tracking-widest bg-primary_color2 py-[.1rem] rounded-lg  px-3">{{ item.tag }}</span>
                  <h4 class=" text-sm font-bold uppercase">{{ item.title }}</h4>
                  <h5 class="text-xs  ">{{ item.date  }}</h5>
            </div>
          </a>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue';
const news_imgs = ref([
  {
    image: 'bg-bg-news-1',
    title: "OG Esports and PARI Forge Exciting New Partnership",
    tag: 'OG',
    date:'Jul 09, 2024'
  }, 
  {
    image:'bg-bg-news-2',
    title: "Introudcing OG Rocket Leauge ",
    tag:'Rocket Leauge',
    date:'Mar 15, 2024'
  },
  {
    title: "Misha's Long Road to Ti",
    image: 'bg-bg-news-3',
    tag:'OG',
    date:'Aug 23, 2022'


  },
  {
    title: "OG Dota 2024",
    image:'bg-bg-news-4',
    tag:'OG',
    date:'Nov 12, 2023'


  },
  {
    title: "Player 6 “Ceb” has rejoined the lobby",
    image:'bg-bg-news-5',
    tag:'OG',
    date:'Jul 29, 2024'

  },
  {
    title: "DEGSTER MANIA HAS ARRIVED",
    image: 'bg-bg-news-6',
    tag:'CS:GO',
    date:'Jul 15, 2024'


  }
])
</script>

<style scoped>
.news-content{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  place-items: center;
  row-gap: 10px;
  column-gap: 10px;
}
</style>