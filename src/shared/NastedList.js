import React, { useState } from "react";

// MUI
import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { useTheme } from "@emotion/react";

// icons
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// sx styles
const extendStyle = {
    height: "50px",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
    borderRight: "3px solid #EB8307",
    position: "relative",
};

const BoxOfArrowStyle = {
    position: "absolute",
    left: "15px",
    top: "13px",
    color: "orange",
};

const NastedList = ({ children, title }) => {
    const {
        palette: { text, mode },
    } = useTheme();

    // state for colapse of nasted list
    const [open, setOpen] = useState(false);

    return (
        <Grid container display="flex" justifyContent="center" mb="15px">
            <Grid
                item
                xs={12}
                md={11.5}
                lg={10.8}
                color={text.primary}
                borderRadius="10px"
                bgcolor={mode === "dark" ? "rgba(43, 43,43 ,1)" : "#F9F9F9"}
                overflow={"hidden"}
            >
                <Box width={"100%"}>
                    <List disablePadding>
                        <ListItemButton
                            disableTouchRipple
                            sx={{
                                ...extendStyle,
                                background:
                                    mode === "dark" ? "#1D1D1D" : "#FFFFFF",
                                "&:hover": {
                                    backgroundColor:
                                        mode === "dark" ? "#1D1D1D" : "#FFFFFF",
                                },
                            }}
                            onClick={() => setOpen(!open)}
                        >
                            <Typography>{title}</Typography>
                            <Box sx={BoxOfArrowStyle}>
                                {open ? (
                                    <KeyboardDoubleArrowUpIcon fontSize="medium" />
                                ) : (
                                    <KeyboardDoubleArrowDownIcon fontSize="medium" />
                                )}
                            </Box>
                        </ListItemButton>

                        {/* nasted */}
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List
                                component="div"
                                sx={{
                                    margin: "10px 5px",
                                    p: "10px",
                                    borderRadius: "5px",
                                    background:
                                        mode === "dark" ? "none" : "#E6E6E6",
                                }}
                            >
                                {children}
                            </List>
                        </Collapse>
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NastedList;
