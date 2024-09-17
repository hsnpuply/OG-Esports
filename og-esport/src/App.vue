<script setup>
import Heading from '../src/components/header.vue';
import Hero_Banner_Section from '../src/components/home/home_hero_section.vue';
import Home_main from '../src/components/home/main_home.vue';
import Footer from '../src/components/footer.vue';
import arrowUp from '../src/assets/img/icon-arrow-up.png'



import { ref, onMounted } from 'vue'


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
        <Hero_Banner_Section />
        <Home_main />
        <Footer />
        <!-- <div class="fixed bottom-16 right-8 bg-green-800 p-3 rounded-full text-2xl border-4 border-white text-white z-[100]">
            <p class="sm:hidden ">Tony</p>
            <p class="hidden sm:block md:hidden">Small</p>
            <p class="hidden md:block lg:hidden ">Medium</p>
            <p class="hidden lg:block xl:hidden  ">Large </p>
            <p class="hidden xl:block 2xl:hidden">Xl</p>
            <p class="hidden 2xl:block">2XL</p>
        </div> -->
        <div class="scroll_top flex items-center justify-center bg-navbar_bg border-2 border-primary_color2 "
            ref="scroll_top" @click="goToTop()">
            <img width="28" height="28" :src="arrowUp" class="select-none rotate-[-45deg]" />
        </div>


    </div>

</template>

<style scoped>
.scroll_top {
    position: fixed;
    bottom: 40px;
    right: -100px;
    width: 40px;
    height: 40px;
    text-align: center;
    transform: rotate(45deg);
    z-index: 1000;
    cursor: pointer;
    font-size: 1.5rem;
}

.morad {
    right: 30px;
    transition: all .7s ease-in-out;
    opacity: 1;
}

.hideScroll {
    right: -100px;
    opacity: 0;

}
</style>
