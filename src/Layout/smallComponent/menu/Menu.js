import * as React from "react";

// mui
import { AppBar, Grid, Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// component
import Search from "./Search";
import MyMenuItems from "./MyMenuItems";

const Menu = () => {
    return (
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
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ display: { sm: "none", xs: "block" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{
                                flexGrow: { xs: ".5", sm: "1", md: ".5" },
                                display: { xs: "none", sm: "block" },
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
    );
};

export default Menu;
