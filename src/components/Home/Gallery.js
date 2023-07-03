import React from "react";

//gallery
import Carousel from "nuka-carousel";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// router-dom
import { Link } from "react-router-dom";

// query
import { useQuery } from "@apollo/client";
import { GET_HOME_GALLERY_DATA } from "../../graphql/queries";

// components
import Favorite from "../../shared/Favorite";

// icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HdIcon from "@mui/icons-material/Hd";

// image
import Imdb from "./imdb.png";

// style of image
import styled from "styled-components";
const GalleryImage = styled.img`
    width: 100%;
    height: 470px;
    border-radius: 12px;
    filter: brightness(70%);
    @media (max-width: 900px) {
        height: 445px;
    }
    @media (max-width: 626px) {
        height: 305px;
    }
    @media (max-width: 520px) {
        height: 235px;
    }
`;

// arow Style
const arowStyle = {
    fontSize: "30px",
    color: "#FFF",
    background: "rgba(0, 0, 0 ,.7)",
    borderRadius: "50%",
    m: "3px",
    p: "5px",
    position: "relative",
    top: "-3px",
    cursor: "pointer",
};

// rate style
export const RateStyle = styled(Box)`
    text-align: center;
    span:first-child {
        color: #ffc107;
        font: 700 24px lato;
    }
    span:last-child {
        font: 300 15.2px lato;
    }
`;

const Gallery = () => {
    // query
    const { loading, data } = useQuery(GET_HOME_GALLERY_DATA);

    return (
        <>
            <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                m="20px 0"
                zIndex={1}
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p="5px"
                    sx={{ direction: "ltr" }}
                    position={"relative"}
                >
                    {data && (
                        <Carousel
                            renderCenterLeftControls={({ previousSlide }) => (
                                <ArrowBackIosNewIcon
                                    sx={arowStyle}
                                    onClick={previousSlide}
                                />
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <ArrowForwardIosIcon
                                    sx={{ ...arowStyle, top: "0px" }}
                                    onClick={nextSlide}
                                />
                            )}
                            adaptiveHeight="true"
                            autoplay="true"
                            autoplayInterval="3500"
                            wrapAround="true"
                        >
                            {!loading &&
                                data.movies.map(
                                    (item, index) =>
                                        index < 7 && (
                                            <React.Fragment key={index}>
                                                <Link
                                                    to={"movies/" + item.slug}
                                                >
                                                    <GalleryImage
                                                        src={item.images[0].url}
                                                    />

                                                    {/* quality */}
                                                    <Box
                                                        sx={{
                                                            color: "#d47300",
                                                            position:
                                                                "absolute",
                                                            top: {
                                                                xs: "10px",
                                                                sm: "30px",
                                                            },
                                                            ml: {
                                                                xs: "10px",
                                                                sm: "30px",
                                                            },
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="p"
                                                            display={"flex"}
                                                            alignItems={
                                                                "center"
                                                            }
                                                            sx={{
                                                                font: "700 13.6px lato",
                                                            }}
                                                        >
                                                            <HdIcon />
                                                            {item.quality}
                                                        </Typography>
                                                    </Box>

                                                    {/* titile */}
                                                    <Box
                                                        sx={{
                                                            color: "#fff",
                                                            position:
                                                                "absolute",
                                                            bottom: {
                                                                xs: "10px",
                                                                sm: "30px",
                                                            },
                                                            ml: {
                                                                xs: "10px",
                                                                sm: "30px",
                                                            },
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="p"
                                                            sx={{
                                                                font: {
                                                                    xs: "700 15px lato",
                                                                    sm: "700 24px lato",
                                                                },
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>

                                                    {/* IMDB rate */}
                                                    <Box
                                                        sx={{
                                                            color: "#fff",
                                                            position:
                                                                "absolute",
                                                            bottom: {
                                                                xs: "30px",
                                                                sm: "70px",
                                                            },
                                                            ml: {
                                                                xs: "10px",
                                                                sm: "30px",
                                                            },
                                                        }}
                                                    >
                                                        <RateStyle
                                                            variant="div"
                                                            dangerouslySetInnerHTML={{
                                                                __html: item
                                                                    .htmlOfRate
                                                                    .text,
                                                            }}
                                                        ></RateStyle>
                                                        <img
                                                            src={Imdb}
                                                            alt="imdb"
                                                            style={{
                                                                width: "63px",
                                                                height: "28px",
                                                                borderRadius:
                                                                    "7px",
                                                            }}
                                                        />
                                                    </Box>
                                                </Link>

                                                {/* sent to Favorite */}
                                                <Box
                                                    sx={{
                                                        width: "6.4%",
                                                        display: "flex",
                                                        justifyContent:
                                                            "flex-end",
                                                        position: "absolute",
                                                        bottom: {
                                                            xs: "40px",
                                                            sm: "80px",
                                                        },
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <Favorite
                                                        slug={item.slug}
                                                        gallery={true}
                                                    />
                                                </Box>
                                            </React.Fragment>
                                        )
                                )}
                        </Carousel>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default Gallery;
