<script>
import InputType from '../../ui/InputType/InputType.vue';
export default {
    data() {
        return {
            inputName: 'email',
            inputLabel: 'Email Address',
            inputType: 'email',
        };
    },
    components: { InputType }
}
</script>

<template>
    <div class="Container-principal__form">
        <div class="Container-principal__form__content">
            <h2>Enter your credentials</h2>
            <InputType :name="inputName" :label="inputLabel" :type="inputType" />
        </div>
    </div>
</template>
  

  
<style lang="scss">
/* Estilos específicos del componente */
@import './formLoginStyle.scss';
</style>