<template>
  <Navbar />
  <main class="app-content">
    <RouterView/>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<style>
/* On ajoute un padding-top = hauteur de la navbar */
/* Ajuste 4rem si ta navbar fait plus ou moins de hauteur */
.app-content {
  padding-top: 4rem;
}
</style>
