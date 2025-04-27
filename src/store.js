import { reactive } from 'vue';

const state = reactive({
  panier: []  // Le tableau des articles dans le panier
});

// Ajouter un plat au panier
const addToPanier = (plat) => {
  const existingPlat = state.panier.find(item => item.id === plat.id);
  if (existingPlat) {
    existingPlat.quantity += 1; // Augmente la quantité si le plat est déjà dans le panier
  } else {
    state.panier.push({ ...plat, quantity: 1 }); // Sinon, ajoute un nouveau plat avec une quantité de 1
  }
};

// Supprimer un plat du panier
const removeFromPanier = (id) => {
  state.panier = state.panier.filter(item => item.id !== id);
};

// Mettre à jour la quantité d'un plat
const changeQuantity = (id, quantity) => {
  const plat = state.panier.find(item => item.id === id);
  if (plat) {
    plat.quantity = quantity;
  }
};

// Vider le panier
const clearPanier = () => {
  state.panier = [];
};

// Calculer le total
const getTotal = () => {
  return state.panier.reduce((total, plat) => total + plat.prix * plat.quantity, 0);
};

export default {
  state,
  addToPanier,
  removeFromPanier,
  changeQuantity,
  clearPanier,
  getTotal
};
