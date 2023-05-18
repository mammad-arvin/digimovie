import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Stack} from "@mui/material";

// mui
import { useTheme } from "@emotion/react";

// component


const Layout = ({ children }) => {
    const mode = useTheme();

    return (
        <>
                <Container
                    maxWidth="xl"
                    sx={{
                        overflowX: "hidden",
                        background: `${
                            mode.palette.mode === "dark" ? "#050505" : "#F2F2F2"
                        }`,
                    }}
                >
                    <Header/>
                    <Stack sx={{ minHeight: "700px" }}>{children}</Stack>
                    <Footer />
                </Container>
        </>
    );
};

export default Layout;
