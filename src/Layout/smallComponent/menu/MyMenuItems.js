import React, { useState } from "react";

// components
import NastedItem from "./NastedItem";

import { Link } from "react-router-dom";
// mui
import { Box, Grid, Typography, Collapse } from "@mui/material";

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

// items for any menu item
import { artistItem, seriesItem, movieItem } from "./listOfItems";

// images
import artistIcon from "./theatre-mask.png";
import movieImageIcon from "./menu-images/09994db832d.png";
import seriesItemIcon from "./menu-images/8-85266_breaking-bad-wallpaper-walter-white-y-jesse-pinkman-e1620044376536.png";
import artistItemIcon from "./menu-images/170a4cde698c1a599df988a597803520-e1621178227560.png";

// styles
import styled from "styled-components";
const BoxForItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 12.6px;
    &:hover {
        .icon {
            transform: scale(1.17);
        }
    }
`;

const textStyle = {
    color: "#EB8307",
    fontFamily: "lato",
    textTransform: "uppercase",
};

const iconStyle = {
    fontSize: "30px",
    transition: ".2s",
    color: "#E57C0F",
    marginLeft: "10px",
};

const BoxOfTypoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5px",
};

const MyMenuItems = () => {
    // state for show and hide menuItems
    const [showMovItem, setShowMovItem] = useState(false);
    const [showSerItem, setShowSerItem] = useState(false);
    const [showArtiItem, setShowArtiItem] = useState(false);
    return (
        <Grid container display="flex" justifyContent="space-between">
            <Grid item>
                <Link to="/">
                    <BoxForItem>
                        <HomeOutlinedIcon className="icon" sx={iconStyle} />
                        <Box sx={BoxOfTypoStyle}>
                            <Typography variant="p">خانه</Typography>
                            <Typography variant="p" sx={textStyle}>
                                Home
                            </Typography>
                        </Box>
                    </BoxForItem>
                </Link>
            </Grid>
            <Grid
                item
                sx={{ position: "relative" }}
                onMouseEnter={() => setShowMovItem(true)}
                onMouseLeave={() => setShowMovItem(false)}
            >
                <Link to="/movies">
                    <BoxForItem>
                        <TheatersOutlinedIcon className="icon" sx={iconStyle} />
                        <Box sx={BoxOfTypoStyle}>
                            <Typography variant="p">دانلود فیلم</Typography>
                            <Typography variant="p" sx={textStyle}>
                                movies
                            </Typography>
                        </Box>
                    </BoxForItem>
                </Link>
                <Collapse in={showMovItem}>
                    <NastedItem items={movieItem} itemImage={movieImageIcon} />
                </Collapse>
            </Grid>
            <Grid
                item
                sx={{ position: "relative" }}
                onMouseEnter={() => setShowSerItem(true)}
                onMouseLeave={() => setShowSerItem(false)}
            >
                <Link to="/series">
                    <BoxForItem>
                        <OndemandVideoOutlinedIcon
                            className="icon"
                            sx={iconStyle}
                        />
                        <Box sx={BoxOfTypoStyle}>
                            <Typography variant="p">دانلود سریال</Typography>
                            <Typography variant="p" sx={textStyle}>
                                series
                            </Typography>
                        </Box>
                    </BoxForItem>
                </Link>
                <Collapse in={showSerItem}>
                    <NastedItem items={seriesItem} itemImage={seriesItemIcon} />
                </Collapse>
            </Grid>
            <Grid
                item
                sx={{ position: "relative" }}
                onMouseEnter={() => setShowArtiItem(true)}
                onMouseLeave={() => setShowArtiItem(false)}
            >
                <Link to="/artists">
                    <BoxForItem>
                        <img
                            src={artistIcon}
                            className="icon"
                            height="30px"
                            style={iconStyle}
                        />
                        <Box sx={BoxOfTypoStyle}>
                            <Typography variant="p">هنرمندان</Typography>
                            <Typography variant="p" sx={textStyle}>
                                ARTISTS
                            </Typography>
                        </Box>
                    </BoxForItem>
                </Link>
                <Collapse in={showArtiItem}>
                    <NastedItem items={artistItem} itemImage={artistItemIcon} />
                </Collapse>
            </Grid>
            <Grid item>
                <Link to="/contact">
                    <BoxForItem>
                        <HeadsetMicOutlinedIcon
                            className="icon"
                            sx={iconStyle}
                        />
                        <Box sx={BoxOfTypoStyle}>
                            <Typography variant="p">تماس با ما</Typography>
                            <Typography variant="p" sx={textStyle}>
                                CONTACT
                            </Typography>
                        </Box>
                    </BoxForItem>
                </Link>
            </Grid>
        </Grid>
    );
};

export default MyMenuItems;
