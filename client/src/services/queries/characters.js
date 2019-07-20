import gql from 'graphql-tag'

export const ALL_CHARACTERS_QUERY = gql`    
        query {
            characters {
                __typename
                id
                name
                ... on Dragon {
                    element
                }
                ... on Human {
                    weapon
                }
            }
        }
`

// import gql from 'graphql-tag'
//
// export const ALL_CHARACTERS_QUERY = gql`
//     fragment characterFields on Character {
//         ... on Dragon {
//             id
//             name
//             element
//         }
//         ... on Human {
//             id
//             name
//             weapon
//         }
//     }
//     query {
//         characters {
//             __typename
//             ...characterFields
//         }
//     }
// `