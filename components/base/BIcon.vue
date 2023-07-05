<template>
  <font-awesome-icon :icon="name" />
</template>



<script setup lang="ts">
import {IconName} from "@fortawesome/free-solid-svg-icons";

interface PageProps {
  name: IconName | string
}

defineProps<PageProps>();

</script>

<style scoped>

</style>
