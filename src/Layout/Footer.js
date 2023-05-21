import React from "react";

// mui componenes
import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

// Images
import Image from "mui-image";
import LeftBottom from "../assets/image/layout-images/left-botto-cicle.png";

// component
import NewsGallery from "./smallComponent/forFooter/NewsGallery";

const Footer = () => {
    const {
        palette: { mode },
    } = useTheme();

    const innerWidth = window.innerWidth;

    return (
        <>
            <Box mx={-3} >
                {/* curve 1 */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "relative",
                        top: { md: "90px", lg: "100px" },
                    }}
                >
                    <svg
                        viewBox="0 0 1300 111"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={`${mode === "dark" ? "#151515" : "#D9D9D9"}`}
                            opacity="1.00"
                            d=" M 1295.62 0.00 L 1300.00 0.00 L 1300.00 111.00 L 0.00 111.00 L 0.00 104.66 C 108.34 101.74 216.67 98.66 324.97 94.58 C 546.41 86.18 767.86 73.05 987.95 46.68 C 1090.94 34.20 1193.66 19.18 1295.62 0.00 Z"
                        ></path>
                    </svg>
                </Box>
                {/* curve 2 */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "relative",
                        top: "15px",
                    }}
                >
                    <svg
                        viewBox="0 0 1300 74"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={`${mode === "dark" ? "#1E1E1E" : "#E6E6E6"}`}
                            opacity="1.00"
                            d=" M 991.48 40.69 C 1094.73 30.72 1197.66 17.32 1300.00 0.37 L 1300.00 74.00 L 0.00 74.00 L 0.00 73.00 C 97.66 73.04 195.33 73.00 292.99 72.16 C 526.08 70.14 759.38 63.40 991.48 40.69 Z"
                        ></path>
                    </svg>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        minHeight: "296px",
                        maxHeight: "auto",
                        background: mode === "dark" ? "#1E1E1E" : "#F3F3F3",
                        position: "relative",
                    }}
                >
                    {/* left wave */}
                    {mode === "dark" && innerWidth > 1024 && (
                        <Box
                            id="left-bottom-wave"
                            sx={{
                                height: "470px",
                                position: "absolute",
                                top: "-175px",
                                left: "0px",
                            }}
                        >
                            <Image
                                src={LeftBottom}
                                height="100%"
                                duration={1000}
                                fit="cover"
                            />
                        </Box>
                    )}
                    {/* content */}
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap="20px"
                        bgcolor="green"
                        sx={{direction: "ltr" }}
                    >
                        <Grid item sx={11} md={3.5} bgcolor=" yellow">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, magnam.
                        </Grid>
                        <Grid item sx={11} md={3.5} bgcolor="skyblue">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi architecto neque tempora iure sint hic
                            numquam doloribus. Quas blanditiis ea animi sequi
                            velit quod neque ut tempore expedita, quam veniam
                            eaque aliquam quae deleniti vel, reprehenderit sint
                            recusandae explicabo tempora necessitatibus et iure
                            rem? Provident explicabo nesciunt harum ex quae?
                        </Grid>
                        <Grid
                            item
                            sx={11}
                            md={4}
                            lg={3}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <NewsGallery />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
