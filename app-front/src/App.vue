<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="blue">

    <!-- Parte azul de bienvenida -->
    <section class="blue__container">
            <div class="blue__logo">
                <span>Logo</span>
            </div>
            <div class="blue__welcome-txt">
                <p>¡Welcome!</p> 
                <p>Sign to start</p>
            </div>
        </section>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@import '@/assets/styles/navbarStyles.scss';
</style>
