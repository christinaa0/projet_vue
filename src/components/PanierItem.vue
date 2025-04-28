<template>
  <!-- Affiche l'élément du panier avec nom, prix et quantité -->
  <div class="panier-item">
    <h4>{{ item.nom }}</h4>
    <p>{{ item.prix }} €</p>
    <!-- Permet de modifier la quantité de l'article -->
    <input type="number" v-model="item.quantite" @change="modifierQuantite" min="1" />
    <!-- Bouton pour supprimer l'élément du panier -->
    <button @click="supprimerItem">Supprimer</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    item: Object // L'élément du panier passé en prop
  },
  setup(props) {
    // Récupère le contexte 'panier' pour accéder aux méthodes globales
    const panier = inject('panier');

    // Fonction pour supprimer un item du panier
    const supprimerItem = () => {
      panier.supprimerItem(props.item.id);
    };

    // Fonction pour modifier la quantité de l'item dans le panier
    const modifierQuantite = () => {
      panier.changerQuantite(props.item.id, props.item.quantite);
    };

    return { supprimerItem, modifierQuantite };
  }
};
</script>
