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
    <div class="form-group" :style="{ marginTop: '16px', marginBottom: '16px' }">
        <label :for="name" class="form-label">{{ label }}</label>
        <input :id="name" :type="type" class="form-input" />
    </div>
</template>


<style lang="scss">
.form-group {
    position: relative;
    width: 447px;
    height: 76px;

    .form-label {
        position: absolute;
        width: 109px;
        height: 19px;
        left: 0px;
        top: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #4A4844;
    }

    .form-input {
        box-sizing: border-box;
        position: absolute;
        width: 447px;
        height: 57px;
        left: 0px;
        top: 27px;
        background: #FFFFFF;
        border: 2px solid #E5E5E5;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #4A4844;
        padding: 12px;
    }
}
</style>