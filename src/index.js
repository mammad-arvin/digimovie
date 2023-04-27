import * as React from "react";
import ReactDOM from "react-dom/client";

// style
import "./index.css";

// Component
import App from "./App";

// theme changer warped all component
import ThemeChanger from "./mui/ThemeChanger";

// Graph Apollo Provder
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_URL,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <ThemeChanger>
            <App />
        </ThemeChanger>
    </ApolloProvider>
);
