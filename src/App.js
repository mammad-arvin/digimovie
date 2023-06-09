import React from "react";

// roter dom
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./Layout/index";
import Report from "./components/news/Report";
import SignIn from "./components/signIn_signUp/SignIn";
import SignUp from "./components/signIn_signUp/SignUp";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/:LocalSlug" element={<Report />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/movies/:LocalSlug" element={<Movie />} />
            </Routes>
        </Layout>
    );
}

export default App;
