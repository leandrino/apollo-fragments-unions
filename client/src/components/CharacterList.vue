<template>
    <div class="character-list">
        <character-item
                v-for="character in characters"
                :key="character.id"
                :character="character">
        </character-item>
    </div>
</template>

<script>
    import CharacterItem from "./CharacterItem";
    export default {
        name: 'CharacterList',
        props: ['characters'],
        components: {
            CharacterItem
        }
    }
</script>

<style type="scss">
    .character-list {
        display: grid;
        grid-gap: 20px;
    }
    @media screen and (min-width: 768px) {
        .character-list {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>