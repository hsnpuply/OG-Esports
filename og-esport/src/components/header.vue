<template>

    <header class="px-2  font-titilium text-4xl text-center 
       lg:bg-transparent lg:hover:bg-navbar_bg duration-200 ease-in relative 
    z-20
    ">
    <!-- Commented top nav -->
     <!-- <div class="top-nav  flex items-center gap-4 justify-between container py-1 ">
        <div class="logo ">
            <a href="#">
            <img :src="logoPic" alt="" class=" max-w-[42px] absolute top-[10px] ">

            </a>
        </div>


        <div class="right-side flex items-end gap-4  ">
            
         <div class="official-shop">
            <a href="#" class=" uppercase text-sm tracking-[.22rem]
             text-white   font-semibold bg-primary_color2 p-[.5rem]
              hover:bg-transparent border-2 border-primary_color2">
              OG OFFICIAL SHOP</a>
         </div>

          <div class="hamberger-menu  flex items-center justify-center h-full  "@click="toggleMenu()"  ref="hamberger_menu_icon">
            <button class="text-center " >
              ☰
            </button>
          </div>
        </div>
     </div>
 -->
     <div class="top-nav flex  items-end justify-between py-2 px-2">
       <div class="logo ">
            <a href="#">
            <img :src="logoPic" alt="" class=" max-w-[44px] absolute top-[9px]  left-8">

            </a>
        </div>


        <div class="right-side flex items-center gap-4  ">
            
         <div class="official-shop flex items-center relative">
            <a href="#" class=" uppercase text-sm
             text-white hover:text-primary_color2  font-semibold 
              hover:bg-transparent border-2 border-primary_color2 py-3 px-[.45rem] tracking-[.14rem] ">
              OG OFFICIAL SHOP</a>
         </div>

          <div class="hamberger-menu  flex items-center  text-xl  px-2 py-1  text-white  "@click="toggleMenu()"  ref="hamberger_menu_icon">
            <button class="" >
              ☰
               <!-- X -->
            </button>
          </div>
        </div>
     </div>

    </header>
    <div class="hamberger-menu-list  absolute top-19 w-full text-white text-xs bg-red-800" v-if="menu_active">
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
import {ref } from 'vue'
import logoPic from '../assets/img/og_logo_2020.png'
const menu_active = ref(false);
const hamberger_menu_icon = ref(null)

const toggleMenu = () => {
  menu_active.value = !menu_active.value
  hamberger_menu_icon.value.classList.toggle('bg-primary_color2')
}



</script>

<style scoped>
header{
  background: linear-gradient(270deg,#191e2b 0,#333b54 52.08%,#141822 100%),#191e2b;
}

.hamberger-menu-list{
  background:linear-gradient(270deg,#23293b 0,#333b54 52.08%,#23293b 100%),#23293b
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
