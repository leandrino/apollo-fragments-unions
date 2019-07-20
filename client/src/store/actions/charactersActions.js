import {apolloClient} from "../../services/apolloClient";
import {ALL_CHARACTERS_QUERY} from '../../services/queries/characters';

export const fetchCharacters = async ({ commit }, id) => {
    const response = await apolloClient.query({
        query: ALL_CHARACTERS_QUERY,
        variables: { bookId: id },
    });

    commit('setCharacters', response.data.characters);
};