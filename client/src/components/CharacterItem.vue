<template>
    <div class="wrapper">
        <h1>{{ character.name }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'CharacterItem',
        props: ['character']
    }
</script>

<style type="scss">
    .wrapper {
        align-items: center;
        background-color: darkmagenta;
        color: aliceblue;
        display: flex;
        height: 350px;
        width: 250px;
    }
</style>