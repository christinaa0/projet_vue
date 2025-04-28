// Importation de la fonction reactive de Vue pour rendre l'état réactif
import { reactive } from 'vue';

// Définition de l'état réactif pour stocker le panier et les commandes
const state = reactive({
<<<<<<< HEAD
  panier: []  // Le tableau des articles dans le panier
});

// Ajouter un plat au panier
=======
  panier: [],   // Tableau pour stocker les plats ajoutés au panier avec leurs quantités
  commandes: [] // Tableau pour stocker les commandes finalisées
});

// Fonction pour ajouter un plat au panier
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
const addToPanier = (plat) => {
  // Vérifier si le plat est déjà dans le panier
  const existingPlat = state.panier.find(item => item.id === plat.id);
  if (existingPlat) {
<<<<<<< HEAD
    existingPlat.quantity += 1; // Augmente la quantité si le plat est déjà dans le panier
  } else {
    state.panier.push({ ...plat, quantity: 1 }); // Sinon, ajoute un nouveau plat avec une quantité de 1
  }
};

// Supprimer un plat du panier
=======
    // Si le plat existe déjà, augmenter la quantité
    existingPlat.quantity += 1;
  } else {
    // Sinon, ajouter le plat au panier avec une quantité initiale de 1
    state.panier.push({ ...plat, quantity: 1 });
  }
};

// Fonction pour retirer un plat du panier en fonction de son ID
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
const removeFromPanier = (id) => {
  // Filtrer le panier pour ne garder que les plats dont l'ID ne correspond pas à celui passé en paramètre
  state.panier = state.panier.filter(item => item.id !== id);
};

<<<<<<< HEAD
// Mettre à jour la quantité d'un plat
=======
// Fonction pour changer la quantité d'un plat dans le panier
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
const changeQuantity = (id, quantity) => {
  // Trouver le plat dans le panier
  const plat = state.panier.find(item => item.id === id);
  if (plat) {
    // Si le plat est trouvé, mettre à jour la quantité
    plat.quantity = quantity;
  }
};

<<<<<<< HEAD
// Vider le panier
const clearPanier = () => {
  state.panier = [];
};

// Calculer le total
=======
// Fonction pour finaliser la commande, transférer les articles du panier aux commandes
const finalizeCommande = () => {
  // Vérifier si le panier n'est pas vide
  if (state.panier.length > 0) {
    // Créer une nouvelle commande pour chaque plat du panier avec le statut "En cours"
    const newCommande = state.panier.map(item => ({
      ...item,  // Conserver toutes les informations du plat
      status: 'En cours',  // Statut de la commande
      total: item.prix * item.quantity // Calcul du total pour ce plat (prix * quantité)
    }));
    
    // Ajouter les nouvelles commandes à la liste des commandes
    state.commandes.push(...newCommande); 
    
    // Vider le panier après la commande
    state.panier = [];
  }
};

// Fonction pour marquer une commande comme prête (par exemple après préparation)
const marquerCommandeCommePret = (id) => {
  // Trouver la commande dans la liste des commandes en fonction de l'ID
  const commande = state.commandes.find(c => c.id === id);
  if (commande) {
    // Si la commande est trouvée, modifier son statut à "Prête"
    commande.status = 'Prête';
  }
};

// Fonction pour calculer le total du panier (prix * quantité pour chaque plat)
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
const getTotal = () => {
  // Utiliser reduce pour calculer le total du panier
  return state.panier.reduce((total, plat) => total + plat.prix * plat.quantity, 0);
};

// Exportation de l'état et des fonctions pour les utiliser dans d'autres parties de l'application
export default {
  state,  // L'état réactif (panier et commandes)
  addToPanier,  // Fonction pour ajouter un plat au panier
  removeFromPanier,  // Fonction pour retirer un plat du panier
  changeQuantity,  // Fonction pour changer la quantité d'un plat dans le panier
  finalizeCommande,  // Fonction pour finaliser une commande
  marquerCommandeCommePret,  // Fonction pour marquer une commande comme prête
  getTotal  // Fonction pour obtenir le total du panier
};
