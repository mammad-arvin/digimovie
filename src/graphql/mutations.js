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
    mutation changerLikes($slug: String! , $liks: Int!){
        updateNews(data: { liks: $liks }, where: { slug: $slug }){
            id
        }
        publishNews(where: { slug: $slug }) {
            id
        }
    }
`;

export { SEND_PAGE_VIEWS, iNCREASE_AND_DECREASE_LIKS };
