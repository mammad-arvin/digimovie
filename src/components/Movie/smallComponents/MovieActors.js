import React from "react";

// components
import NastedList from "../../../shared/NastedList";

// MUI
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

//gallery pakage
import Carousel from "nuka-carousel";

//  gallery buttons was modified to arrow
// icons
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

const MovieActors = ({ data }) => {
    // get inner width to costomize gallery of actor in any view point
    let widthSize = window.innerWidth;

    // theme mode and text color
    const {
        palette: { mode },
    } = useTheme();
    return (
        <NastedList title={"بازیگران"}>
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
                    cellSpacing={10}
                    slidesToShow={
                        widthSize > 800
                            ? 5
                            : widthSize > 600
                            ? 4
                            : widthSize > 400
                            ? 3
                            : 2
                    }
                >
                    {data.map((item) => {
                        if (
                            item.__typename === "BestMenActors" ||
                            item.__typename === "BestWomenActors"
                        ) {
                            return (
                                <Box
                                    key={item.name}
                                    height="210px"
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    gap="5px"
                                    textAlign="center"
                                    p="10px"
                                    borderRadius="8px"
                                    bgcolor={
                                        mode === "dark" ? "#292929" : "#CCCCCC"
                                    }
                                    sx={{
                                        transition: ".3s",
                                        "&:hover": { color: "#E88207" },
                                    }}
                                >
                                    <img
                                        src={item.image.url}
                                        width="115px"
                                        height="160px"
                                        style={{ borderRadius: "8px" }}
                                    />
                                    <Typography variant="p" fontSize="11px">
                                        {item.name}
                                    </Typography>
                                </Box>
                            );
                        }
                    })}
                </Carousel>
            </Box>
        </NastedList>
    );
};

export default MovieActors;
