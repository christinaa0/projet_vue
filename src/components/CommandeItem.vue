<template>
  <div class="commande-item">
    <p>{{ commande.nom }}</p>
    <p>Quantité: {{ commande.quantite }}</p>
    <p>Total: {{ commande.total }}€</p>
    <button @click="marquerCommePret">Marquer comme prêt</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const commande = defineProps({
  commande: Object
});

const commandes = inject('commandes');

const marquerCommePret = () => {
  commandes.marquerCommandeCommePret(commande.id);
};
</script>

<style scoped>
.commande-item {
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #388e3c;
}
</style>
