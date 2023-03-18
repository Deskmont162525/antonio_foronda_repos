<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
    },
};
</script>

<template>
    <div class="Container-principal__form__content" >
        <label :for="name" class="Container-principal__form__content__label">{{ label }}</label>
        <input :id="name" :type="type" class="Container-principal__form__content__input" />
    </div>
</template>


<style lang="scss">
@import './inputTypeStyle.scss';
</style>