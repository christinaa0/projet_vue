<template>
    <div class="panier-page">
      <h1>Votre panier</h1>
      <div v-if="items.length === 0" class="vide">
        Votre panier est vide.
      </div>
      <div v-else>
        <PanierItem
          v-for="item in items"
          :key="item.plat.id"
          :plat="item.plat"
          :quantite="item.quantite"
          @increment="modifierQuantite(item.plat.id, 1)"
          @decrement="modifierQuantite(item.plat.id, -1)"
          @supprimer="supprimerDuPanier"
        />
        <div class="total">
          Total : <strong>{{ total.toFixed(2) }} €</strong>
        </div>
        <button class="cmd" @click="finaliser">Valider la commande</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import PanierItem from '@/components/PanierItem.vue';
  import Plat from '@/components/PlatItem.vue';
  
  interface PlatType {
    id: number;
    nom: string;
    prix: number;
    imageUrl?: string;
  }
  
  interface Item {
    plat: PlatType;
    quantite: number;
  }
  
  const items = ref<Item[]>([]);
  
  // Exemple d'ajout initial pour test, plus tard on injectera depuis MenuPage
  items.value = [];
  
  const total = computed(() =>
    items.value.reduce((sum, i) => sum + i.plat.prix * i.quantite, 0)
  );
  
  // Méthodes
  function modifierQuantite(id: number, delta: number) {
    const idx = items.value.findIndex(i => i.plat.id === id);
    if (idx !== -1) {
      items.value[idx].quantite = Math.max(1, items.value[idx].quantite + delta);
    }
  }
  
  function supprimerDuPanier(id: number) {
    items.value = items.value.filter(i => i.plat.id !== id);
  }
  
  function finaliser() {
    alert(`Commande validée ! Total : ${total.value.toFixed(2)} €`);
    items.value = [];
  }
  
  // Pour calculer le total en temps réel
  watch(items, () => {
    console.log('Panier mis à jour', items.value);
  });
  </script>
  
  <style scoped>
  .panier-page { padding: 2rem; }
  .vide { text-align: center; color: #666; }
  .total {
    margin-top: 1rem;
    font-size: 1.25rem;
    text-align: right;
  }
  .cmd {
    display: block;
    margin: 1.5rem auto 0;
    padding: 0.75rem 1.5rem;
    background-color: #10b981;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
  }
  </style>
  