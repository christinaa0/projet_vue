<template>
  <div class="panier-item">
    <h4>{{ item.nom }}</h4>
    <p>{{ item.prix }} €</p>
    <input type="number" v-model="item.quantite" @change="modifierQuantite" min="1" />
    <button @click="supprimerItem">Supprimer</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    item: Object
  },
  setup(props) {
    const panier = inject('panier');

    const supprimerItem = () => {
      panier.supprimerItem(props.item.id);
    };

    const modifierQuantite = () => {
      panier.changerQuantite(props.item.id, props.item.quantite);
    };

    return { supprimerItem, modifierQuantite };
  }
};
</script>
