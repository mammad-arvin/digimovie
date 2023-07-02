import { gql } from "@apollo/client";

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
            comment {
                id
                description
                spoil
                createdAt
                disLikes
                upLikes
                registeredUsercomment {
                    userName
                }
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
            likedContent
            favoriteMovies
        }
    }
`;

const GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL = gql`
    query MyQuery($name_email: String!) {
        registeredUser(where: { email: $name_email }) {
            id
            psassword
            likedContent
            favoriteMovies
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

// get news Slug for random Othre news
const GET_NEWS_SLUGS = gql`
    query MyQuery {
        newss {
            slug
        }
    }
`;

// get data for Home Gallery
const GET_HOME_GALLERY_DATA = gql`
    query MyQuery {
        movies {
            slug
            title
            images {
                url
            }
            htmlOfRate {
                text
            }
            quality
        }
    }
`;

// Get data of movie
const GET_MOVIE_DATA = gql`
    query MyQuery($slug: String!) {
        movie(where: { slug: $slug }) {
            id
            slug
            title
            littleDescription
            trilerUrl
            quality
            year
            ages
            ccBooleans
            duration
            giftCounter
            description {
                html
            }
            htmlOfRate {
                text
            }
            images {
                url
            }
            movieComments {
                id
                createdAt
                description
                disLikes
                spoil
                upLikes
                registeredUsercomment {
                    userName
                }
            }
            movieLinks {
                qualityTitle
                render
                size
                link
                encoder
            }
            rate {
                rate
            }
        }
    }
`;

export {
    GET_FILMS_DETAILS_FOR_SEARCH,
    GET_FOOTER_NEWS_GALLERY,
    GET_REPORT_OF_NEWS,
    GET_DATA_OF_USER_FOR_LOGE_IN_WITH_USERNAME,
    GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL,
    GET_USER_INFO_FOR_LOGED_IN_USER,
    GET_NEWS_SLUGS,
    GET_HOME_GALLERY_DATA,
    GET_MOVIE_DATA,
};
