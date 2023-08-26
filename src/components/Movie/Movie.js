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
import DownloadLinks from "./smallComponents/DownloadLinks";
import MovieActors from "./smallComponents/MovieActors";
import RelatedVideos from "./smallComponents/RelatedVideos";
import NastedList from "../../shared/NastedList";
import Comments from "../../shared/Comments/Comments";

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
            {data && (
                <>
                    {/* path */}
                    <Path
                        category={{ t: "دانلود فیلم", l: "/movies" }}
                        title={"دانلود فیلم" + " " + title}
                        slug={slug}
                    />
                    {/* movie details */}
                    <Details data={data.movie} />

                    {/* download links */}
                    <DownloadLinks data={data.movie} />

                    {/* Movie Actors */}
                    <MovieActors data={data.movie.manyRerence} />

                    {/* related Video */}
                    <RelatedVideos
                        refrenceData={data.movie.manyRerence}
                        movieSlug={slug}
                    />

                    {/* comments */}
                    <NastedList title={"نظرات"}>
                        <Comments
                            comments={data.movie.movieComments}
                            nastedList={true}
                        />
                    </NastedList>
                </>
            )}
            {/* loading */}
            {loading && <LinerLoading />}
        </>
    );
};

export default Movie;
