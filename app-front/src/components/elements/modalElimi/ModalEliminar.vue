<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-overlay" @click="handleCloseModal"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
    <button @click="handleOpenModal">{{ buttonLabel }}</button>
  </template>
  
  <script>
    export default {
      props: {
        buttonLabel: {
          type: String,
          required: true
        }
      },
      data() {
        return {
          isOpen: false
        }
      },
      methods: {
        handleOpenModal() {
          this.isOpen = true;
          document.body.style.overflow = 'hidden'; // Evita el scroll en la página cuando el modal está abierto
        },
        handleCloseModal() {
          this.isOpen = false;
          document.body.style.overflow = ''; // Restaura el scroll de la página cuando el modal se cierra
        }
      }
    }
  </script>

  