<template>
  <div class="home">
    <div v-if="$apollo.loading">Loading...</div>
    <character-list :characters="characters"></character-list>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import CharacterList from '../components/CharacterList.vue'

  export default {
    name: 'Home',
    computed: {
      ...mapState(['characters']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchCharacters');
    },
    components: {
      CharacterList
    }
  }
</script>

<style type="scss">
  @media screen and (min-width: 1440px) {
    .home {
      margin: 0 auto;
      width: 1440px;
    }
  }
</style>