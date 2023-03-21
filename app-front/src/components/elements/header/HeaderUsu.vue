<template>
  <header class="header-main">
    <div class="d-flex-sb d-flex w-100">
      <div class="header-main__search-bar">
        <input v-if="!state" type="text" placeholder="Search" />
        <img v-if="!state" :src="imagen1" alt="" />
      </div>
      <div class="d-flex-cent m-r-40 m-t-r-20">
        <button class="header-main__add-btn btn-principal--primary" @click="toggleState()">
          <img :src="state ? imagen4 : imagen3" alt="" />
          NEW
        </button>
        <div class="user-profile d-flex-cent">
          <span class="user-name">{{ user.name }}</span>
          <img class="user-avatar" :src="imagen2" alt="Avatar de usuario" />
        </div>
      </div>
    </div>
  </header>
</template>
  
<script>
import icoPlus from '@/assets/icons/+.svg';
import icoLess from '@/assets/icons/-.svg';
import icoSearch from '@/assets/icons/Vector.svg';
import avatarImagen from '@/assets/icons/Ellipse.png';

export default {
  props: {
    toggleState: {
      type: Function,
      required: true
    },
    state: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      user: {
        name: '',
        avatar: 'ruta/a/avatar.png'
      },
      imagen1: icoSearch,
      imagen2: avatarImagen,
      imagen3: icoPlus,
      imagen4: icoLess
    };
  },
  mounted() {
    const token = this.$cookies.get('authUsuarioOMG')
    this.user.name = token?.dataUser?.id?.name

  }
};
</script>