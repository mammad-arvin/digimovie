import { gql } from "@apollo/client";
const GET_USERS = gql`
    query MyQuery {
        registeredUsers {
            id
            userName
        }
    }
`;

export { GET_USERS };
