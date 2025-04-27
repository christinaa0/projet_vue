<template>
  <div class="menu-page">
    <h1>Menu du Restaurant</h1>

    <div class="plats-list">
      <PlatItem
        v-for="plat in platsList"
        :key="plat.id"
        :plat="plat"
        @ajouter-au-panier="handleAjouterAuPanier"
      >
        <template #extra>
          <span v-if="plat.prix < 9" class="cheap-badge">Bon plan</span>
        </template>
      </PlatItem>
    </div>

    <Toast v-if="toastVisible" :message="toastMessage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { plats as platsData } from '@/data/plats'
import PlatItem from '@/components/PlatItem.vue'
import Toast from '@/components/Toast.vue'
import store from '@/store'

const toastVisible = ref(false)
const toastMessage = ref("")

const handleAjouterAuPanier = (plat) => {
  store.addToPanier(plat)
  toastMessage.value = `${plat.nom} ajouté au panier !`
  toastVisible.value = true
  setTimeout(() => (toastVisible.value = false), 2000)
}

const platsList = platsData
</script>

<style scoped>
.menu-page {
  padding: 6rem 2rem 2rem 2rem; /* Ajout d'un padding top pour compenser la navbar */
  background-color: #f9fafb;
  min-height: 100vh;
  box-sizing: border-box;
}

.menu-page h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937;
}

.plats-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.cheap-badge {
  background-color: #22c55e;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  font-weight: bold;
}

.plat-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}
</style>
