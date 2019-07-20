import Vue from "vue";
import Vuex from "vuex";
import { setCharacters } from './mutations/charactersMutations';
import { characters } from "./state/charactersStore";
import { fetchCharacters } from "./actions/charactersActions";

Vue.use(Vuex);

export default new Vuex.Store({
    actions: { fetchCharacters },
    mutations: { setCharacters },
    state: { characters }
});
