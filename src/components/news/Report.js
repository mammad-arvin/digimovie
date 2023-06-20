import React from "react";

// component
import Path from "../../shared/Path";
import PageViews from "../../shared/PageViews";
import ShowTimeAgo from "../../shared/ShowTimeAgo";
import Liks from "../../shared/Liks";
import LinerLoading from "../../shared/LinerLoading";
import OtherNews from "./OtherNews";
import Comments from "../../shared/Comments/Comments";

// mui
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "mui-image";

// helper fuction
import { titleChanger } from "../../helpers/helperFunctions";

// graphql
import { useQuery } from "@apollo/client";
import { GET_REPORT_OF_NEWS } from "../../graphql/queries";
import { Link, useParams } from "react-router-dom";

// icons
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Report = ({ otherSlug }) => {
    const {
        palette: { text, mode },
    } = useTheme();

    const params = useParams();

    let localSlug;
    otherSlug ? (localSlug = otherSlug) : (localSlug = params.LocalSlug);

    const { loading, data } = useQuery(GET_REPORT_OF_NEWS, {
        variables: {
            slug: localSlug,
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
            comment,
        } = data.news;
    }

    // title changer
    titleChanger(`${title}`);

    return (
        <>
            {/* show the path thar use in ther. */}
            {!otherSlug && (
                <Path
                    category={{ t: "اخبار", l: "/news" }}
                    title={title}
                    slug={slug}
                />
            )}

            {/*content of report  */}
            <Grid
                container
                xs={12}
                md={10.8}
                sx={
                    otherSlug && {
                        height: { xs: "540px", sm: "460px" },
                        overflow: "hidden",
                    }
                }
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
                <Link to={"/news/" + slug}>
                    <Image
                        src={url}
                        sx={{
                            borderRadius: "30px",
                            height: { md: "80vh", lg: "100vh" },
                        }}
                    />
                </Link>

                {/* icons */}
                {data && (
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
                                    {data && comment.length}
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
                {videoLink && !otherSlug && (
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

            {/* other news */}
            {!otherSlug && data && (
                <Grid
                    container
                    xs={12}
                    md={11.4}
                    color={text.primary}
                    justifyContent={"center"}
                    mb="40px"
                    sx={{ gap: { sm: "10px", md: "0px" } }}
                    zIndex={1}
                >
                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        justifyContent={"center"}
                        mt={"35px"}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                maxWidth: "140px",
                                borderBottom: "2px solid orange",
                                marginBottom: "25px",
                            }}
                        >
                            دیگر اخبار
                        </Typography>
                    </Grid>
                    <OtherNews />
                </Grid>
            )}

            {/* Comments */}
            {!otherSlug && data && (
                <Grid container justifyContent={"center"} zIndex={1}>
                    <Comments comments={comment} />
                </Grid>
            )}

            {/* loading */}
            {loading && <LinerLoading />}
        </>
    );
};

export default Report;
