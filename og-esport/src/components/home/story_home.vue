<template>
  <div class="xl:container px-4 sm:px-6 md:px-8 lg:px-12 ">
    <h3 class="text-white text-2xl tracking-widest my-6 hover:text-white/90 "><a href="#">Our Story</a></h3>

      <swiper
    slides-per-view="1"
    :breakpoints="{ 450:{ slidesPerView:1 }, 720:{slidesPerView:2}, 1025:{ slidesPerView:3, } }"
    space-between="20"
    loop="true"
    Autoplay
   
    

  >
    <swiper-slide class="group" 
        v-for="(vid,index) in storys" :key="index"
>
<a :href="vid.link">
          <img :src="vid.img" alt="" class="story-home-pic grayscale-[50%]  ease-in group-hover:grayscale-0   w-full  border-transparent  border-2 hover:border-primary_color2  ">
         <span class=" group/hsn px-4 py-2 text-center bg-primary_color2 rounded-full absolute right-4 bottom-5 hover:scale-[1.4]  ease-out shadow-sm shadow-black group-hover:shadow-lg ">
          <svg class="group-hover/hsn:fill-white group-hover/hsn:w-[17px] group-hover/hsn:h-[28px] duration-300 ease-out hover:stroke-width-5" xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
         </span>
</a>
    </swiper-slide>
   
  </swiper>
  </div>
</template>

<script setup>

import vid1 from '../../assets/img/our story ( thumbnail videos )/1.jpg'
import vid2 from '../../assets/img/our story ( thumbnail videos )/2.jpg'
import vid3 from '../../assets/img/our story ( thumbnail videos )/3.jpg'
import vid4 from '../../assets/img/our story ( thumbnail videos )/4.jpg'
import vid5 from '../../assets/img/our story ( thumbnail videos )/5.jpg'
import vid6 from '../../assets/img/our story ( thumbnail videos )/6.png'
import vid7 from '../../assets/img/our story ( thumbnail videos )/7.png'
import vid8 from '../../assets/img/our story ( thumbnail videos )/8.png'
import vid9 from '../../assets/img/our story ( thumbnail videos )/9.png'
import vid10 from '../../assets/img/our story ( thumbnail videos )/10.png'


  import { Swiper, SwiperSlide } from 'swiper/vue';


const storys = ref([
  {
    img: vid1,
    link: 'google.com'
  },
  {
    img: vid2,
    link: 'facebook.com'
  },
  {
    img: vid3,
    link: 'twitter.com'
  },
  {
    img: vid4,
    link: 'instagram.com'
  },
  {
    img: vid5,
    link: 'youtube.com'
  },
  {
    img: vid6,
    link: 'linkedin.com'
  },
  {
    img: vid7,
    link: 'pinterest.com'
  },
  {
    img: vid8,
    link: 'reddit.com'
  },
  {
    img: vid9,
    link: 'tumblr.com'
  },
  {
    img: vid10,
    link: 'flickr.com'
  }
])
import { ref } from 'vue'
</script>
<style scoped>
.story-home-pic{
  transition: border .32s ease-in-out;

}


</style>