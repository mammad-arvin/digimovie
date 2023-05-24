import React from "react";

// mui
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

// router dom
import { Link } from "react-router-dom";

const SocialMediaLink = ({ FT, ET, Icon, link }) => {
    const {
        palette: { mode },
    } = useTheme();

    return (
        <Link
            to={link}
            target="_blank"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
            <Box
                sx={{
                    direction: "rtl",
                    width: { xs: "90%", md: "266px" },
                    height: "81px",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "10px",
                    background: mode === "dark" ? "#151515" : "#CCCCCC",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="7px"
                    mt={0.5}
                >
                    {Icon === "Instagram" ? (
                        <InstagramIcon
                            color="favMovie"
                            sx={{ fontSize: "30px" }}
                        />
                    ) : (
                        <TelegramIcon
                            color="favMovie"
                            sx={{ fontSize: "30px" }}
                        />
                    )}
                    <Typography variant="h4" fontWeight="light" color="#898989">
                        /
                    </Typography>
                </Stack>
                <Stack spacing={0.5}>
                    <Typography
                        variant="p"
                        fontSize="13.6"
                        sx={{ color: mode === "dark" ? "#fff" : "#000" }}
                    >
                        {FT}
                    </Typography>
                    <Typography variant="p" fontSize="13.6" color="#EB8307">
                        {ET}
                    </Typography>
                </Stack>
            </Box>
        </Link>
    );
};

export default SocialMediaLink;
