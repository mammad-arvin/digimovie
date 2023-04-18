import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "./graphql/queries";

function App() {
    const { loading, data, error } = useQuery(GET_USERS);
    console.log(loading);
    console.log(data);
    console.log(err);
    // const registeredUsers = data.registeredUsers;
    // console.log(registeredUsers);

    return (
        <>
            <AppBar position="sticky" color="warning">
                <Toolbar>
                    <Typography
                        variant="h2"
                        component="h3"
                        fontWeight="light"
                        // spacing={4}
                    >
                        salam pesaram moohammad hadi arvin
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* <div>
                {registeredUsers &&
                    registeredUsers.map((user) => <p>{user.userName}</p>)}
            </div> */}

            <div>
                {
                    data ? <p>hassssssst</p> : <p>nnnnnnnnnnnnniiiiiiiiiiiiiiiist</p>
                }
            </div>
        </>
    );
}

export default App;
