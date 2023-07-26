import React from "react";

// MUI
import { Grid, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

// component
import HederOfDetils from "./HederOfDetils";
import InfoOfDetails from "./InfoOfDetails";
import MovieRate from "./MovieRate";
import ShowTrailer from "./ShowTrailer";

// router dom
import { Link } from "react-router-dom";

// icons
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// styels
import styled from "styled-components";

// stand Image
const StandImage = styled.div`
    width: 345px;
    height: 494px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    @media (max-width: 1240px) {
        width: 99%;
    }
    @media (max-width: 1024px) {
        height: 394px;
    }
    @media (max-width: 900px) {
        width: 267px;
    }
`;

// trailerBtn
const TrilerBtnPath = styled.svg`
    width: 202px;
    height: 52px;
    font-size: 43px;
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    path {
        transform: scale(1.9);
    }
`;

const Details = ({ data }) => {
    const {
        palette: { text, mode },
    } = useTheme();

    const {
        slug,
        images,
        trilerUrl,
        littleDescription,
        rate,
        description: { html },
    } = data;

    return (
        <>
            {/* image overlay info */}
            <Box
                color={text.primary}
                display={"flex"}
                justifyContent={"center"}
                zIndex={1}
                width={"105%"}
                height={{ xs: "1260px", md: "800px" }}
                sx={{
                    background: `url(${images[0].url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        background:
                            mode === "dark"
                                ? "rgba(0, 0, 0 ,.6)"
                                : "rgba(255, 255, 255,.8)",
                    }}
                >
                    <Grid container display={"flex"} justifyContent={"center"}>
                        <Grid
                            item
                            xs={12}
                            md={11.5}
                            lg={10.25}
                            display={"flex"}
                            justifyContent={"center"}
                            mt={"30px"}
                        >
                            <Grid container>
                                {/* land Image and trailer */}
                                <Grid
                                    item
                                    xs={12}
                                    md={3.6}
                                    display={"flex"}
                                    flexDirection={"column"}
                                    alignItems={"center"}
                                    gap={2.5}
                                    p={"5px 0px"}
                                >
                                    <Box position={"relative"}>
                                        <Link to={"/movies/" + slug}>
                                            <StandImage>
                                                <img
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        borderWidth: "4px",
                                                        borderStyle: "solid",
                                                        borderRadius: "10px",
                                                        borderImage:
                                                            "linear-gradient(to bottom right, #d5790b, transparent) 1 fill",
                                                    }}
                                                    src={images[1].url}
                                                />

                                                {/* trilerBtnPath */}
                                                <TrilerBtnPath>
                                                    <path
                                                        d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z"
                                                        fillRule="evenodd"
                                                        fill={
                                                            mode !== "dark"
                                                                ? "#F2F1F0"
                                                                : "#060605"
                                                        }
                                                    ></path>
                                                </TrilerBtnPath>
                                            </StandImage>
                                        </Link>

                                        {/* trilerBtn */}
                                        <Box
                                            display={"flex"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            sx={{
                                                width: "42px",
                                                height: "42px",
                                                borderRadius: "10px",
                                                position: "absolute",
                                                bottom: "-4px",
                                                left: "50.6%",
                                                transform:
                                                    "translateX(-50%) rotateZ(-45deg) ",
                                                background: "#EB8307",
                                                boxShadow:
                                                    "0px 0px 17px 4px rgba(235,131,7,.5)",
                                            }}
                                        >
                                            <PlayArrowRoundedIcon
                                                sx={{
                                                    transform: "rotateZ(45deg)",
                                                    fontSize: "32px",
                                                    color: "#FFF",
                                                }}
                                            />
                                            <ShowTrailer link={trilerUrl} />
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="p"
                                        fontSize={"12.8px"}
                                        fontWeight={300}
                                        color={"#8f8f8f"}
                                    >
                                        مشاهده تریلر
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        color="warning"
                                        sx={{
                                            color: "#fff",
                                            borderRadius: "35px",
                                            p: "8px 18px",
                                        }}
                                        onClick={() =>
                                            alert(
                                                "توسعه داده نشده است . (تریلر را مشاهده کنید) "
                                            )
                                        }
                                    >
                                        پخش آنلاین
                                    </Button>
                                </Grid>

                                {/* details */}
                                <Grid
                                    item
                                    xs={12}
                                    md={8.4}
                                    width={"100%"}
                                    height={"300px"}
                                >
                                    {/* header details component */}
                                    <HederOfDetils data={data} />

                                    {/* details */}
                                    <Grid container>
                                        <InfoOfDetails data={data} />
                                    </Grid>

                                    {/* little description */}
                                    <Grid container>
                                        <Grid item xs={12} p={"0 10px"}>
                                            <Typography
                                                variant="p"
                                                fontSize="12.8px"
                                                lineHeight="22px"
                                            >
                                                {littleDescription}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    {/* our users rate */}
                                    <Grid container>
                                        <MovieRate
                                            rateData={rate}
                                            slug={slug}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* description */}
            {html.length > 20 && (
                <Grid container display={"flex"} justifyContent={"center"}>
                    <Grid
                        item
                        xs={12}
                        md={11.5}
                        lg={10.8}
                        color={text.primary}
                        position={"relative"}
                    >
                        <Box
                            position={"relative"}
                            top={{ xs: "-60px", sm: "-100px" }}
                            zIndex={1}
                            dangerouslySetInnerHTML={{ __html: html }}
                            sx={{
                                p: "20px",
                                borderRadius: "10px",
                                background:
                                    mode === "dark"
                                        ? "rgba(43, 43,43 ,.7)"
                                        : "rgba(255, 255, 255,.7)",
                            }}
                            className="movie_descrioption"
                        ></Box>
                        <InfoOutlinedIcon
                            sx={{
                                fontSize: "115px",
                                opacity: ".5",
                                position: "absolute",
                                top: "20px",
                                left: "30px",
                            }}
                        />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default Details;
