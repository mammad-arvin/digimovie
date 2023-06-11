import React, { useState } from "react";

// component
import Path from "../../shared/Path";
import PageViews from "../../shared/PageViews";
import ShowTimeAgo from "../../shared/ShowTimeAgo";
import Liks from "../../shared/Liks";
import LinerLoading from "../../shared/LinerLoading";

// mui
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "mui-image";

// helper fuction
import { titleChanger } from "../../helpers/helperFunctions";

// graphql
import { useQuery } from "@apollo/client";
import { GET_REPORT_OF_NEWS } from "../../graphql/queries";
import { useParams } from "react-router-dom";

// icons
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Report = () => {
    const {
        palette: { text, mode },
    } = useTheme();

    const { LocalSlug } = useParams();

    const { loading, data, error } = useQuery(GET_REPORT_OF_NEWS, {
        variables: {
            slug: LocalSlug,
        },
    });

    if (data) {
        var {
            image: { url },
            description: { html },
            liks,
            pageview,
            slug,
            title,
            videoLink,
            uploadDate,
            comments,
        } = data.news;
    }

    // title changer
    titleChanger(`${title}`);

    return (
        <>
            {/* show the path thar use in ther. */}
            <Path
                category={{ t: "اخبار", l: "/news" }}
                title={title}
                slug={slug}
            />

            {/*content of report  */}
            <Grid
                container
                xs={12}
                md={10.8}
                color={text.primary}
                p="15px"
                pb="30px"
                mb="40px"
                gap="15px"
                borderRadius="30px"
                bgcolor={mode === "dark" ? "#1D1D1D" : "#FFFFFF"}
                zIndex={1}
            >
                {/* cover Image */}
                <Image
                    src={url}
                    sx={{
                        borderRadius: "30px",
                        widht: "99%",
                        height: { md: "80vh", lg: "100vh" },
                    }}
                />

                {/* icons */}
                {!loading && (
                    <Grid container xs={12} justifyContent="space-between">
                        {/* Liks  Grid */}
                        <Liks liks={liks} slug={slug} />

                        <Grid
                            item
                            xs={9}
                            display="flex"
                            gap="20px"
                            sx={{ direction: "ltr" }}
                        >
                            {/* date of write | time ago */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="5px"
                            >
                                <ShowTimeAgo date={uploadDate} />
                                <CalendarMonthIcon />
                            </Stack>

                            {/* comment counter */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="5px"
                            >
                                <Typography>
                                    {data && comments.length}
                                </Typography>
                                <InsertCommentIcon />
                            </Stack>

                            {/* page views */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="5px"
                            >
                                <PageViews pageview={pageview} slug={slug} />
                                <RemoveRedEyeOutlinedIcon />
                            </Stack>
                        </Grid>
                    </Grid>
                )}

                {/* details */}
                <Box
                    variant="div"
                    className="details"
                    gap="15px"
                    mb="15px"
                    dangerouslySetInnerHTML={{ __html: html }}
                ></Box>

                {/* video player */}
                {videoLink && (
                    <Box variant="div" display="flex" justifyContent="center">
                        <video
                            width="98%"
                            style={{
                                borderBottomRightRadius: "20px",
                                borderBottomLeftRadius: "20px",
                            }}
                            src={videoLink}
                            controls
                        ></video>
                    </Box>
                )}
            </Grid>
            {loading && <LinerLoading />}
        </>
    );
};

export default Report;
