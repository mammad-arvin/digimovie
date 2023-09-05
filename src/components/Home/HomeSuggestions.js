import React from "react";

// Mui
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// components
import HederOfDetils from "../Movie/smallComponents/HederOfDetils";
import InfoOfDetails from "../Movie/smallComponents/InfoOfDetails";
import ShowTrailer from "../Movie/smallComponents/ShowTrailer";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_MOVIES_DATA } from "../../graphql/queries";

// router dom
import { Link } from "react-router-dom";

// helper function
import {
    miniLittleDecription,
    miniMoviePoserTitle,
} from "../../helpers/helperFunctions";

//gallery pakage
import Carousel from "nuka-carousel";

// styled component for rate of movie
import { RateStyle } from "./Gallery";

// icons
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// arow Style
const arowStyle = {
    fontSize: "27px",
    color: "#FFF",
    background: "rgba(0, 0, 0 ,.7)",
    borderRadius: "50%",
    p: "5px",
    position: "relative",
    top: "-3px",
    cursor: "pointer",
};

//sx style
const gridItemStyle = {
    direction: "rtl",
    display: "flex",
    justifyContent: "center",
};

const HomeSuggestions = () => {
    const {
        palette: { mode, text },
    } = useTheme();

    // query
    const { data } = useQuery(GET_MOVIES_DATA);

    return (
        data && (
            <Grid container zIndex={1} mb={5}>
                <Grid item xs={12} lg={11} m="15px auto">
                    <Grid
                        container
                        justifyContent={"center"}
                        gap={{ xs: "30px", md: "15px" }}
                        sx={{ direction: "ltr" }}
                        color={text.primary}
                    >
                        {/* suggestion movie */}
                        <Grid
                            item
                            xs={12}
                            md={8.5}
                            display="flex"
                            flexDirection="column"
                            gap={3.5}
                            sx={gridItemStyle}
                        >
                            {data.movies.map((item) => (
                                <Grid
                                    container
                                    key={item.slug}
                                    pb={6}
                                    position={"relative"}
                                    sx={{
                                        borderRadius: "10px",
                                        background:
                                            mode === "dark"
                                                ? "#242424"
                                                : "#FFFFFF",
                                    }}
                                >
                                    {/* stand Image and trailer BTN */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={4}
                                        display={"flex"}
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent={{
                                            xs: "center",
                                            md: "space-around",
                                        }}
                                        margin={{ xs: "15px 0 0 0", sm: "0" }}
                                    >
                                        {/* image */}
                                        <Box
                                            width={{
                                                xs: "77%",
                                                sm: "79%",
                                                md: "83%",
                                                lg: "72%",
                                            }}
                                        >
                                            <Link to={`/movies/${item.slug}`}>
                                                <img
                                                    src={item.images[1].url}
                                                    width={"100%"}
                                                    style={{
                                                        borderRadius: "12px",
                                                        margin: "0 auto",
                                                    }}
                                                />
                                            </Link>
                                        </Box>

                                        {/* trailer BTN */}
                                        <Box
                                            width={{ xs: "76%", md: "72%" }}
                                            height="60px"
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            borderRadius="10px"
                                            bgcolor={
                                                mode === "dark"
                                                    ? "#1a1a1a"
                                                    : "#f2f2f2"
                                            }
                                            position="relative"
                                            sx={{
                                                overflow: "hidden",
                                                transition: ".3s",
                                                "&:hover": {
                                                    transition: ".3s",
                                                    background: "#EB8307",
                                                    ".textParent::after": {
                                                        background: "#EB8307",
                                                    },
                                                    ".text": {
                                                        color: "#EB8307",
                                                    },
                                                    ".icon": { color: "#FFF" },
                                                },
                                            }}
                                        >
                                            {/* BTN icon */}
                                            <Box mr={2.5} mt={0.5} zIndex={3}>
                                                <LiveTvOutlinedIcon
                                                    className="icon"
                                                    sx={{
                                                        color: "#EB8307",
                                                        transition: ".3s",
                                                    }}
                                                />
                                            </Box>

                                            {/* BTN text */}
                                            <Box
                                                width="70%"
                                                height="100%"
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                                bgcolor={
                                                    mode === "dark"
                                                        ? "#2D2D2D"
                                                        : "#CCCCCC"
                                                }
                                                position="relative"
                                                className="textParent"
                                                sx={{
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        top: "10px",
                                                        right: "-67px",
                                                        width: "100px",
                                                        height: "100%",
                                                        background:
                                                            mode === "dark"
                                                                ? "#1a1a1a"
                                                                : "#f2f2f2",
                                                        transform:
                                                            "rotate(-70deg)",
                                                        transition: ".3s",
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="p"
                                                    className="text"
                                                    sx={{
                                                        transition: ".3s",
                                                    }}
                                                >
                                                    مشاهده تریلر
                                                </Typography>
                                            </Box>

                                            {/* show trailer component */}
                                            <ShowTrailer
                                                link={item.trilerUrl}
                                                suggest={true}
                                            />
                                        </Box>
                                    </Grid>

                                    {/* details */}
                                    <Grid item sx={12} sm={8}>
                                        {/* header of details */}
                                        <Box p="15px">
                                            <HederOfDetils
                                                data={item}
                                                suggest={true}
                                            />
                                        </Box>

                                        {/* info of details */}
                                        <InfoOfDetails
                                            data={item}
                                            suggest={true}
                                        />

                                        {/* Critics score */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                mr: "12px",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                fontSize="16px"
                                                lineHeight="18px"
                                                sx={{
                                                    width: "30px",
                                                    height: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "4px",
                                                    background: "#66CC33",
                                                }}
                                            >
                                                {Math.round(
                                                    item.rate.rate * 20
                                                )}
                                            </Typography>
                                            <Typography variant="p">
                                                امتیاز منتقدین
                                            </Typography>
                                        </Box>

                                        {/* little descrioption */}
                                        <Typography
                                            variant="p"
                                            fontSize="12.8px"
                                            lineHeight="38px"
                                            mr={1.7}
                                        >
                                            {miniLittleDecription(
                                                item.littleDescription
                                            )}
                                        </Typography>
                                    </Grid>

                                    {/* continue and download BTN */}
                                    <Box
                                        height="28px"
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            // left: { xs: "34%", sm: "15px" },
                                            left: { xs: "50%", sm: "15px" },
                                            transform: {
                                                xs: "translateX(-19.5%)",
                                                sm: "none",
                                            },
                                        }}
                                    >
                                        <Box position={"relative"}>
                                            <Link to={`/movies/${item.slug}`}>
                                                <Typography
                                                    variant="p"
                                                    position="absolute"
                                                    left="21px"
                                                    top="-20px"
                                                >
                                                    ادامه /
                                                    <span
                                                        style={{
                                                            color: "#EB8307",
                                                        }}
                                                    >
                                                        {" "}
                                                        دانلود
                                                    </span>
                                                </Typography>

                                                {/* download icon */}
                                                <Box
                                                    width="30px"
                                                    height="30px"
                                                    bgcolor="#EB8307"
                                                    position="absolute"
                                                    left="44px"
                                                    top="9px"
                                                    borderRadius="6px"
                                                    sx={{
                                                        transform:
                                                            "rotate(45deg)",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            transform:
                                                                "rotate(-45deg)",
                                                        }}
                                                    >
                                                        <FileDownloadOutlinedIcon color="#EB8307" />
                                                    </Typography>
                                                </Box>
                                            </Link>
                                            <svg>
                                                <path
                                                    d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z"
                                                    fillRule="evenodd"
                                                    fill={
                                                        mode !== "dark"
                                                            ? "#F2F1F0"
                                                            : "#060605"
                                                    }
                                                    style={{
                                                        transform: "scale(1.1)",
                                                    }}
                                                ></path>
                                            </svg>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {/* for news of series or other .... */}
                        <Grid item xs={12} md={3} sx={{ direction: "rtl" }}>
                            <Stack
                                width="100%"
                                // height={{lg:"495px"}}
                                alignItems="center"
                                pb={2}
                                bgcolor={
                                    mode === "dark" ? "#242424" : "#FFFFFF"
                                }
                                borderRadius="10px"
                            >
                                {/* title */}
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    gap={1}
                                    mt={2}
                                >
                                    {/* icon */}
                                    <Box
                                        position="relative"
                                        color={text.primary}
                                        sx={{
                                            "&::before": {
                                                content: '"FA"',
                                                width: "21px",
                                                height: "19px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontSize: "9px",
                                                background:
                                                    mode === "dark"
                                                        ? "black"
                                                        : "#CCCCCC",
                                                borderRadius: "8px",
                                                position: "absolute",
                                                right: "-7px",
                                                top: "15px",
                                            },
                                        }}
                                    >
                                        <KeyboardVoiceOutlinedIcon
                                            fontSize="large"
                                            sx={{ color: "#E07D07" }}
                                        />
                                    </Box>

                                    {/* text */}
                                    <Stack alignItems="center">
                                        <Typography variant="p">
                                            فیـــلم هــای
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            fontSize="11px"
                                            sx={{ opacity: ".8" }}
                                        >
                                            دوبله فارسی
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Gallery of dubled movie */}
                                <Box
                                    // width={"84%"}
                                    width={{ xs: "40%", md: "84%" }}
                                    mt={2}
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                    <Carousel
                                        renderCenterLeftControls={({
                                            previousSlide,
                                        }) => (
                                            <ArrowBackIosNewIcon
                                                sx={{
                                                    ...arowStyle,
                                                    left: "-15px",
                                                }}
                                                onClick={previousSlide}
                                            />
                                        )}
                                        renderCenterRightControls={({
                                            nextSlide,
                                        }) => (
                                            <ArrowForwardIosIcon
                                                sx={{
                                                    ...arowStyle,
                                                    top: "0",
                                                    right: "-15px",
                                                }}
                                                onClick={nextSlide}
                                            />
                                        )}
                                        autoplay="true"
                                        autoplayInterval="3000"
                                        cellSpacing={20}
                                    >
                                        {data.movies.map(
                                            (item) =>
                                                item.movieLinkFa.length > 0 && (
                                                    <Link
                                                        to={`/movies/${item.slug}`}
                                                        key={item.slug}
                                                    >
                                                        {/* poster image */}
                                                        <img
                                                            src={
                                                                item.images[1]
                                                                    .url
                                                            }
                                                            width="100%"
                                                            style={{
                                                                borderRadius:
                                                                    "6px",
                                                            }}
                                                        />

                                                        {/* title */}
                                                        <Box
                                                            textAlign={"center"}
                                                        >
                                                            <Typography
                                                                variant="p"
                                                                fontSize={{
                                                                    xs: "11px",
                                                                    sm: "16px",
                                                                }}
                                                                sx={{
                                                                    direction:
                                                                        "ltr",
                                                                }}
                                                            >
                                                                {miniMoviePoserTitle(
                                                                    item.title
                                                                )}
                                                            </Typography>
                                                        </Box>

                                                        {/* rate style */}
                                                        <RateStyle
                                                            sx={{
                                                                "span:first-of-type":
                                                                    {
                                                                        color: "#66CC33",
                                                                    },
                                                            }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: item
                                                                    .htmlOfRate
                                                                    .text,
                                                            }}
                                                        />
                                                    </Link>
                                                )
                                        )}
                                    </Carousel>
                                </Box>
                            </Stack>

                            {/* Other */}
                            <Box
                                mt={2}
                                p={3}
                                borderRadius={"10px"}
                                bgcolor={
                                    mode === "dark" ? "#242424" : "#FFFFFF"
                                }
                            >
                                <Typography>
                                    اخبار سریال ها و دیگر پیشنهادات در این قسمت
                                    جای میگیرند , که به دلیل کامل نبودن اصلاعات
                                    سرور , توسعه داده نشده است .
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    );
};

export default HomeSuggestions;
