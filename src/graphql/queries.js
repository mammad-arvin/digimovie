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

// footer news gallery
const GET_FOOTER_NEWS_GALLERY = gql`
    query MyQuery {
        newss {
            id
            slug
            title
            image {
                url
            }
        }
    }
`;

// evry news query
const GET_REPORT_OF_NEWS = gql`
    query getReport($slug: String!) {
        news(where: { slug: $slug }) {
            image {
                url
            }
            description {
                html
            }
            liks
            pageview
            slug
            title
            videoLink
            uploadDate
            comments {
                id
                description
            }
        }
    }
`;

// get username of loged in user
const GET_USER_INFO_FOR_LOGED_IN_USER = gql`
    query MyQuery($userId: ID!) {
        registeredUser(where: { id: $userId }) {
            userName
        }
    }
`;

export {
    GET_USERS,
    GET_FILMS_DETAILS_FOR_SEARCH,
    GET_FOOTER_NEWS_GALLERY,
    GET_REPORT_OF_NEWS,
    GET_USER_INFO_FOR_LOGED_IN_USER,
};
