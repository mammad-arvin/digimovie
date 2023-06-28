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

// icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// style of image
import styled from "styled-components";
const GalleryImage = styled.img`
    width: 100%;
    height: 470px;
    border-radius: 12px;
    @media (max-width: 900px) {
        height: 445px;
    }
    @media (max-width: 626px) {
        height: 305px;
    }
    @media (max-width: 520px) {
        height: 205px;
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

const Gallery = () => {
    // query
    const { loading, data, error } = useQuery(GET_HOME_GALLERY_DATA);

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
                    xs={11.9}
                    md={8}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p="5px"
                    sx={{ direction: "ltr" }}
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
                                            <Link
                                                to={"movie/" + item.slug}
                                                key={index}
                                            >
                                                <GalleryImage
                                                    src={item.images[0].url}
                                                />
                                            </Link>
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
