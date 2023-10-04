import React, { useEffect } from "react";

// roter dom
import { Routes, Route, useLocation } from "react-router-dom";

// components
import { Layout, Report, SignIn, SignUp, Home, Movies, Movie, FavoriteMovies, NotFound} from './_components.js';

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
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
