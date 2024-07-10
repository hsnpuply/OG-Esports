<template>

    <header class="px-2  font-titilium text-4xl text-center 
       bg-navbar_bg duration-300 ease-in
        relative  bg-bg-top-navbar sm:bg-none  sm:hover:bg-navbar_bg
        sm:fixed sm:top-0 sm:left-0 sm:w-full
        lg:py-3
    z-20 
   
    " ref="headerx" >
     <div class="top-nav flex  items-end justify-between py-2 px-2  md:px-10 lg:container">
       <div class="left-side md:flex md:items-center md:gap-4">
        <!-- Logo -->
        <div class="logo ">
            <a href="#">
            <img :src="logoPic" alt="" class=" max-w-[44px] absolute top-[9px] md:static   left-14">
            </a>
        </div>

        <!-- Desktop Main Menu -->
         <div class="main-menu hidden lg:block ">
              <nav >
  <ul class="uppercase tracking-wider flex items-center text-xs gap-7 justify-center w-full py-4 text-white ">
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">Home</a></li>
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">News</a></li>
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">Teams</a></li>
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">About</a></li>
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">Partners</a></li>
<li class="w-full relative   text-center max-w-64 bg-red-900"><a href="#" class="">Contact us</a></li>
  </ul>
</nav>
         </div>
       </div>


        <div class="right-side flex items-center gap-5 ">
            
         <div class="official-shop flex items-center relative">
            <a href="#" class=" uppercase text-sm
             text-white hover:text-primary_color2  font-semibold 
              hover:bg-transparent border-2 border-primary_color2 py-3 px-[.45rem] tracking-[.14rem] ">
              OG OFFICIAL SHOP</a>
         </div>

          <div class="lg:hidden hamberger-menu    flex items-center  text-xl  px-2 py-1  text-white  "@click="toggleMenu()"  ref="hamberger_menu_icon">
            <button class="" >
              ☰
               <!-- X -->
            </button>
          </div>
        </div>
     </div>

    </header>
    <!-- HamberGerMenu Mobile -->
    <div class="hamberger-menu-list  z-[1000]  fixed top-[75px]  lg:hidden w-full text-white text-xs bg-hamberger-menu pt-3 sm:pt-8 md:pt-8" v-if="menu_active">
<nav>
  <ul class="uppercase tracking-wider flex items-center flex-col gap-7 justify-center w-full py-4">
<li class="w-full relative   text-center"><a href="#" class="">Home</a></li>
<li class="w-full relative   text-center"><a href="#" class="">News</a></li>
<li class="w-full relative   text-center"><a href="#" class="">Teams</a></li>
<li class="w-full relative   text-center"><a href="#" class="">About</a></li>
<li class="w-full relative   text-center"><a href="#" class="">Partners</a></li>
<li class="w-full relative   text-center"><a href="#" class="">Contact us</a></li>
  </ul>
</nav>
    </div>

</template>

<script setup>
import {onMounted, ref } from 'vue'
import logoPic from '../assets/img/og_logo_2020.png'
const menu_active = ref(false);
const hamberger_menu_icon = ref(null)

const toggleMenu = () => {
  menu_active.value = !menu_active.value
  hamberger_menu_icon.value.classList.toggle('bg-primary_color2')
  headerx.value.classList.remove('transparented')

}

const headerx = ref('')

const dostuff = () => {
  if (menu_active.value === false) {
    if (window.scrollY === 0) {
      headerx.value.classList.add('transparented')

    }

    if (window.scrollY > 90) {
      headerx.value.classList.remove('transparented')
      
    }
  }
}

onMounted(() => {
  dostuff()
  window.addEventListener('scroll', dostuff)
})


</script>

<style scoped>


.transparented{
  background-color: transparent;
}

li{
  position: relative;
}

li > a:hover::after{
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: white;
}
.official-shop{
  overflow: hidden;
  color: #fff;
}
.official-shop::after{
  content: '';
  width: 100%;
  height: 100%;
transform-origin:right center ;
  background-color: #dcbc78;
  z-index: -2;
  position: absolute;
 transition: all .5s ease-in-out;
 transform: scaleX(1);

}
.official-shop:hover::after{
 transform: scaleX(0);
transform-origin: center ;
 transition:  transform .45s cubic-bezier(.785,.135,.15,.86);

}
</style>
