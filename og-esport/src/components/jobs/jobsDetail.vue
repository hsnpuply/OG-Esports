<template>
  <div class="bg-violet-500">
        
    <h1>Jobs Detail</h1>
    <p>Hmmm wellcome {{ slugs }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slugs = ref(route.params.slugs);


</script>
