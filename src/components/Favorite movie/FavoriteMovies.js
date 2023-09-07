import React from "react";

// query
import { useQuery } from "@apollo/client";
import { GET_FAVORITE_MOVIE_DATA } from "../../graphql/queries";

// mutation
import { useMutation } from "@apollo/client";
import { SEND_USER_FAVORITE_MOVIES } from "../../graphql/mutations";

// MUI
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// components
import Path from "../../shared/Path";
import { moviePoster } from "../Movies/Movies";

// icons
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const FavoriteMovies = () => {
    const {
        palette: { text },
    } = useTheme();

    // localstorage
    const favedMovie = JSON.parse(localStorage.getItem("favoriteMovies"));
    const userId = localStorage.getItem("userId");

    // query
    const { data } = useQuery(GET_FAVORITE_MOVIE_DATA, {
        variables: {
            favedMovie,
        },
    });

    // mutation
    const [sendFaved] = useMutation(SEND_USER_FAVORITE_MOVIES);

    // delete handler
    const deleteHandler = (slug) => {
        const result = window.confirm("آیا برای حذف این آیتم اطمینان دارید؟");

        const favMov = JSON.parse(localStorage.getItem("favoriteMovies"));

        if (result) {
            favMov.map(
                (item, index) => item === slug && favMov.splice(index, 1)
            );

            // set to local storage
            localStorage.setItem("favoriteMovies", JSON.stringify(favMov));

            // send and update the data on server
            sendFaved({
                variables: {
                    favoriteMovies: favMov,
                    userId,
                },
            });
        }
    };

    return (
        <>
            {/* path  */}
            <Path category={{ t: "لیست علاقه مندی", l: "/favorite" }} />

            {/* favorited movies  */}
            {data && (
                <Grid
                    container
                    width={{ xs: "105%", sm: "100%" }}
                    color={text.primary}
                    mb={9}
                    zIndex={1}
                >
                    {/* text */}
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        mb="20px"
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                mb: "15px",
                                borderBottom: "2px solid #EB8307",
                            }}
                        >
                            لیست علاقه مندی
                        </Typography>
                    </Box>

                    {/* movies poster */}
                    {data.movies.length > 0 ? (
                        <Grid
                            item
                            xs={12}
                            md={11.5}
                            lg={10.8}
                            margin={"0 auto"}
                        >
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(auto-fit ,181px)"
                                justifyContent="space-around"
                                alignItems="center"
                                rowGap="20px"
                                pt="5px"
                                sx={{ direction: "ltr" }}
                            >
                                {data.movies.map((item) => (
                                    <Box position="relative" key={item.slug}>
                                        {moviePoster(item)}

                                        {/* delete Icon */}
                                        <DeleteForeverOutlinedIcon
                                            sx={{
                                                width: "30px",
                                                height: "30px",
                                                color: "#ff3d3d",
                                                borderRadius: "5px",
                                                background: "#fff",
                                                position: "absolute",
                                                top: "7px",
                                                right: "7px",
                                                zIndex: "5",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    opacity: ".7",
                                                },
                                            }}
                                            onClick={() =>
                                                deleteHandler(item.slug)
                                            }
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ) : (
                        <Box
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            zIndex={1}
                        >
                            <Typography
                                variant="p"
                                fontSize={{
                                    xs: "15px",
                                    sm: "20px",
                                    md: "26px",
                                }}
                            >
                                لیست علاقه مندی شما خالیست ابتدا موردی را اضافه
                                کنید.
                            </Typography>
                        </Box>
                    )}
                </Grid>
            )}
        </>
    );
};

export default FavoriteMovies;
