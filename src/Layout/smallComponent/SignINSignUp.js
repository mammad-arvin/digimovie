import React from "react";

import { Link } from "react-router-dom";

// mui
import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

// styles
const boxStyle = {
    height: "35px",
    width: "115px",
    fontSize: "13.6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "18px 15px",
    borderRadius: "180px",
};

const SignINSignUp = () => {
    const {
        palette: { text, mode },
    } = useTheme();

    return (
        <>
            <Grid
                container
                color={text.primary}
                sx={{ gap: "10px", justifyContent: "center" }}
            >
                <Link to="/signin">
                    <Box
                        bgcolor={mode === "dark" ? "#242424" : "#CCCCCC"}
                        sx={boxStyle}
                    >
                        وارد شوید <ExitToAppIcon />
                    </Box>
                </Link>
                <Link to="/signup">
                    <Grid
                        item
                        bgcolor={mode === "dark" ? "#242424" : "#CCCCCC"}
                        sx={boxStyle}
                    >
                        ثبت نام
                        <PersonAddAltIcon />
                    </Grid>
                </Link>
            </Grid>
        </>
    );
};

export default SignINSignUp;
