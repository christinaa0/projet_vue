<template>
  <div class="app">
    <header class="navbar">
      <h1 class="logo-text">EPSEAT</h1>
      <nav>
        <ul class="nav-links">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/menu">Menu</RouterLink></li>
          <li><RouterLink to="/about">À propos</RouterLink></li>
          <li><RouterLink to="/panier">
            <img src="@/assets/acheter.png" alt="Panier" class="panier-icon" />
            Panier
          </RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Global layout */
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Navbar */
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

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  .nav-links a {
    display: block;
    padding: 0.5rem 0;
  }
}

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

@media (max-width: 768px) {
  .app-content {
    padding-top: 6rem; /* Augmente le padding si nécessaire sur les petits écrans */
  }
}
</style>
