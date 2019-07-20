<template>
    <div class="character-item">
        <h1>{{ character.name }}</h1>
        <p class="character-item__hability" v-if="character.element">{{ character.element }}</p>
        <p class="character-item__hability" v-if="character.weapon">{{ character.weapon }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CharacterItem',
        props: ['character']
    }
</script>

<style type="scss">
    .character-item {
        align-items: center;
        background-color: #42b983;
        border-radius: 15px;
        color: #f4f4f4;
        display: flex;
        flex-flow: column wrap;
        height: 350px;
        justify-content: center;
        width: 100%;
    }
    .character-item__hability {
        font-weight: 600;
        text-transform: uppercase;
    }
</style>