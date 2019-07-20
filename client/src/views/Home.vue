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
  import { mapState } from 'vuex';
  import CharacterItem from '../components/CharacterItem.vue'

  export default {
    name: 'Home',
    computed: {
      ...mapState(['characters']),
    },
    beforeCreate() {
      // `1` is the ID of the book we want to fetch.
      this.$store.dispatch('fetchCharacters');
    },
    components: {
      CharacterItem
    }
  }
</script>