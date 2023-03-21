<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay"></div>
    <div class="">
      <slot><img src="../../../assets/images/images-gif/peruba1.gif" alt=""></slot>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
}
</script>

  