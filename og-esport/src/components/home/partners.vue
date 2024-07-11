<template>
    <div class="partners_home relative container ">
            <ul  class="flex items-center flex-wrap gap-8 justify-center lg:gap-x-20 md:gap-x-10 xl:gap-x-28 ">
                <li v-for="(partner,index) in partners" :key="index">
                        <a :href="partner.link" target="_blank">
                        <img :src="partner.image" alt="" class="w-28 lg:w-32 xl:w-36">
                    </a>        
                </li>
        
                </ul>
    </div>
</template>

<script setup>

import Redbull from '../../assets/img/sponsers/partner_red_bull.png'
import Wintermute from '../../assets/img/sponsers/wintermute1_darkbg_transparent.png'
import Pari from '../../assets/img/sponsers/pari.webp'
import Socios from '../../assets/img/sponsers/socioslogo-1.png'
import SecretLab from '../../assets/img/sponsers/logo_sponsor_secret_lab.png'

import {ref} from 'vue';
const partners = ref([
    {
    id:0,
     image: Redbull,
    link:'https://redbull.com'
  }, 
  {
    id:1,
    image: Wintermute,
    link:'https://wintermute.com'

  },
  {
    id:2,
    image: Pari,
    link:'https://1xbet.com'



  },
  {
    id:3,
    image: Socios,
    link:'https://Socios.com'


  },
  {
    id:4,
    image: SecretLab,
    link:'https://redbull.com'


  }
])
</script>

<style scoped>

</style>
