<template>
  <div class="panier-page">
    <h1>Votre Panier</h1>

    <!-- Affichage du panier -->
    <div v-if="store.state.panier.length > 0">
      <div v-for="item in store.state.panier" :key="item.id" class="panier-item">
        <div class="item-details">
          <img :src="item.imageUrl" alt="Image Plat" class="item-image" />
          <div class="item-info">
            <p class="item-name">{{ item.nom }}</p>
            <p class="item-price">{{ item.prix }}€</p>
            <div class="item-quantity">
              <label>Quantité</label>
              <input type="number" v-model.number="item.quantity" @change="updateQuantity(item.id, item.quantity)" min="1" />
            </div>
          </div>
        </div>
        <button class="remove-btn" @click="removeFromPanier(item.id)">Supprimer</button>
      </div>

      <div class="total">
        <p><strong>Total : </strong>{{ store.getTotal() }}€</p>
      </div>

      <!-- Finalisation de la commande -->
      <button class="finalize-btn" @click="finalizeOrder">Finaliser la commande</button>
    </div>

    <!-- Message si le panier est vide -->
    <div v-else>
      <p>Votre panier est vide.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import store from '@/store'; // Assurez-vous que le chemin est correct

// Supprimer un plat du panier
const removeFromPanier = (id: number) => {
  store.removeFromPanier(id);
};

// Mettre à jour la quantité d'un plat
const updateQuantity = (id: number, quantity: number) => {
  store.changeQuantity(id, quantity);
};

// Finaliser la commande (vider le panier après la commande)
const finalizeOrder = () => {
  if (window.confirm("Commande validée ! Voulez-vous vraiment finaliser votre commande ?")) {
    store.clearPanier(); // Vide le panier
  }
};
</script>

<style scoped>
.panier-page {
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Arial', sans-serif;
}

.panier-page h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.panier-item {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.panier-item:hover {
  transform: translateY(-5px);
}

.item-details {
  display: flex;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.item-price {
  color: #777;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.item-quantity label {
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

input[type="number"] {
  width: 60px;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
}

input[type="number"]:focus {
  border-color: #4CAF50;
}

.remove-btn {
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

.total {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
}

.finalize-btn {
  background-color: #4CAF50;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.finalize-btn:hover {
  background-color: #388e3c;
}
</style>
