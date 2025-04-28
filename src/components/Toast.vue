<template>
  <!-- Affiche un toast si la prop 'visible' est vraie -->
  <div v-if="visible" class="toast">
    {{ message }} <!-- Affiche le message du toast -->
  </div>
</template>

<script>
export default {
  props: {
    message: String, // Message à afficher dans le toast
    visible: Boolean // Contrôle la visibilité du toast
  }
};
</script>

<style>
/* Style du toast */
.toast {
  position: fixed; /* Position fixe en bas de l'écran */
  bottom: 10px;
  left: 50%; /* Centré horizontalement */
  transform: translateX(-50%); /* Ajuste pour un centrage parfait */
  background-color: #333; /* Couleur de fond du toast */
  color: white; /* Texte en blanc */
  padding: 10px;
  border-radius: 5px; /* Bord arrondi */
  opacity: 0.9; /* Opacité légèrement réduite */
}
</style>
