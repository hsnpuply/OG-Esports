<template>
  <div class="home_background relative bg-primary_background py-8 flex flex-col gap-7 ">
        <Partners/>
        <News_home/>
        <Shop_home />
        <Story_home />
  </div>
</template>

<script setup>
import Partners from '../home/partners.vue'
import News_home from '../home/news_home.vue'
import Shop_home from '../home/shop_home.vue'
import Story_home from '../home/story_home.vue'
</script>
