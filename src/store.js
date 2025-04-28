import { reactive } from 'vue';

const state = reactive({
  panier: [],
  commandes: [] 
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


const finalizeCommande = () => {
  if (state.panier.length > 0) {
    const newCommande = state.panier.map(item => ({
      ...item,
      status: 'En cours',
      total: item.prix * item.quantity
    }));
    state.commandes.push(...newCommande); 
    state.panier = []; 
  }
};


const marquerCommandeCommePret = (id) => {
  const commande = state.commandes.find(c => c.id === id);
  if (commande) {
    commande.status = 'Prête';
  }
};


const getTotal = () => {
  return state.panier.reduce((total, plat) => total + plat.prix * plat.quantity, 0);
};

export default {
  state,
  addToPanier,
  removeFromPanier,
  changeQuantity,
  finalizeCommande,
  marquerCommandeCommePret,
  getTotal
};
