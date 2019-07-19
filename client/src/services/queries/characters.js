import gql from 'graphql-tag'

export const ALL_CHARACTERS_QUERY = gql`
        fragment characterFields on Character {
            ... on Dragon {
                element
            }
            ... on Human {
                weapon
            }
        }
        query {
            characters {
                __typename
                id
                name
                ...characterFields
            }
        }
`