<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <character-item
            v-for="character in characters"
            :key="character.id"
            :character="character">
    </character-item>
  </div>
</template>

<script>
  import { ALL_CHARACTERS_QUERY } from '../services/queries/characters'
  import CharacterItem from '../components/CharacterItem.vue'

  export default {
    name: 'Home',
    data () {
      return {
        characters: [],
        loading: 0
      }
    },
    components: {
      CharacterItem
    },
    apollo: {
      characters: ALL_CHARACTERS_QUERY
    }
  }
</script>