import React from "react";

// roter dom
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./Layout/index";
import Report from "./components/news/Report";
import SignIn from "./components/signIn_signUp/SignIn";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/news/:LocalSlug?" element={<Report />} />
                <Route path="/signin" element={<SignIn/>} />
            </Routes>
        </Layout>
    );
}

export default App;
