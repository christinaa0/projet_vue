<template>
  <div class="menu-page">
    <h1 class="title">Menu du Restaurant</h1>

    <div class="plats-list">
      <PlatItem
        v-for="plat in platsList"
        :key="plat.id"
        :plat="plat"
        @ajouter-au-panier="handleAjouterAuPanier"
      >
        <template #extra>
          <span v-if="plat.prix < 9" class="badge--promo">Bon plan</span>
        </template>
        <template #image>
          <img :src="plat.imageUrl" alt="Image du plat" class="plat-img" />
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
const toastMessage = ref('')

const handleAjouterAuPanier = (plat: any) => {
  store.addToPanier(plat)
  toastMessage.value = `${plat.nom} ajouté au panier !`
  toastVisible.value = true
  setTimeout(() => (toastVisible.value = false), 2000)
}

const platsList = platsData
</script>

<style scoped>
.menu-page {
  padding: 6rem 2rem 2rem;
  background: #f9fafb;
  min-height: calc(100vh - 6rem);
}

.title {
  font-family: var(--font-title);
  font-size: 2.25rem;
  text-align: center;
  color: var(--color-dark);
  margin-bottom: 2rem;
}

.plats-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.plat-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}
.plat-img:hover {
  transform: scale(1.05);
}

.badge--promo {
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

/* Ajustements PlatItem */
.plat-item {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.plat-item:hover {
  transform: translateY(-6px);
}

.plat-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.plat-content h3 {
  font-family: var(--font-title);
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
  color: var(--color-dark);
}

.plat-content .description {
  color: var(--color-muted);
  flex: 1;
  margin: 0.5rem 0 1rem;
  line-height: 1.4;
}

.plat-content .prix {
  font-weight: 700;
  color: var(--color-primary);
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.btn-ajouter {
  background: var(--color-primary);
  color: var(--color-dark);
  border: none;
  padding: 0.75rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  align-self: flex-start;
}
.btn-ajouter:hover {
  background: #e0b535;
}
</style>
