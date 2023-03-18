<template>
  <div class="container">
    <NavBarLogin :toggle-state="toggleState" />

    <div v-if="state">
      <LoginForm />
    </div>
    <div v-else>
      <FormRegistro />
    </div>
   
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      state: false,
    };
  },
  methods: {
    toggleState() {
      this.state = !this.state;
    },
  },
};
</script>