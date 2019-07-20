import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory'
import Vue from 'vue'

Vue.config.productionTip = false

const httpLink = new HttpLink({
    uri: 'http://localhost:4000'
})

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
            types: []
            }
        }
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({ fragmentMatcher }),
    connectToDevTools: true
})











