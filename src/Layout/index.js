import React from "react";

// component
import Header from "./Header";
import Footer from "./Footer";

// mui
import { Box, Container, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "mui-image";

// images
import LeftWave from "../assets/image/layout-images/back_one_head.png";
import RightWave from "../assets/image/layout-images/back_two_head.png";

const Layout = ({ children }) => {
    const mode = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    mode.palette.mode === "dark" ? "#050505" : "#F2F2F2",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    overflowX: "hidden",
                    background: `${
                        mode.palette.mode === "dark" ? "#050505" : "#F2F2F2"
                    }`,
                }}
            >
                {/* right and left wave images */}
                {mode.palette.mode === "dark" && (
                    <Box sx={{ position: "relative" }}>
                        <Box
                            id="left-wave"
                            sx={{
                                position: "absolute",
                                top: "-90px",
                                left: "-75px",
                                zIndex: "0",
                            }}
                        >
                            <Image
                                src={LeftWave}
                                height="100%"
                                width="100%"
                                duration={500}
                                fit="cover"
                            />
                        </Box>

                        <Box
                            id="right-wave"
                            sx={{
                                position: "absolute",
                                top: "-200px",
                                right: "-700px",
                                zIndex: "0",
                            }}
                        >
                            <Image
                                src={RightWave}
                                height="120%"
                                duration={500}
                                fit="cover"
                            />
                        </Box>
                    </Box>
                )}
                <Header />
                <Stack sx={{ minHeight: "700px", alignItems: "center" }}>
                    {children}
                </Stack>
                <Footer />
            </Container>
        </Box>
    );
};

export default Layout;
