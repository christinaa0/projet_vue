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
  </div>
</template>

<script setup lang="ts">
import store from '@/store';

const removeFromPanier = (id: number) => {
  store.removeFromPanier(id);
};

const updateQuantity = (id: number, quantity: number) => {
  store.changeQuantity(id, quantity);
};

const finalizeOrder = () => {
  if (window.confirm("Commande validée ! Voulez-vous vraiment finaliser votre commande ?")) {
    store.clearPanier();
  }
};
</script>

<style scoped>
.panier-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 6rem;
  background-color: #f9fafb;
  font-family: 'Arial', sans-serif;
}

.panier-container {
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.panier-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}

.item-left {
  display: flex;
  flex-direction: column;
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
  margin-top: 0.5rem;
}

.item-quantity label {
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

input[type="number"] {
  width: 70px;
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
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 0.5rem;
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
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;
}

.finalize-btn:hover {
  background-color: #388e3c;
}

@media (max-width: 768px) {
  .panier-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .remove-btn {
    width: 100%;
    margin-top: 1rem;
  }

  .total {
    text-align: center;
  }

  .finalize-btn {
    font-size: 1rem;
  }
}
</style>
