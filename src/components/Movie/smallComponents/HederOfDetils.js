import React from "react";

import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

// icons
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

// component
import Favorite from "../../../shared/Favorite";

// styled
import { RateStyle } from "../../Home/Gallery";

// images
import ImdbLogo from "../../Home/imdb.png";
import { Link } from "react-router-dom";

const HederOfDetils = ({ data }) => {
    const {
        title,
        movieComments,
        slug,
        htmlOfRate: { text },
        imdbVotesCount,
        imdbLink,
    } = data;

    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={9.5}
                    height={"100px"}
                    display={"flex"}
                    alignItems={"center"}
                    pr={1.5}
                >
                    <Stack gap={"10px"}>
                        <Typography variant="p" fontSize={"24px"}>
                            دانلود فیلم {title}
                        </Typography>

                        {/* comment counter */}
                        <Box display={"flex"} alignItems={"center"} gap="5px">
                            <ChatRoundedIcon sx={{ fontSize: "16px" }} />
                            <Typography variant="p" fontSize={"14.4px"}>
                                <h6
                                    style={{
                                        display: "inline-block",
                                        color: "#EB8307",
                                        fontSize: "14.4px",
                                    }}
                                >
                                    {movieComments.length}
                                </h6>{" "}
                                Comments
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>

                {/* rate and favorite */}
                <Grid item xs={12} sm={2.5} height={"100px"}>
                    <Box
                        height={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p={"0 10px"}
                    >
                        {/* favBTN */}
                        <Favorite slug={slug} />

                        {/* rete */}
                        <Stack spacing={0.8}>
                            <RateStyle
                                sx={{
                                    "span:first-of-type": {
                                        color: "#66CC33",
                                    },
                                }}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                            <Divider
                                sx={{
                                    background: "#ff9800",
                                }}
                            />
                            <Typography variant="p" fontFamily={"lato"}>
                                {imdbVotesCount} Votes
                            </Typography>
                            <Box textAlign={"center"}>
                                <Link to={imdbLink} target="_blank">
                                    <img
                                        style={{
                                            width: "50px",
                                            height: "21px",
                                            borderRadius: "5px",
                                        }}
                                        src={ImdbLogo}
                                    />
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default HederOfDetils;
