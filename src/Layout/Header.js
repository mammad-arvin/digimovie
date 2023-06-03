import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// mui component
import { AppBar, Box, Toolbar, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "mui-image";

//images
import DarkLogo from "../assets/image/layout-images/dark_logo.webp";
import LightLogo from "../assets/image/layout-images/light-logo.webp";

// components
import FavMovieBtn from "./smallComponent/FavMovieBtn";
import SignINSignUp from "./smallComponent/SignINSignUp";
import Profile from "./smallComponent/Profile";
import ModeChangerBtn from "./smallComponent/ModeChangerBtn";
import Menu from "./smallComponent/menu/Menu";

const Header = () => {
    const {palette:{mode}} = useTheme();
    const logo = mode === "dark" ? LightLogo : DarkLogo;

    // read comment 1
    const [logined, setLogined] = useState(false);
    // useEffect(()=>{

    //     const user=localStorage.getItem(userId);
    // } ,[])

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background: "none",
                    minHeight: "200px",
                    boxShadow: "none",
                }}
            >
                
                {/* Toolbar */}

                <Toolbar>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "101px",
                            marginBottom: "20px",
                            direction: "ltr",
                        }}
                    >
                        {/* logo and buttons */}
                        <Grid
                            item
                            xs={12}
                            sm={7}
                            md={8}
                            sx={{
                                minHeight: "100%",
                                height: "aouto",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                direction: "ltr",
                            }}
                        >
                            <Grid item xs={5} sm={4} md={3} lg={3}>
                                <Link to="/">
                                    <Image
                                        src={logo}
                                        height="100%"
                                        width="100%"
                                        duration={500}
                                        fit="cover"
                                        sx={{ position: "absolute", left: "0" }}
                                    />
                                </Link>
                            </Grid>

                            {/* display mood changer */}

                            <Grid item xs={4} sm={4} md={2}>
                                <ModeChangerBtn />
                            </Grid>

                            {/* favMovie Icons */}
                            <Grid item xs={1}>
                                <FavMovieBtn />
                            </Grid>
                        </Grid>

                        {/* log in and profile view */}
                        {!logined ? (
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                md={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Profile />
                            </Grid>
                        ) : (
                            <Grid item xs={12} sm={4} md={4} lg={3}>
                                <SignINSignUp />
                            </Grid>
                        )}
                    </Grid>
                </Toolbar>
                <Menu />
            </AppBar>

            <Box spacing={4} direction="row"></Box>
        </>
    );
};

export default Header;
