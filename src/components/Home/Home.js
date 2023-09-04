import React from "react";

// component
import Gallery from "./Gallery";
import HomeSuggestions from "./HomeSuggestions";

const Home = () => {
    return (
        <>
            <Gallery />

            {/* show suggestion of movie & series and other */}
            <HomeSuggestions />
        </>
    );
};

export default Home;
