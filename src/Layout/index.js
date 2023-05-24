import React from "react";

// component
import Header from "./Header";
import Footer from "./Footer";

// mui
import { Box, Container, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

const Layout = ({ children }) => {
    const mode = useTheme();

    return (
        <Box
            sx={{
                minHeight:"100vh",
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
                <Header />
                <Stack sx={{ minHeight: "700px" }}>{children}</Stack>
                <Footer />
            </Container>
        </Box>
    );
};

export default Layout;
