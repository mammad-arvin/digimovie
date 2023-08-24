import React from "react";

// Mui
import { Box, Stack, Typography } from "@mui/material";

// router dom
import { Link } from "react-router-dom";

// helper function
import { miniMoviePoserTitle } from "../../helpers/helperFunctions";

// icons
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// image
import RightWave from "./moviePosterRightWaveDownload.png";

// styled components
import styled from "styled-components";

// box of svg
const BoxOfLeftWave = styled(Box)`
    width: 30%;
    position: absolute;
    top: -21%;
    left: -100px;
    transition: 0.3s;
`;

const BoxOfRightWave = styled(Box)`
    position: absolute;
    top: 3%;
    right: -100px;
    transition: 0.3s;
`;

const StackOfTopSvg = styled(Stack)`
    border-radius: 6px;
    overflow: hidden;

    &:hover ${BoxOfLeftWave} {
        left: -3px;
    }
    &:hover ${BoxOfRightWave} {
        right: -23px;
    }
`;

export const moviePoster = (data) => {
    return (
        <React.Fragment key={data.slug}>
            <Link to={`/movies/${data.slug}`}>
                <StackOfTopSvg gap={1.5} width="180px" position="relative">
                    {/* left wave for download */}
                    <BoxOfLeftWave>
                        <Box>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 68 341"
                            >
                                <path
                                    fillRule="evenodd"
                                    opacity="0.851"
                                    fill="rgb(0, 0, 0)"
                                    d="M0.005,-0.011 C0.041,1.280 0.072,2.584 0.072,4.005 C0.072,36.067 8.486,60.983 15.910,76.735 L57.177,133.667 C70.853,152.534 70.853,183.123 57.177,201.990 L26.908,243.749 L27.010,244.013 C27.010,244.013 0.072,278.915 0.072,336.920 C0.072,338.357 0.041,339.675 0.005,340.981 L0.005,-0.011 Z"
                                ></path>
                            </svg>
                        </Box>
                        <Typography
                            variant="p"
                            fontSize="15.2px"
                            fontWeight="300"
                            sx={{
                                position: "absolute",
                                top: "120px",
                                left: "-19px",
                                transform: "rotate(90deg)",
                                color: "#FFF",
                            }}
                        >
                            Download
                        </Typography>
                    </BoxOfLeftWave>

                    {/* right wave */}
                    <BoxOfRightWave>
                        <img src={RightWave} style={{ width: "80%" }} />
                        <FileDownloadOutlinedIcon
                            color="warning"
                            fontSize="large"
                            sx={{
                                position: "absolute",
                                top: "110px",
                                left: "22px",
                            }}
                        />
                    </BoxOfRightWave>

                    {/* poster image */}
                    <img
                        src={data.images[1].url}
                        height="268px"
                        style={{ borderRadius: "6px" }}
                    />
                    <Typography variant="p" fontSize="16px" textAlign="center">
                        {miniMoviePoserTitle(data.title)}
                    </Typography>
                </StackOfTopSvg>
            </Link>
        </React.Fragment>
    );
};

const Movies = () => {
    return <div></div>;
};

export default Movies;
