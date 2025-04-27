<template>
  <div v-if="visible" class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    visible: Boolean
  }
};
</script>

<style>
.toast {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.9;
}
</style>
