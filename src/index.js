import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//  mui default theme
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

// apollo
const client =new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_URL,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </ApolloProvider>
);
