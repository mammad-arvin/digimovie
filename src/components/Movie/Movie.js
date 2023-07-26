import React from "react";

// mutation
import { useQuery } from "@apollo/client";
import { GET_MOVIE_DATA } from "../../graphql/queries";

// router dom
import { useParams } from "react-router-dom";

// components
import Path from "../../shared/Path";
import Details from "./smallComponents/Details";
import LinerLoading from "../../shared/LinerLoading";

// helper functions
import { titleChanger } from "../../helpers/helperFunctions";

const Movie = () => {
    const { LocalSlug } = useParams();

    const { loading, data } = useQuery(GET_MOVIE_DATA, {
        variables: {
            slug: LocalSlug,
        },
    });

    if (data) {
        var { title, slug } = data.movie;
    }

    // title changer
    titleChanger(`دانلود فیلم ${title}`);

    return (
        <>
            {/* path */}
            {data && (
                <Path
                    category={{ t: "دانلود فیلم", l: "/movies" }}
                    title={"دانلود فیلم" + " " + title}
                    slug={slug}
                />
            )}

            {/* movie details */}
            {data && <Details data={data.movie} />}

            {/* loading */}
            {loading && <LinerLoading />}
        </>
    );
};

export default Movie;
