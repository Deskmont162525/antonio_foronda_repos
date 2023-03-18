<script>
export default {
    name: 'ButtomSubmit1',
    props: {
        name: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        }
    }
};
</script>

<template>
    <button class="custom-button" @click="onClick">
        {{ name }}
    </button>
</template>
  
  
  
<style lang="scss">
.custom-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 185px;
    gap: 10px;

    width: 446px;
    height: 54px;
    left: 0px;
    top: 16px;

    background: #248AFF;
    border-radius: 6px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}
</style>