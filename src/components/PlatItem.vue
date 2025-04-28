<template>
  <!-- Affiche un plat avec son image, description, prix et bouton d'ajout au panier -->
  <div class="plat-item">
    <!-- Slot pour personnaliser l'image du plat, avec une image par défaut si aucune image n'est fournie -->
    <slot name="image">
      <img v-if="plat.imageUrl" :src="plat.imageUrl" alt="Image du plat" class="plat-img" />
    </slot>

    <div class="plat-content">
      <h3>
        {{ plat.nom }}
        <!-- Badge pour marquer le plat comme "Nouveau" si applicable -->
        <span v-if="plat.isNouveau" class="badge">Nouveau</span>
      </h3>
      <p class="description">{{ plat.description }}</p>
      <p class="prix">{{ plat.prix.toFixed(2) }} €</p>
      <!-- Slot pour personnaliser des éléments supplémentaires (ex. options) -->
      <slot name="extra"></slot>
      <!-- Bouton pour ajouter le plat au panier -->
      <button class="btn-ajouter" @click="ajouterAuPanier">
        Ajouter au panier
      </button>
    </div>
  </div>
  <!-- Popup de confirmation d'ajout au panier -->
  <div v-if="popupVisible" class="popup-overlay" @click="fermerPopup">
    <div class="popup-content" @click.stop>
      <p>Commande ajoutée au panier !</p>
      <button @click="fermerPopup" class="btn-fermer-popup">Fermer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Définition de l'interface Plat pour typage
interface Plat {
  id: number;
  nom: string;
  description: string;
  prix: number;
  isNouveau: boolean;
  imageUrl?: string; // Image du plat optionnelle
}

// Définition de la prop 'plat' pour recevoir un objet Plat
const props = defineProps<{
  plat: Plat
}>()

// Définition de l'émission d'événements (ajouter au panier)
const emit = defineEmits<{
  (e: "ajouter-au-panier", plat: Plat): void
}>()

// Gestion de la visibilité de la popup de confirmation
const popupVisible = ref(false)

// Fonction pour ajouter un plat au panier et afficher la popup
const ajouterAuPanier = () => {
  emit("ajouter-au-panier", props.plat) // Émettre l'événement d'ajout au panier
  popupVisible.value = true // Afficher la popup
}

// Fonction pour fermer la popup
const fermerPopup = () => {
  popupVisible.value = false
}
</script>

<style scoped>
/* Style général pour l'élément plat */
.plat-item {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 320px;
  margin: 1rem auto;
  height: 450px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plat-item:hover {
  transform: translateY(-6px); /* Effet de levée au survol */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Style du contenu du plat */
.plat-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* Style du titre du plat */
h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis; /* Texte tronqué si trop long */
}

/* Badge "Nouveau" */
.badge {
  background-color: #f39c12;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

/* Description du plat */
.description {
  font-size: 1rem;
  color: #4a4a4a;
  margin: 1rem 0;
  line-height: 1.5;
  height: 60px;
  overflow: hidden;
}

/* Prix du plat */
.prix {
  font-size: 1.25rem;
  color: #2ecc71;
  font-weight: 700;
  margin-top: 1rem;
}

/* Style du bouton Ajouter au panier */
.btn-ajouter {
  background-color: #e74c3c;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-ajouter:hover {
  background-color: #c0392b; /* Changement de couleur au survol */
}

/* Image du plat */
.plat-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}

/* Style de la popup de confirmation */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.popup-content p {
  font-size: 1.2rem;
  color: #2ecc71;
}

.btn-fermer-popup {
  background-color: #e74c3c;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
}

.btn-fermer-popup:hover {
  background-color: #c0392b; /* Changement de couleur au survol */
}
</style>
