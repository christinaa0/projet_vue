<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenue chez EPSEAT 🍽️</h1>
        <p>Commandez vos repas en ligne facilement et rapidement.</p>
        <RouterLink to="/menu" class="btn-cta">Voir le menu</RouterLink>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="icon"></div>
        <h3>Fraîcheur</h3>
        <p>Ingrédients de saison, chaque jour.</p>
      </div>
      <div class="feature-card">
        <div class="icon"></div>
        <h3>Rapidité</h3>
        <p>Préparation express pour vos envies pressées.</p>
      </div>
      <div class="feature-card">
        <div class="icon"></div>
        <h3>Livraison</h3>
        <p>Arrivée chez vous en moins de 30 minutes.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  font-family: 'Segoe UI', Roboto, sans-serif;
}


.hero {
  width: 100%;
  height: 70vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #facc15 0%, #f97316 100%);
  color: #1f2937;
  position: relative;
  text-align: center;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.4;
}

.btn-cta {
  display: inline-block;
  background-color: #1f2937;
  color: #facc15;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s, transform 0.3s;
}

.btn-cta:hover {
  background-color: #111827;
  transform: translateY(-2px);
}


.features {
  display: grid;
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.feature-card p {
  color: #4b5563;
  line-height: 1.5;
}
</style>
