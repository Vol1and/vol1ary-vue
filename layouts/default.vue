<template>
  <head>
    <title>Vol1ary: мой личный дневник</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Raleway:ital,wght@0,600;1,600&display=swap" rel="stylesheet"/>
  </head>
  <navbar />
  <sidebar/>
  <div class="container body">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue';
import Sidebar from "@/components/layout/Sidebar.vue";

</script>

<style scoped>

</style>
