<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="main-container">
      <header class="text-center py-3">
        <FormTitle />
      </header>
      <slot name="form" />
    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
  .main-container {
    max-width: 85vw;
    margin: auto;
  }
</style>
