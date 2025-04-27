<template>
  <header class="navbar">
    <h1 class="logo-text">EPSEAT</h1>
    <nav>
      <ul class="nav-links">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/menu">Menu</RouterLink></li>
        <li><RouterLink to="/about">À propos</RouterLink></li>
        <li><RouterLink to="/panier">
          <!-- Utilisation de l'image du panier depuis assets -->
          <img src="@/assets/acheter.png" alt="Panier" class="panier-icon" />
          Panier
        </RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  width: 100vw;
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

/* Styling de l'icône du panier */
.panier-icon {
  width: 20px; /* Ajuste la taille de l'icône ici */
  height: 20px;
  margin-right: 0.5rem; /* Un petit espacement entre l'icône et le texte */
}

/* Mode mobile : on empile */
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
</style>
