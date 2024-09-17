import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';

import router from './index.js'





/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faTelevision } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTelevision)

createApp(App).component('font-awesome-icon', FontAwesomeIcon). use(router).mount('#app')
