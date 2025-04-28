<template>
  <div class="app">
    <header class="navbar">
      <h1 class="logo-text">EPSEAT</h1>
      <nav>
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
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

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2937;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #facc15;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #facc15;
}

.panier-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

/* Menu hamburger */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    background-color: #1f2937;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

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
    display: flex;
  }

  .app-content {
    padding-top: 5rem;
  }
}

/* Version Desktop */
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
    display: none;
  }

  .app-content {
    padding-top: 6rem; /* Ajout de l'espace en haut du contenu */
  }
}
</style>
