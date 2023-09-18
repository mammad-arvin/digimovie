import React, { useState } from "react";

// MUI
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// icons
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

// component
import ShowTimeAgo from "../../ShowTimeAgo";

// mutation
import { useMutation } from "@apollo/client";
import { UPDATE_COMMENT_AND_USER_AFTER_LIKE_DISLIKE } from "../../../graphql/mutations";

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

// for alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EveryComment = ({ item }) => {
    const {
        palette: { mode, text },
    } = useTheme();

    // show spile comment
    const [showSpoil, setShowSpoil] = useState(false);

    // mutation
    const [updateData] = useMutation(
        UPDATE_COMMENT_AND_USER_AFTER_LIKE_DISLIKE
    );

    // for alert
    const [up_succ, setUp_succ] = useState(false);
    const [up_war, setUp_war] = useState(false);
    const [dis_succ, setDis_succ] = useState(false);
    const [dis_war, setDis_war] = useState(false);
    const [userError, setUserError] = useState(false);

    // like and dislike handler
    // initial value of data
    const [uplikes, setUplikes] = useState(Number(item.upLikes));
    const [dislikes, setDislikes] = useState(Number(item.disLikes));
    const userId = localStorage.getItem("userId");
    const dislikedComments = JSON.parse(
        localStorage.getItem("dislikedComments")
    );
    const likedCommets = JSON.parse(localStorage.getItem("likedCommets"));

    // was liked or disliked?
    const [wasLiked, setWasLiked] = useState(false);
    !wasLiked &&
        userId &&
        likedCommets.map((itm) => itm === item.id && setWasLiked(true));
    const [wasDisliked, setWasDisliked] = useState(false);
    !wasDisliked &&
        userId &&
        dislikedComments.map((itm) => itm === item.id && setWasDisliked(true));

    // like handler
    const likeHandler = () => {
        if (!wasLiked) {
            // remove from dislikes
            dislikedComments.map(
                (i, index) => i === item.id && dislikedComments.splice(index, 1)
            );
            wasDisliked && setDislikes(dislikes - 1);

            // push to uplikes && increase uplikes
            likedCommets.push(item.id);
            setUplikes(uplikes + 1);
            setWasLiked(true);

            // submit to localstorage and graph backend
            wasDisliked
                ? submitToLocal_Graph(
                      uplikes + 1,
                      dislikes - 1,
                      likedCommets,
                      dislikedComments
                  )
                : submitToLocal_Graph(
                      uplikes + 1,
                      dislikes,
                      likedCommets,
                      dislikedComments
                  );

            //   for dislike agin
            setWasDisliked(false);

            // show alert
            setUp_succ(true);
        } else {
            setUp_war(true);
        }
    };

    // dislike handler

    const dislikeHandler = () => {
        if (!wasDisliked) {
            // remove from liked
            likedCommets.map(
                (i, index) => i === item.id && likedCommets.splice(index, 1)
            );
            wasLiked && setUplikes(uplikes - 1);

            // push to dislikes && increase dislikes
            dislikedComments.push(item.id);
            setDislikes(dislikes + 1);
            setWasDisliked(true);

            // submit to localstorage and graph backend
            wasLiked
                ? submitToLocal_Graph(
                      uplikes - 1,
                      dislikes + 1,
                      likedCommets,
                      dislikedComments
                  )
                : submitToLocal_Graph(
                      uplikes,
                      dislikes + 1,
                      likedCommets,
                      dislikedComments
                  );

            // for like agin
            setWasLiked(false);

            // show alert
            setDis_succ(true);
        } else {
            setDis_war(true);
        }
    };

    // submit to local and grah handler
    const submitToLocal_Graph = (
        uplikes,
        dislikes,
        likedCommets,
        dislikedComments
    ) => {
        // TO LOCAL
        localStorage.setItem("likedCommets", JSON.stringify(likedCommets));
        localStorage.setItem(
            "dislikedComments",
            JSON.stringify(dislikedComments)
        );

        // TO GRAPH
        updateData({
            variables: {
                id: item.id,
                uplikes,
                dislikes,
                userName: item.registeredUsercomment.userName,
                likedCommets,
                dislikedComments,
            },
        });
    };

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
                                onClick={() =>
                                    userId
                                        ? dislikeHandler()
                                        : setUserError(true)
                                }
                            >
                                <ThumbDownOffAltOutlinedIcon
                                    sx={{ color: "#E91E63" }}
                                />
                                <Typography variant="subtitle2">
                                    {dislikes}
                                </Typography>
                            </StackStyled>

                            {/* uplikes */}
                            <StackStyled
                                mode={mode}
                                onClick={() =>
                                    userId ? likeHandler() : setUserError(true)
                                }
                            >
                                <ThumbUpOutlinedIcon
                                    sx={{ color: "#8BC34A" }}
                                />
                                <Typography variant="subtitle2">
                                    {uplikes}
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

            {/* show alert */}
            {/* for up like */}
            <Snackbar
                open={up_succ}
                autoHideDuration={1500}
                onClose={() => setUp_succ(false)}
            >
                <Alert severity="success">لایک شما ثبت شد!</Alert>
            </Snackbar>

            <Snackbar
                open={up_war}
                autoHideDuration={1500}
                onClose={() => setUp_war(false)}
            >
                <Alert severity="warning">قبلا لایک کرده اید</Alert>
            </Snackbar>

            {/* for dislike */}
            <Snackbar
                open={dis_succ}
                autoHideDuration={1500}
                onClose={() => setDis_succ(false)}
            >
                <Alert severity="success">لایک منفی شما ثبت شد!</Alert>
            </Snackbar>

            <Snackbar
                open={dis_war}
                autoHideDuration={1500}
                onClose={() => setDis_war(false)}
            >
                <Alert severity="warning">قبلا لایک منفی کرده اید</Alert>
            </Snackbar>

            {/* user error alert */}
            <Snackbar
                open={userError}
                autoHideDuration={1500}
                onClose={() => setUserError(false)}
            >
                <Alert severity="error">
                    ابتدا باید وارد حساب کاربریتان شوید
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default EveryComment;
