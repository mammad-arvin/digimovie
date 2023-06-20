import { gql } from "@apollo/client";

const SEND_PAGE_VIEWS = gql`
    mutation updateNews($IncreaseViews: Int!, $slug: String!) {
        updateNews(data: { pageview: $IncreaseViews }, where: { slug: $slug }) {
            slug
            pageview
        }
        publishNews(where: { slug: $slug }) {
            id
        }
    }
`;

// in_de_crease liks
const iNCREASE_AND_DECREASE_LIKS = gql`
    mutation changerLikes($slug: String!, $liks: Int!) {
        updateNews(data: { liks: $liks }, where: { slug: $slug }) {
            id
        }
        publishNews(where: { slug: $slug }) {
            id
        }
    }
`;

// send and publish USER likedContent
const SEND_USER_LIKED_CONTENT = gql`
    mutation MyMutation($userId: ID!, $likedContent: Json!) {
        updateRegisteredUser(
            data: { likedContent: $likedContent }
            where: { id: $userId }
        ) {
            id
        }
        publishRegisteredUser(where: { id: $userId }) {
            id
        }
    }
`;

// create user
const CREATE_USER = gql`
    mutation MyMutation(
        $userName: String!
        $email: String!
        $passWord: String!
        $phone: String!
    ) {
        createRegisteredUser(
            data: {
                userName: $userName
                email: $email
                phone: $phone
                psassword: $passWord
            }
        ) {
            id
        }
        publishRegisteredUser(where: { userName: $userName }) {
            id
            likedContent
        }
    }
`;

// create comment
const CREATE_COMMENT_IN_NEWS = gql`
    mutation MyMutation(
        $userId: ID
        $slug: String!
        $spoil: Boolean!
        $comentText: String!
    ) {
        createComment(
            data: {
                description: $comentText
                spoil: $spoil
                registeredUsercomment: { connect: { id: $userId } }
                news: { connect: { slug: $slug } }
            }
        ) {
            id
        }
    }
`;

export {
    SEND_PAGE_VIEWS,
    iNCREASE_AND_DECREASE_LIKS,
    SEND_USER_LIKED_CONTENT,
    CREATE_USER,
    CREATE_COMMENT_IN_NEWS,
};
