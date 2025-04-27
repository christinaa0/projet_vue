<template>
  <div class="about">
    <div class="about-content">
      <h1>À propos de EPSEAT</h1>
      <p class="intro">
        EPSEAT est un service de restauration rapide dédié aux étudiants de l'EPSI Paris.
        Nous proposons des plats variés, rapides et à prix abordables pour accompagner
        votre quotidien étudiant.
      </p>

      <div class="features">
        <div class="feature">
          <h2>Qualité</h2>
          <p>Des produits frais sélectionnés avec soin pour garantir la meilleure qualité.</p>
        </div>
        <div class="feature">
          <h2>Rapidité</h2>
          <p>Un service rapide pour que vous puissiez manger sans perdre de temps.</p>
        </div>
        <div class="feature">
          <h2>Prix abordables</h2>
          <p>Des menus adaptés aux budgets étudiants sans compromis sur la qualité.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
  width: 100%;
}

.about-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #333;
}

.features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
}

.feature {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  margin-bottom: 0.5rem;
  color: #007BFF;
}

.feature p {
  color: #555;
}

@media (min-width: 768px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
}

@media (min-width: 1024px) {
  .about-content {
    padding: 3rem;
  }
}
</style>
