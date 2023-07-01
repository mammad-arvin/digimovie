import React from "react";

// MUI
import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

// mutation
import { useQuery } from "@apollo/client";
import { GET_MOVIE_DATA } from "../../graphql/queries";

// router dom
import { useParams } from "react-router-dom";

// components
import Path from "../../shared/Path";

const Movie = () => {
    const {
        palette: { text, mode },
    } = useTheme();

    const { LocalSlug } = useParams();

    const { loading, data, error } = useQuery(GET_MOVIE_DATA, {
        variables: {
            slug: LocalSlug,
        },
    });
    data && console.log(data);

    if (data) {
        var { title, slug } = data.movie;
    }
    return (
        <>
            {/* path */}
            <Path
                category={{ t: "دانلود فیلم", l: "/movies" }}
                title={"دانلود فیلم" + " " + title}
                slug={slug}
            />

            {/* movie details */}
            {data && (
                <Box
                    color={text.primary}
                    display={"flex"}
                    justifyContent={"center"}
                    mt="30px"
                    zIndex={1}
                    width={"105%"}
                    height={"800px"}
                    sx={{
                        background: `url(${data.movie.images[0].url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            backdropFilter: "brightness(50%)",
                        }}
                    >
                        <Grid
                            container
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <Grid
                                item
                                xs={12}
                                md={10.25}
                                display={"flex"}
                                justifyContent={"center"}
                            ></Grid>
                        </Grid>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Movie;
