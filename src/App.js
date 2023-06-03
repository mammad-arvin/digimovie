import React from "react";

// roter dom
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./Layout/index";
import Report from "./components/news/Report";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/news/:LocalSlug?" element={<Report />} />
            </Routes>
        </Layout>
    );
}

export default App;
