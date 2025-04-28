<template>
  <div class="panier-page">
    <div class="panier-container">
      <h1>Votre Panier</h1>
      <div v-if="store.state.panier.length > 0">
        <div v-for="item in store.state.panier" :key="item.id" class="panier-item">
          <div class="item-left">
            <p class="item-name">{{ item.nom }}</p>
            <p class="item-price">{{ item.prix }}€</p>
            <div class="item-quantity">
              <label>Quantité</label>
              <input type="number" v-model.number="item.quantity" @change="updateQuantity(item.id, item.quantity)" min="1" />
            </div>
          </div>
          <button class="remove-btn" @click="removeFromPanier(item.id)">Supprimer</button>
        </div>

        <div class="total">
          <p><strong>Total : </strong>{{ store.getTotal() }}€</p>
        </div>

        <button class="finalize-btn" @click="finalizeOrder">Finaliser la commande</button>
      </div>

      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>

    <!-- Confirmation Pop-up -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>Commande validée ! Voulez-vous vraiment finaliser votre commande ?</p>
        <button @click="confirmOrder">OK</button>
        <button @click="cancelOrder">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showPopup = ref(false); // Contrôle du pop-up
const router = useRouter();

const removeFromPanier = (id: number) => {
  store.removeFromPanier(id);
};

const updateQuantity = (id: number, quantity: number) => {
  store.changeQuantity(id, quantity);
};

const finalizeOrder = () => {
  // Afficher le pop-up pour confirmer la finalisation de la commande
  showPopup.value = true;
};

const confirmOrder = () => {
  // Finaliser la commande dans le store et vider le panier
  store.finalizeCommande();
  showPopup.value = false;
  
  // Rediriger vers la page Admin ou rafraîchir l'interface
  router.push('/admin'); // Redirection vers la page Admin après confirmation
};

const cancelOrder = () => {
  showPopup.value = false; // Fermer le pop-up sans action
};
</script>

<style scoped>
/* Pop-up */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:last-child {
  background-color: #f44336;
}

button:last-child:hover {
  background-color: #d32f2f;
}
</style>
