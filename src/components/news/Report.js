import React from "react";

// component
import Path from "../../shared/Path";

// mui
import { Box, Grid , Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "mui-image";

// helper fuction
import { titleChanger } from "../../helpers/helperFunctions";

// graphql
import { useQuery } from "@apollo/client";
import { GET_REPORT_OF_NEWS } from "../../graphql/queries";
import { useParams } from "react-router-dom";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Report = () => {
    const {
        palette: { text },
    } = useTheme();

    const { slug } = useParams();

    const { loading, data, error } = useQuery(GET_REPORT_OF_NEWS, {
        variables: {
            slug: slug,
        },
    });

    if (data) {
        var {
            // id,
            image: { url },
            description: { html },
            liks,
            // slug,
            title,
            videoLink,
            uploadDate,
            comments: { id },
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
                fontFamily="iranYekan"
                p="15px"
                pb="30px"
                mb="40px"
                gap="15px"
                borderRadius="30px"
                bgcolor="#1D1D1D"
                zIndex={2}
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
                <Grid container xs={12}
                //  bgcolor="green"
                 >
                    <Grid
                        item
                        // xs={4}
                        p="8px 10px"
                        borderRadius="20px"
                        bgcolor="#3A3A3A"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap="7px"
                    >

                        <FavoriteBorderIcon color="favMovie" sx={{fontSize:"20px"}} />
                        {/* <FavoriteIcon color="favMovie" sx={{fontSize:"20px"}}/> */}
                        <Typography>{liks}</Typography>
                    </Grid>
                    <Grid item xs={8}></Grid>
                </Grid>

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
        </>
    );
};

export default Report;
