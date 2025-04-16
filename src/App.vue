<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <!-- Logo text -->
    <h1 class="logo-text">EPSEAT</h1>

    <!-- Liens de navigation -->
    <ul class="nav-links">
      <li><RouterLink to="/">Accueil</RouterLink></li>
      <li><RouterLink to="/menu">Menu</RouterLink></li>
      <li><RouterLink to="/about">À propos</RouterLink></li>
    </ul>
  </header>

  <div class="main-title">

  </div>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #1f2937;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #facc15;
  flex: 1; /* Prend l'espace à gauche */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
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
  text-decoration: underline;
}

.main-title {
  text-align: center;
  margin: 3rem 0 1rem;
}

.main-title h2 {
  font-size: 2rem;
  color: #1f2937;
  font-weight: 700;
}

.main-content {
  padding-top: 100px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
</style>
