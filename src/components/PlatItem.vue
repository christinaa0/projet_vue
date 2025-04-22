<template>
    <div class="plat-item">
      <slot name="image">
        <img v-if="plat.imageUrl" :src="plat.imageUrl" alt="Image du plat" class="plat-img" />
      </slot>

      <div class="plat-content">
        <h3>
          {{ plat.nom }}
          <span v-if="plat.isNouveau" class="badge">Nouveau</span>
        </h3>
        <p class="description">{{ plat.description }}</p>
        <p class="prix">{{ plat.prix.toFixed(2) }} €</p>
        <slot name="extra"></slot>

        <button class="btn-ajouter" @click="ajouterAuPanier">
          Ajouter au panier
        </button>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  interface Plat {
    id: number;
    nom: string;
    description: string;
    prix: number;
    isNouveau: boolean;
    imageUrl?: string;
  }

  const props = defineProps<{
    plat: Plat
  }>()

  const emit = defineEmits<{
    (e: "ajouter-au-panier", plat: Plat): void
  }>()

  const ajouterAuPanier = () => {
    emit("ajouter-au-panier", props.plat)
  }
  </script>

  <style scoped>
  .plat-item {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    max-width: 320px;
    margin: 1rem auto;
    height: 450px; /* Fixer la hauteur de chaque carte */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .plat-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .plat-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    height: 45px; /* Assure que le titre ne prenne pas trop de place */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .badge {
    background-color: #f39c12;
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 50px;
    font-size: 0.8rem;
    margin-left: 0.5rem;
    font-weight: 500;
  }

  .description {
    font-size: 1rem;
    color: #4a4a4a;
    margin: 1rem 0;
    line-height: 1.5;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .prix {
    font-size: 1.25rem;
    color: #2ecc71;
    font-weight: 700;
    margin-top: 1rem;
  }

  .btn-ajouter {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: auto;
    width: 100%;
    text-align: center;
  }

  .btn-ajouter:hover {
    background-color: #c0392b;
  }

  .plat-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    .plat-item {
      max-width: 100%;
      margin: 0 1rem 1rem 1rem;
      height: auto;
    }

    .btn-ajouter {
      width: 100%;
    }
  }
  </style>
