<template>
    <div class="panier-item">
      <img :src="plat.imageUrl" alt="" class="img" />
      <div class="info">
        <h4>{{ plat.nom }}</h4>
        <div class="quantite">
          <button @click="$emit('decrement', plat.id)">–</button>
          <span>{{ quantite }}</span>
          <button @click="$emit('increment', plat.id)">+</button>
        </div>
        <p class="prix">{{ (plat.prix * quantite).toFixed(2) }} €</p>
      </div>
      <button class="suppr" @click="$emit('supprimer', plat.id)">✕</button>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    plat: { id: number; nom: string; prix: number; imageUrl?: string };
    quantite: number;
  }>();
  const emit = defineEmits<{
    (e: 'increment' | 'decrement' | 'supprimer', id: number): void
  }>();
  </script>
  
  <style scoped>
  .panier-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
  }
  .img {
    width: 60px; height: 60px;
    object-fit: cover; border-radius: 8px;
  }
  .info {
    flex: 1;
  }
  .quantite button {
    width: 24px; height: 24px;
    border: none; background: #eee; cursor: pointer;
    border-radius: 4px;
  }
  .suppr {
    background: none; border: none;
    font-size: 1.25rem; color: #ef4444;
    cursor: pointer;
  }
  .prix {
    font-weight: bold; margin-top: 0.5rem;
  }
  </style>
  