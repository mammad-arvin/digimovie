import React from "react";

// MUI
import { Box, Grid, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

// helper Functions
import {
    joinCountries,
    joinDirector,
    joinGenre,
    joinStars,
} from "../../../helpers/helperFunctions";

// icons
import TvIcon from "@mui/icons-material/Tv";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TeatrIcon from "./teatr.png";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Filter9PlusOutlinedIcon from "@mui/icons-material/Filter9PlusOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";

//styled components
import styled from "styled-components";
const MovieInfoBox = styled(Box)`
    width: 70px;
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
`;

const EveryInfo = styled(Box)`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transform: rotateZ(-45deg);
    background: ${(prop) => prop.color};
    transition: 0.3s;

    &:hover {
        box-shadow: ${(props) => props.shadows};
    }
`;

const everyChildStyle = {
    transform: "rotate(45deg)",
    fontSize: "22px",
    color: "#fff",
};

// sx styles
const boxStyle = {
    width: "auto",
    display: "flex",
    mb: "25px",
    fontSize: { xs: "11.3px", sm: "13.6px" },
};

const iconStyle = {
    fontSize: "20px",
    color: "#e56d23",
    ml: "4px",
};

const InfoOfDetails = ({ data }) => {
    const {
        quality,
        manyRerence,
        authors,
        duration,
        ages,
        ccBooleans,
        giftCounter,
        movieLinkFa,
    } = data;

    return (
        <Grid
            item
            xs={12}
            mt={3}
            height="243px"
            p={"0 10px"}
            sx={{
                display: "grid",
                gridTemplateColumns: "60% 40%",
                position: "relative",
            }}
        >
            {/* info of cc duble and gift count */}
            <MovieInfoBox
                sx={{
                    display: { xs: "none", sm: "flex" },
                    transform: {
                        sm: "translate(-10%)",
                        md: "translate(-15%)",
                        lg: "translate(-50%)",
                    },
                }}
            >
                {giftCounter && (
                    <Tooltip
                        title={"برنده" + ` ${giftCounter} ` + "جایزه"}
                        placement="right"
                        arrow
                    >
                        <EveryInfo
                            color="#EB8307"
                            shadows="0px 0px 17px 4px rgba(235, 132, 7 , 0.4)"
                        >
                            <EmojiEventsOutlinedIcon sx={everyChildStyle} />
                        </EveryInfo>
                    </Tooltip>
                )}

                {movieLinkFa && (
                    <Tooltip
                        title="همراه با نسخه دوبله شده"
                        placement="right"
                        arrow
                    >
                        <EveryInfo
                            color="#2196F3"
                            shadows="0px 0px 17px 4px rgba(33, 150, 243 , 0.4)"
                        >
                            <MicNoneOutlinedIcon sx={everyChildStyle} />
                        </EveryInfo>
                    </Tooltip>
                )}

                {ccBooleans && (
                    <Tooltip
                        title="همراه با زیرنویس چسبیده"
                        placement="right"
                        arrow
                    >
                        <EveryInfo
                            color="#66cc33"
                            shadows="0px 0px 17px 4px rgba(102, 204, 51 , 0.4)"
                        >
                            <ClosedCaptionOffOutlinedIcon
                                sx={everyChildStyle}
                            />
                        </EveryInfo>
                    </Tooltip>
                )}
            </MovieInfoBox>

            {/* movie info */}
            <Box>
                <Box sx={boxStyle}>
                    <TvIcon sx={iconStyle} />
                    <Typography variant="p">کیفیت : {quality}</Typography>
                </Box>
                <Box sx={boxStyle}>
                    <FolderOpenIcon sx={iconStyle} />
                    <Typography variant="p">
                        ژانر : {joinGenre(manyRerence)}
                    </Typography>
                </Box>
                <Box sx={boxStyle}>
                    <Person3OutlinedIcon sx={iconStyle} />
                    <Typography variant="p">
                        کارگردان : {joinDirector(manyRerence)}
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Box sx={boxStyle}>
                    <TimerOutlinedIcon sx={iconStyle} />
                    <Typography variant="h6" fontSize={"13px"}>
                        زمان : {duration} دقیقه
                    </Typography>
                </Box>
                <Box sx={boxStyle}>
                    <Filter9PlusOutlinedIcon sx={iconStyle} />
                    <Typography variant="p">رده سنی : {ages}</Typography>
                </Box>
                <Box sx={boxStyle}>
                    <LanguageOutlinedIcon sx={iconStyle} />
                    <Typography variant="p">
                        محصول کشور : {joinCountries(manyRerence)}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ gridColumn: "1/3" }}>
                <Box sx={boxStyle}>
                    <CreateOutlinedIcon sx={iconStyle} />
                    <Typography variant="p">نویسنده : {authors}</Typography>
                </Box>
                <Box sx={boxStyle}>
                    <a
                        href="https://www.freepik.com/icon/comedy_1719842?sign-up=google"
                        target="_blank"
                        title="free icon website"
                    >
                        <img
                            src={TeatrIcon}
                            width="20px"
                            height="20px"
                            style={{ marginLeft: "4px" }}
                        />
                    </a>
                    <Typography variant="p" width={"100%"}>
                        ستارگان : {joinStars(manyRerence)}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default InfoOfDetails;
