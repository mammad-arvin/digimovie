import React from "react";
import { Link } from "react-router-dom";

// mui componenes
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// Images
import Image from "mui-image";
import LeftBottom from "../assets/image/layout-images/left-botto-cicle.png";

// component
import NewsGallery from "./smallComponent/forFooter/NewsGallery";
import SocialMediaLink from "./smallComponent/forFooter/SocialMediaLink";

const Footer = () => {
    const {
        palette: { mode },
    } = useTheme();

    const innerWidth = window.innerWidth;

    return (
        <>
            <Box mx={-3}>
                {/* curve 1 */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "relative",
                        top: { md: "90px", lg: "100px" },
                    }}
                >
                    <svg
                        viewBox="0 0 1300 111"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={`${mode === "dark" ? "#151515" : "#D9D9D9"}`}
                            opacity="1.00"
                            d=" M 1295.62 0.00 L 1300.00 0.00 L 1300.00 111.00 L 0.00 111.00 L 0.00 104.66 C 108.34 101.74 216.67 98.66 324.97 94.58 C 546.41 86.18 767.86 73.05 987.95 46.68 C 1090.94 34.20 1193.66 19.18 1295.62 0.00 Z"
                        ></path>
                    </svg>
                </Box>
                {/* curve 2 */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "relative",
                        top: "15px",
                    }}
                >
                    <svg
                        viewBox="0 0 1300 74"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={`${mode === "dark" ? "#1E1E1E" : "#E6E6E6"}`}
                            opacity="1.00"
                            d=" M 991.48 40.69 C 1094.73 30.72 1197.66 17.32 1300.00 0.37 L 1300.00 74.00 L 0.00 74.00 L 0.00 73.00 C 97.66 73.04 195.33 73.00 292.99 72.16 C 526.08 70.14 759.38 63.40 991.48 40.69 Z"
                        ></path>
                    </svg>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        minHeight: "296px",
                        maxHeight: "auto",
                        background: mode === "dark" ? "#1E1E1E" : "#F3F3F3",
                        position: "relative",
                    }}
                >
                    {/* left wave */}
                    {mode === "dark" && innerWidth > 1024 && (
                        <Box
                            id="left-bottom-wave"
                            sx={{
                                height: "470px",
                                position: "absolute",
                                top: "-175px",
                                left: "0px",
                            }}
                        >
                            <Image
                                src={LeftBottom}
                                height="100%"
                                duration={1000}
                                fit="cover"
                            />
                        </Box>
                    )}

                    {/* content */}
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        sx={{
                            direction: "ltr",
                            marginTop: { xs: "45px", md: "5px" },
                            gap: { xs: "35px", md: "20px" },
                        }}
                    >
                        {/* social links */}
                        <Grid
                            item
                            xs={12}
                            md={3.5}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap="15px"
                        >
                            <SocialMediaLink
                                FT="عضویت در کانال تلگرام"
                                ET="TELEGRAM CHANNEL"
                                Icon="teleg"
                                link="https://www.t.me/mamad_arvin"
                            />
                            <SocialMediaLink
                                FT="مشاهده در اینستاگرام"
                                ET="INSTAGRAM PAGE"
                                Icon="Instagram"
                                link="https://www.instagram.com/mamad_arvin/"
                            />
                        </Grid>

                        {/* footer Links */}
                        <Grid
                            item
                            xs={11}
                            md={3.9}
                            lg={3.5}
                            sx={{
                                direction: "rtl",
                                fontSize: "12.8px",
                                color: mode === "dark" ? "#fff" : "#000",
                            }}
                        >
                            <Grid container justifyContent="space-around">
                                <Grid item>
                                    <List disablePadding>
                                    {[
                                            { t: "دانلود فیلم", l: "/movies" },
                                            {
                                                t: "پخش آنلاین فیلم ها",
                                                l: "/movies/online-play",
                                            },
                                            {
                                                t: "۲۵۰ فیلم برتر تاریخ",
                                                l: "/movies/best-250",
                                            },
                                            {
                                                t: "باکس آفیس",
                                                l: "/movies/box-office",
                                            },
                                            {
                                                t: "قوانین و مقررات",
                                                l: "/Terms-Conditions",
                                            },
                                        ].map((text ,index) => (
                                            <ListItem className="footerLinks" key={index}>
                                                <Link to={text.l}>
                                                    {text.t}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item>
                                    <List disablePadding>
                                        {[
                                            { t: "دانلود سریال‌", l: "/series" },
                                            {
                                                t: "پخش آنلاین سریال ها",
                                                l: "/series/online-play",
                                            },
                                            {
                                                t: "۲۵۰ سریال برتر تاریخ",
                                                l: "/series/best-250",
                                            },
                                            {
                                                t: "سوالات متداول",
                                                l: "/faq",
                                            },
                                            {
                                                t: "DMCA POLICY",
                                                l: "/DMCA-POLICY",
                                            },
                                        ].map((text, index) => (
                                            <ListItem className="footerLinks" key={index}>
                                                <Link to={text.l}>
                                                    {text.t}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* news Gallery */}
                        <Grid
                            item
                            sx={11}
                            md={4}
                            lg={3}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <NewsGallery />
                        </Grid>
                    </Grid>

                    {/* descroption */}
                    <Typography
                        variant="p"
                        fontSize="11px"
                        sx={{
                            mt: "30px",
                            mb: "19px",
                            color: mode === "dark" ? "#fff" : "#000",
                        }}
                    >
                        باز طراحی شده ی وب سایت
                        <Link to="https://digimovie.vip/" target="_blank" style={{color:"#00a8ff"}}>
                            {" "} digimovie.vip {" "}
                        </Link> 
                        با <span style={{color:"orangered"}}> Reactjs </span>  و  <span style={{color:"green"}}>GraphQL</span>                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
