<script setup>
import Heading from '../src/components/header.vue';
import Hero_Banner_Section from '../src/components/home/home_hero_section.vue';
import Home_main from '../src/components/home/main_home.vue';
import Footer from '../src/components/footer.vue';

import {  ref,onMounted } from 'vue'

const scroll_top = ref('')

const scroll_show = () => {
    if (window.scrollY > 140) {
    scroll_top.value.classList.add('morad')
    scroll_top.value.classList.remove('hideScroll')
    } else {
        scroll_top.value.classList.add('hideScroll')
  }
}

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


onMounted(() => {
    window.addEventListener('scroll', scroll_show)
});


</script>

<template>
    <div class="font-titilium scroll-sm relative">
        <Heading />
        <Hero_Banner_Section/>
        <Home_main/>
        <Footer/>
        <div class="fixed bottom-16 right-8 bg-green-800 p-3 rounded-full text-2xl border-4 border-white text-white z-[100]">
            <p class="sm:hidden ">Tony</p>
            <p class="hidden sm:block md:hidden">Small</p>
            <p class="hidden md:block lg:hidden ">Medium</p>
            <p class="hidden lg:block xl:hidden  ">Large </p>
            <p class="hidden xl:block 2xl:hidden">Xl</p>
            <p class="hidden 2xl:block">2XL</p>
        </div>
        <div class="scroll_top " ref="scroll_top" @click="goToTop()">
            <p class="select-none">∟</p>
        </div>

    </div>

</template>

<style scoped>
.scroll_top{
    position: fixed;
    bottom: 30px;
    right: -100px;
    background-color: #2af;
    padding: 1rem 1.4rem;
    border-radius: 50%;
    z-index: 1000;
    cursor: pointer;
    font-size: 1.5rem;
}
.morad{
    right: 20px;
    transition: all .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.hideScroll{
    right: -100px;

}
</style>
