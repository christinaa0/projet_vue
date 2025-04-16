<!-- src/components/Toast.vue -->
<template>
    <div class="toast">
      {{ message }}
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    message: string
  }>()
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 1000;
    animation: fadein 0.5s ease-out;
  }
  
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  