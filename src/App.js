import React, { useEffect } from "react";

// roter dom
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Layout from "./Layout/index";
import Report from "./components/news/Report";
import SignIn from "./components/signIn_signUp/SignIn";
import SignUp from "./components/signIn_signUp/SignUp";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import FavoriteMovies from "./components/Favorite movie/FavoriteMovies";

function App() {
    // page will be scroll to top when pathname change
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: "smooth",
            },
            [pathname]
        );
    });

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/:LocalSlug" element={<Report />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:LocalSlug" element={<Movie />} />
                <Route path="/favorite" element={<FavoriteMovies />} />
            </Routes>
        </Layout>
    );
}

export default App;
