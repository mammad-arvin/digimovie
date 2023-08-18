import React, { useState } from "react";

// MUI
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { useTheme } from "@emotion/react";

// icons
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import DownloadIcon from "@mui/icons-material/Download";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

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

const linkDetailsBtnStyle = {
    height: "43px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "15px", md: "4px" },
    fontSize: "12.8px",
    border: "1px solid #292929",
    borderRadius: "25px",
    cursor: "pointer",
};

const DownloadLinks = ({ data }) => {
    const {
        palette: { text, mode },
    } = useTheme();

    // state for colapse of nasted list
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    // show nasted list for doubled link or orginal language
    const versionLink = (links, text) => {
        return (
            <Box mb="15px">
                <ListItemButton
                    disableTouchRipple
                    sx={{
                        ...extendStyle,
                        border: "none",
                        background: mode === "dark" ? "#1D1D1D" : "#FFFFFF",
                        "&:hover": {
                            backgroundColor:
                                mode === "dark" ? "#1D1D1D" : "#FFFFFF",
                        },
                    }}
                    onClick={() =>
                        text === "نسخه دوبله فارسی (دوزبانه)"
                            ? setOpen2(!open2)
                            : setOpen3(!open3)
                    }
                >
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14.4px",
                        }}
                    >
                        <BrowserUpdatedIcon color="warning" />
                        {text}
                    </Typography>
                    <Box sx={BoxOfArrowStyle}>
                        {text === "نسخه دوبله فارسی (دوزبانه)" ? (
                            open2 ? (
                                <KeyboardDoubleArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardDoubleArrowDownIcon fontSize="medium" />
                            )
                        ) : open3 ? (
                            <KeyboardDoubleArrowUpIcon fontSize="medium" />
                        ) : (
                            <KeyboardDoubleArrowDownIcon fontSize="medium" />
                        )}
                    </Box>
                </ListItemButton>
                <Collapse
                    in={text === "نسخه دوبله فارسی (دوزبانه)" ? open2 : open3}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                        background: mode === "dark" ? "#292929" : "#F9F9F9",
                    }}
                >
                    {links.map((item) => (
                        <Grid container p="15px 20px" key={item.qualityTitle}>
                            <Grid
                                container
                                height={{ xs: "auto", md: "93px" }}
                                justifyContent={"space-between"}
                                p="20px"
                                borderRadius="25px"
                                bgcolor={
                                    mode === "dark" ? "#000000" : "#F2F2F2"
                                }
                                sx={{
                                    direction: "ltr",
                                }}
                            >
                                <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="p"
                                        fontSize="17.6px"
                                        color="#EB8306"
                                    >
                                        {item.qualityTitle}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        fontSize="12.8px"
                                        gap="30px"
                                        mt={"8px"}
                                        justifyContent={{
                                            xs: "space-between",
                                            md: "flex-start",
                                        }}
                                    >
                                        <Typography
                                            variant="p"
                                            fontWeight="bold"
                                        >
                                            Encoder : {item.encoder}
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            fontFamily="lato"
                                            fontWeight="300"
                                        >
                                            {item.size}
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            fontFamily="lato"
                                            fontWeight="300"
                                        >
                                            {item.render}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4.9}
                                    sx={{
                                        direction: "rtl",
                                    }}
                                >
                                    <Grid
                                        container
                                        justifyContent={"space-between"}
                                        gap={{ xs: "10px", sm: "0" }}
                                        pt={"5px"}
                                    >
                                        <Grid item xs={12} sm={7}>
                                            <Link
                                                href={item.link}
                                                color="inherit"
                                                underline="none"
                                            >
                                                <Box
                                                    sx={linkDetailsBtnStyle}
                                                    bgcolor={
                                                        mode === "dark"
                                                            ? "#292929"
                                                            : "#F9F9F9"
                                                    }
                                                >
                                                    <DownloadIcon color="warning" />
                                                    <Typography variant="p">
                                                        دانلود با لینک مستقیم
                                                    </Typography>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} sm={4.5}>
                                            <Box
                                                sx={linkDetailsBtnStyle}
                                                onClick={() =>
                                                    alert("توسعه داده نشده است")
                                                }
                                            >
                                                <CameraAltOutlinedIcon color="warning" />
                                                <Typography variant="p">
                                                    نمونه کیفیت
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Collapse>
            </Box>
        );
    };

    return (
        <Grid
            container
            display="flex"
            justifyContent="center"
            mt={data.description.html.length < 20 ? "30px" : "-25px"}
            mb="15px"
        >
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
                            <Typography>لینک های دانلود</Typography>
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
                                    margin: "10px 20px",
                                    p: "10px",
                                    borderRadius: "5px",
                                    background:
                                        mode === "dark" ? "none" : "#E6E6E6",
                                }}
                            >
                                {data.movieLinkFa.length > 0 &&
                                    versionLink(
                                        data.movieLinkFa,
                                        "نسخه دوبله فارسی (دوزبانه)"
                                    )}
                                {data.movieLinksEn.length > 0 &&
                                    versionLink(
                                        data.movieLinksEn,
                                        "نسخه زیرنویس چسبیده فارسی"
                                    )}
                            </List>
                            <Box
                                width="96%"
                                height="auto"
                                p="15px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                m="16px auto"
                                mt="0px"
                                borderRadius="8px"
                                bgcolor="#FF9800"
                            >
                                <Typography variant="p">
                                    "دانلود و تماشای آنلاین تنها با IP ایران
                                    امکانپذیر هست، لطفا v.p.n خود را خاموش
                                    نمایید ، همچنین با نرم افزار IDM در رایانه و
                                    ADM در موبایل اقدام به دانلود نمائید."
                                </Typography>
                            </Box>
                        </Collapse>
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
};

export default DownloadLinks;
