<template>
  <!-- Affiche les informations de la commande -->
  <div class="commande-item">
    <p>{{ commande.nom }}</p>
    <p>Quantité: {{ commande.quantite }}</p>
    <p>Total: {{ commande.total }}€</p>
    <!-- Bouton pour marquer la commande comme prête -->
    <button @click="marquerCommePret">Marquer comme prêt</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// Récupère la commande passée en prop
const commande = defineProps({
  commande: Object
});

// Récupère le contexte 'commandes' pour accéder aux méthodes globales
const commandes = inject('commandes');

// Fonction pour marquer la commande comme prête
const marquerCommePret = () => {
  commandes.marquerCommandeCommePret(commande.id);
};
</script>

<style scoped>
/* Style de l'élément de commande */
.commande-item {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
}

/* Style du bouton */
button {
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

/* Changement de couleur du bouton au survol */
button:hover {
  background-color: #388e3c;
}
</style>
