import { reactive } from 'vue';

const state = reactive({
  panier: []
});

const addToPanier = (plat) => {
  const existingPlat = state.panier.find(item => item.id === plat.id);
  if (existingPlat) {
    existingPlat.quantity += 1;
  } else {
    state.panier.push({ ...plat, quantity: 1 });
  }
};

const removeFromPanier = (id) => {
  state.panier = state.panier.filter(item => item.id !== id);
};

const changeQuantity = (id, quantity) => {
  const plat = state.panier.find(item => item.id === id);
  if (plat) {
    plat.quantity = quantity;
  }
};

const clearPanier = () => {
  state.panier = [];
};

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
