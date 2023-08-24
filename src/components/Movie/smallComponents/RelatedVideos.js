import React from "react";

// component
import NastedList from "../../../shared/NastedList";

// mui
import { Box } from "@mui/material";

// function for create any movie poster
import { moviePoster } from "../../Movies/Movies";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_RELATED_VIDEO } from "../../../graphql/queries";

//gallery pakage
import Carousel from "nuka-carousel";

//  gallery buttons was modified to arrow icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// arow Style
const arowStyle = {
    fontSize: "27px",
    color: "#FFF",
    background: "rgba(0, 0, 0 ,.7)",
    borderRadius: "50%",
    p: "5px",
    position: "relative",
    top: "-3px",
    cursor: "pointer",
};

const RelatedVideos = ({ refrenceData, movieSlug }) => {
    // get inner width to costomize gallery of actor in any view point
    let widthSize = window.innerWidth;

    // get genres for get related video
    const movieGenres = refrenceData
        .filter((item) => item.__typename === "Genres")
        .map((item) => item.genre);

    // Query
    const { data } = useQuery(GET_RELATED_VIDEO, {
        variables: {
            movieGenres,
        },
    });

    //related video and delete same movie item
    let related = [];

    if (data) {
        data.genress.map(
            (item) =>
                (related = [
                    ...related,
                    ...item.movies.filter((movie) => movie.slug !== movieSlug),
                ])
        );
    }

    //  delete duplicate items
    if (related) {
        related.map((item, index) =>
            related.map(
                (itm, idx) =>
                    item.slug === itm.slug &&
                    index !== idx &&
                    related.splice(index, 1)
            )
        );
    }

    return (
        <>
            {data && (
                <NastedList title={"فیلم‌ های مرتبط"}>
                    <Box sx={{ direction: "ltr" }}>
                        <Carousel
                            renderCenterLeftControls={({ previousSlide }) => (
                                <ArrowBackIosNewIcon
                                    sx={arowStyle}
                                    onClick={previousSlide}
                                />
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <ArrowForwardIosIcon
                                    sx={{ ...arowStyle, top: "0" }}
                                    onClick={nextSlide}
                                />
                            )}
                            adaptiveHeight="true"
                            autoplay="true"
                            autoplayInterval="10000"
                            cellSpacing={20}
                            slidesToShow={
                                widthSize > 880
                                    ? 4
                                    : widthSize > 640
                                    ? 3
                                    : widthSize > 460
                                    ? 2
                                    : 1
                            }
                        >
                            {related.map((item) => moviePoster(item))}
                        </Carousel>
                    </Box>
                </NastedList>
            )}
        </>
    );
};

export default RelatedVideos;
