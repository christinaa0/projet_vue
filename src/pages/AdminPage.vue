<template>
  <div class="admin-page">
    <h1>Gestion des Commandes</h1>
    
    <!-- Liste des commandes -->
    <div v-if="store.state.commandes.length > 0">
      <div v-for="commande in store.state.commandes" :key="commande.id" class="commande">
        <p><strong>Plat:</strong> {{ commande.nom }}</p>
        <p><strong>Quantité:</strong> {{ commande.quantity }}</p>
        <p><strong>Total:</strong> {{ commande.total }} €</p>
        
        <!-- Statut de la commande -->
        <p><strong>Status:</strong> {{ commande.status }}</p>
        
        <!-- Marquer comme prêt -->
        <button v-if="commande.status === 'En cours'" @click="marquerCommePret(commande.id)">
          Marquer comme prêt
        </button>
      </div>
    </div>

    <div v-else>
      <p>Aucune commande en cours.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '@/store';

const marquerCommePret = (id: number) => {
  store.marquerCommandeCommePret(id);
};
</script>

<style scoped>
.admin-page {
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.commande {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
    