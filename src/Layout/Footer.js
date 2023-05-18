import React from "react";

// mui componenes
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

// Images
import Image from "mui-image";
import LeftBottom from "../assets/image/layout-images/left-botto-cicle.png";

const Footer = () => {
    const {
        palette: { mode },
    } = useTheme();
    const innerwidth = window.innerWidth;
    return (
        <>
            <Box mx={-3}>
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
                    mx={-3}
                    sx={{
                        height: "296px",
                        position: "relative",
                        background: mode === "dark" ? "#1E1E1E" : "#F3F3F3",
                        position: "relative",
                    }}
                >
                    {/* left wave */}
                    {mode === "dark" && innerwidth > 1024 && (
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
                </Box>
            </Box>
        </>
    );
};

export default Footer;
