import { gql } from "@apollo/client";
const GET_USERS = gql`
    query MyQuery {
        registeredUsers {
            id
            userName
        }
    }
`;

const GET_FILMS_DETAILS_FOR_SEARCH = gql`
    query MyQuery {
        movies {
            id
            title
            slug
            images {
                fileName
                url
            }
            manyRerence {
                ... on Genres {
                    genre
                }
            }
            rate {
                rate
            }
        }
    }
`;

export { GET_USERS, GET_FILMS_DETAILS_FOR_SEARCH };
