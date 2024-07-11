<template>

    <header class="header
    
    " ref="headerx" @mouseover="mouseOverNavbar()" @mouseleave="mouseLeavesNavbar()" >
     <div class="top-nav flex  items-end justify-between py-2 px-2  md:px-10 lg:container  ">
       <div class="left-side md:flex md:items-center md:gap-4 ">
        <!-- Logo -->
        <div class="logo ">
            <a href="#">
            <img :src="logoPic" alt="" class=" max-w-[44px] absolute top-[9px] md:static   left-14">
            </a>
        </div>

        <!-- Desktop Main Menu -->
         <div class="main-menu hidden  lg:flex  p-1  px-6">
              <nav class=" h-full w-full  ">
  <ul class="uppercase tracking-wider flex items-stretch text-base font-semibold gap-7 justify-center w-full  text-white    ">

<li class="flex flex-col items-stretch justify-center" v-for="(item,index) in menuListItems" :key="index" >
  <a :href="item.link">{{ item.name }}</a>
</li>
  </ul>
</nav>
         </div>
       </div>


        <div class="right-side flex-icenter gap-5 ">
            
         <div class="official-shop flex-icenter relative">
            <a href="#" class=" gold_button"
              >
              OG OFFICIAL SHOP</a>
         </div>

          <div class="lg:hidden hamberger-menu    flex-icenter text-xl  px-2 py-1  text-white  "@click="toggleMenu()"  ref="hamberger_menu_icon">
            <button class="" >
              ☰
               <!-- X -->
            </button>
          </div>
        </div>
     </div>

    </header>
    <!-- HamberGerMenu Mobile -->
    <div class="hamberger-mobile-menu-list  " v-if="menu_active">
<nav>
  <ul class="uppercase tracking-wider flex- flex-col gap-7 justify-center w-full py-4">
<li class="w-full relative   text-center" v-for="(item,index) in menuListItems" :key="index" >
  <a :href="item.link" class="">{{ item.name }}</a>
</li>
  </ul>
</nav>
    </div>

</template>

<script setup>
import {onMounted, ref } from 'vue'
import logoPic from '../assets/img/og_logo_2020.png'
const menu_active = ref(false);
const hamberger_menu_icon = ref(null)

const menuListItems = ref([
  {name: 'Home', link: '#'},
  {name: 'News', link: '#'},
  {name: 'Teams', link: '#'},
  {name: 'About', link: '#'},
  {name: 'Partners', link: '#'},
  {name: 'Contact us', link: '#'},
])



const toggleMenu = () => {
  menu_active.value = !menu_active.value
  hamberger_menu_icon.value.classList.toggle('bg-primary_color2')
  headerx.value.classList.remove('transparented')

}

const headerx = ref('')

const navbarReact = () => {
  if (menu_active.value === false) {
    if (window.scrollY === 0) {
        headerx.value.classList.add('transparented')
    }

    if (window.scrollY > 90) {
      headerx.value.classList.remove('transparented')
      
    }
  }
}
const mouseOverNavbar = () => {
    headerx.value.classList.remove('transparented')
}

const mouseLeavesNavbar = () => {
  if (menu_active.value === false) {
    headerx.value.classList.add('transparented')
  }
  
}

onMounted(() => {
  navbarReact()
  window.addEventListener('scroll', navbarReact)
})


</script>

<style scoped>


.transparented{
  background-color: transparent;
}

li{
  position: relative;
}

.hamberger-mobile-menu-list ul li  a:hover::after{
  width: 100%;
}
.hamberger-mobile-menu-list ul li  a::after{
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  height: 2px;
  width: 0%;
  background-color: white;
  transition: all .7s cubic-bezier(0.215, 0.610, 0.355, 1);
  
}
.main-menu  ul li  a:hover::after{
width: 100%;
}
.main-menu  ul li  a::after{
   content: "";
  position: absolute;
  bottom:-38px;
  left: -2px;
  height: 2px;
  width: 0%;
  background-color: rgb(255, 255, 255);
  transition: all .4s cubic-bezier(0.215, 0.610, 0.355, 1);
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
