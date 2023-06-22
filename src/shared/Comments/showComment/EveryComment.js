import React, { useState } from "react";

// MUI
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

// component
import ShowTimeAgo from "../../ShowTimeAgo";

// style
import styled from "styled-components";
const StackStyled = styled(Stack)`
    width: 43px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    border-radius: 8px;
    background: ${(prop) => (prop.mode === "dark" ? "#1D1D1D" : "#F2F2F2")};
    cursor: pointer;
`;

const EveryComment = ({ item }) => {
    const {
        palette: { mode, text },
    } = useTheme();

    // show spile comment
    const [showSpoil, setShowSpoil] = useState(false);

    return (
        <Box
            width="100%"
            minHeight="134px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt="10px"
            p={1}
            color={text.primary}
            borderRadius="10px"
            bgcolor={mode === "dark" ? "#101010" : "#E8E8E8"}
            position={"relative"}
        >
            <Grid container height="100%">
                <Grid
                    item
                    xs={12}
                    sm={2.5}
                    display={"flex"}
                    justifyContent="center"
                    alignItems="center"
                    p="3px"
                >
                    <Grid
                        item
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                    >
                        <Box display={"flex"} gap="7px">
                            {/* dislikes */}
                            <StackStyled
                                mode={mode}
                                onClick={() => alert("توسعه داده نشده")}
                            >
                                <ThumbDownOffAltOutlinedIcon
                                    sx={{ color: "#E91E63" }}
                                />
                                <Typography variant="subtitle2">
                                    {Number(item.disLikes)}
                                </Typography>
                            </StackStyled>

                            {/* uplikes */}
                            <StackStyled
                                mode={mode}
                                onClick={() => alert("توسعه داده نشده")}
                            >
                                <ThumbUpOutlinedIcon
                                    sx={{ color: "#8BC34A" }}
                                />
                                <Typography variant="subtitle2">
                                    {Number(item.upLikes)}
                                </Typography>
                            </StackStyled>
                        </Box>

                        <Box
                            sx={{
                                width: "55px",
                                height: "55px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px solid #2f2f2f",
                                borderRadius: "14px",
                                transform: "rotate(45deg)",
                                cursor: "pointer",
                            }}
                        >
                            <PersonOutlinedIcon
                                sx={{
                                    color: "orange",
                                    transform: "rotate(-45deg)",
                                }}
                                onClick={() => alert("توسعه داده نشده")}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={9.5}
                    sx={item.spoil && !showSpoil && { filter: "blur(6px)" }}
                >
                    {/* userName spoil and timeAgo  */}
                    <Grid item xs={12}>
                        <Stack gap="20px" p={1}>
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                            >
                                <Typography
                                    variant="h6"
                                    fontSize={"16px"}
                                    color={"favMovie.main"}
                                >
                                    {item.registeredUsercomment.userName}
                                </Typography>
                                {!item.spoil && (
                                    <Typography
                                        variant="p"
                                        sx={{
                                            p: "3px 8px",
                                            borderRadius: "5px",
                                            background:
                                                mode === "dark"
                                                    ? "#212121"
                                                    : "#cccccc",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => alert("توسعه داده نشده")}
                                    >
                                        گزارش اسپویل
                                        <ReportProblemOutlinedIcon fontSize="small" />
                                    </Typography>
                                )}
                                <Box fontSize={"12px"}>
                                    (<ShowTimeAgo date={item.createdAt} />)
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* description ans replay */}
                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mt={1}
                        p={"0 10px"}
                    >
                        <Box>
                            <Typography variant="p">
                                {item.description}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px solid #2f2f2f",
                                borderRadius: "11px",
                                transform: "rotate(45deg)",
                                cursor: "pointer",
                            }}
                        >
                            <ReplyOutlinedIcon
                                sx={{
                                    color: "orange",
                                    transform: "rotate(-45deg)",
                                }}
                                onClick={() => alert("توسعه داده نشده")}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* btn for show spoil comment */}
            {item.spoil && !showSpoil && (
                <Box
                    sx={{
                        position: "absolute",
                        textAlign: "center",
                        padding: "7px 12px 0 12px",
                    }}
                    zIndex={51}
                >
                    <Typography
                        sx={{
                            p: "5px 25px",
                            borderRadius: "8px",
                            background: mode === "dark" ? "black" : "#CCCCCC",
                        }}
                    >
                        این دیدگاه حاوی اسپویل است
                    </Typography>
                    <Button
                        size="small"
                        color="favMovie"
                        sx={{
                            mt: "5px",
                            p: "2px 20px",
                            borderRadius: "8px",
                            background: mode === "dark" ? "black" : "#CCCCCC",
                        }}
                        onClick={() => setShowSpoil(true)}
                    >
                        نمایش دیدگاه
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default EveryComment;
