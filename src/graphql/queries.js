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

// get ueser id when user signing in
const GET_DATA_OF_USER_FOR_LOGE_IN_WITH_USERNAME = gql`
    query MyQuery($name_email: String!) {
        registeredUser(where: { userName: $name_email }) {
            id
            psassword
        }
    }
`;

const GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL = gql`
    query MyQuery($name_email: String!) {
        registeredUser(where: { email: $name_email }) {
            id
            psassword
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
    GET_DATA_OF_USER_FOR_LOGE_IN_WITH_USERNAME,
    GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL,
    GET_USER_INFO_FOR_LOGED_IN_USER,
};
