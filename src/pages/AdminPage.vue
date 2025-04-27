<template>
    <div class="admin-page">
      <h1>Admin – Commandes en cours</h1>
      <div v-for="cmd in commandes" :key="cmd.id" class="commande">
        <p><strong>{{ cmd.client }}</strong></p>
        <ul>
          <li v-for="pl in cmd.plats" :key="pl.id">
            {{ pl.nom }} × {{ pl.quantite }}
          </li>
        </ul>
        <button @click="marquerPrete(cmd.id)">Marquer prête</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { inject, ref, type Ref } from 'vue';
  interface Commande { id: number; client: string; plats: any[]; prete: boolean; }
  
  const commandes = inject<Ref<Commande[]>>('commandes', ref([]));
  
  function marquerPrete(id: number) {
    const cmd = commandes.value.find(c => c.id === id);
    if (cmd) cmd.prete = true;
  }
  </script>
  
  <style scoped>
  .admin-page { padding: 2rem; }
  .commande {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
  }
  .commande button {
    background-color: #3b82f6;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  