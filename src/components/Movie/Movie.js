import React from "react";

// MUI
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

// mutation
import { useQuery } from "@apollo/client";
import { GET_MOVIE_DATA } from "../../graphql/queries";

// router dom
import { useParams } from "react-router-dom";

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

    return (
        <>
            {data && (
                <Box
                    color={text.primary}
                    mt="30px"
                    zIndex={1}
                    width={"110%"}
                    height={"800px"}
                    sx={{
                        background: `url(${data.movie.images[0].url})`,
                        backgroundSize: "cover",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            backdropFilter: "brightness(50%)",
                        }}
                    ></Box>
                </Box>
            )}
        </>
    );
};

export default Movie;
