<template>
  <!-- Conteneur principal de l'application -->
  <div class="app">
    <!-- Barre de navigation (fixed) -->
    <header class="navbar">
      <!-- Logo de l'application -->
      <h1 class="logo-text">EPSEAT</h1>
      
      <!-- Menu de navigation -->
      <nav>
        <!-- Icône du menu hamburger, visible sur mobile -->
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <!-- Liste des liens de navigation, active si le menu est ouvert -->
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/menu">Menu</RouterLink></li>
          <li><RouterLink to="/about">À propos</RouterLink></li>
          <li><RouterLink to="/panier">
            <img src="@/assets/acheter.png" alt="Panier" class="panier-icon" />
            Panier
          </RouterLink></li>
          <!-- Lien vers la page admin -->
          <li><RouterLink to="/admin">Admin</RouterLink></li>
        </ul>
      </nav>
    </header>

    <!-- Section principale qui charge le contenu selon la route -->
    <main class="app-content">
      <!-- Cette balise affiche le contenu de la route actuelle -->
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'; // Importation de RouterLink pour la navigation
import { ref } from 'vue'; // Importation de ref pour créer une variable réactive

// Déclaration d'un état pour gérer l'ouverture/fermeture du menu hamburger
const isMenuOpen = ref(false);

// Fonction qui inverse l'état du menu (ouverture/fermeture)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
<<<<<<< HEAD
/* Global layout */
=======
/* Conteneur principal de l'application */
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
.app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Prend toute la hauteur de l'écran */
}

<<<<<<< HEAD
/* Navbar */
=======
/* Style de la barre de navigation */
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2937; /* Couleur sombre */
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Assure que la navbar reste au-dessus du contenu */
}

/* Style du logo */
.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #facc15; /* Couleur jaune */
}

/* Liste des liens de navigation */
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Liens de navigation */
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s; /* Transition douce lors du survol */
}

/* Effet au survol des liens */
.nav-links a:hover {
  color: #facc15; /* Changement de couleur au survol */
}

/* Icône du panier */
.panier-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem; /* Espace à droite de l'icône */
}

/* Menu hamburger (affiché uniquement sur mobile) */
.menu-toggle {
  display: none; /* Par défaut, il est caché */
  flex-direction: column;
  gap: 4px;
  cursor: pointer; /* Change le curseur pour montrer que c'est cliquable */
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
}

/* Styles spécifiques aux petits écrans (mobile) */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column; /* Alignement en colonne */
    align-items: flex-start;
    padding: 1rem;
  }

  /* Menu de navigation caché par défaut sur mobile */
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    background-color: #1f2937;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* Menu actif (affiché) sur mobile */
  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 0.5rem 0;
    text-align: left;
    border-bottom: 1px solid #3b4c61;
  }

  .menu-toggle {
    display: flex; /* Affichage du menu hamburger */
  }

  .app-content {
    padding-top: 5rem; /* Espace en haut pour éviter que le contenu soit caché par la navbar */
  }
}

<<<<<<< HEAD
/* Main content */
.app-content {
  padding-top: 4rem; /* Assure que le contenu est sous la navbar */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  min-height: calc(100vh - 4rem); /* Utilise toute la hauteur de la fenêtre sous la navbar */
  width: 100%;
  box-sizing: border-box; /* Assure que le padding ne dépasse pas de la fenêtre */
  overflow-x: hidden;
}
=======
/* Version Desktop (écrans larges) */
@media (min-width: 769px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
  }

  .nav-links a {
    padding: 0.5rem 1rem;
    text-align: center;
  }

  .menu-toggle {
    display: none; /* Masque le menu hamburger sur desktop */
  }
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6

  .app-content {
<<<<<<< HEAD
    padding-top: 6rem; /* Augmente le padding si nécessaire sur les petits écrans */
=======
    padding-top: 6rem; /* Espace en haut pour le contenu */
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
  }
}
</style>
