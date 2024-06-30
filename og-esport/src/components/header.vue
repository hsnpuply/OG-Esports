<template>

    <header class=" font-titilium text-4xl text-center p-1  bg-navbar_bg lg:bg-transparent lg:hover:bg-navbar_bg duration-200 ease-in relative">
     <div class="top-nav  flex items-center gap-4 justify-between container py-2">
           <!--  LOGO  -->
        <div class="logo ">
            <a href="#">
            <img :src="logoPic" alt="" class=" max-w-[50px] ">

            </a>
        </div>


        <div class="right-side flex items-center gap-4 ">
            
        <!-- Offical Shop Button -->
         <div class="official-shop">
            <a href="#" class=" uppercase text-base tracking-[.3rem] text-white py-3 px-2 font-semibold bg-primary_color2 hover:bg-transparent border-2 border-primary_color2">OG OFFICIAL SHOP</a>
         </div>

         <!-- Hamberger Menu -->
          <div class="hamberger-menu  flex">
            <button >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 19 19" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
     </div>



    </header>

</template>

<script setup>
import logoPic from '../assets/img/og_logo_2020.png'



</script>
