import * as React from "react";

// mui
import { AppBar, Grid, Box, Toolbar, IconButton } from "@mui/material";

// component
import Search from "./Search";
import MyMenuItems from "./MyMenuItems";
import SideMenu from "./SideMenu-Humber";

const Menu = () => {
    return (
        <>
            <AppBar
                position="static"
                color="menu"
                sx={{
                    minHeight: "86px",
                    justifyContent: "center",
                }}
            >
                <Toolbar sx={{ margin: { sm: "10px 0", md: "10px 0px" } }}>
                    <Grid
                        container
                        justifyContent="space-around"
                        direction="row"
                        sx={{
                            width: "100%",
                            gap: { sm: "7px", md: "0" },
                        }}
                    >
                        <Grid
                            item
                            xs={2}
                            sm={12}
                            md={8}
                            display="flex"
                            alignItems="center"
                        >
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{
                                    display: { sm: "none", xs: "flex" },
                                    right: "-10px",
                                }}
                            >
                                <SideMenu />
                            </IconButton>
                            <Box
                                sx={{
                                    flexGrow: { xs: ".5", sm: "1", md: ".5" },
                                    display: { xs: "none", sm: "block" },
                                    zIndex: "3",
                                }}
                            >
                                <MyMenuItems />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sm={12}
                            md={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Search />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Menu;
