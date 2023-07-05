<template>
  <nuxt-link :to="link" :class="{'active': props.link === route.fullPath}" class="sidebar__item">
    <div class="sidebar__item-bar"></div>
    <b-icon v-if="icon" className="sidebar__item-icon" :name="icon" />
    <div class="sidebar__item-title">
      <slot />
    </div>
  </nuxt-link>
</template>


<script setup lang="ts">
import {  useRoute } from 'vue-router'
import BIcon from "@/components/base/BIcon.vue";
interface PageProps {
  link: string
  icon?: string
}

const props = defineProps<PageProps>()

const route = useRoute()
console.log(route)





</script>

<style scoped>

</style>
