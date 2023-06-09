import React, { useState } from "react";

// MUI
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

//  GraphQL
import { useMutation } from "@apollo/client";
import { iNCREASE_AND_DECREASE_LIKS } from "../graphql/mutations";
import { SEND_USER_LIKED_CONTENT } from "../graphql/mutations";

// for alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Liks = ({ liks, slug }) => {
    const {
        palette: { mode },
    } = useTheme();

    // user Registred?
    const userId = localStorage.getItem("userId");

    //user Liked?
    const getFromLocal = JSON.parse(localStorage.getItem("likedContent"));
    let likedContent = [];
    if (getFromLocal) {
        likedContent = [...getFromLocal];
    }

    let thisItemLiked;
    if (likedContent) {
        thisItemLiked = likedContent.find((item) => item === slug);
    }

    // mutation for sent user liked Content
    const [sendUserLikedContent] = useMutation(SEND_USER_LIKED_CONTENT);

    // for alert
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_war, setAlert_war] = useState(false);
    const [alert_error, setAlert_error] = useState(false);

    const succ_handleClick = () => {
        setAlert_succ(true);
    };

    const succ_handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setAlert_succ(false);
    };
    const war_handleClick = () => {
        setAlert_war(true);
    };

    const war_handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setAlert_war(false);
    };
    const error_handleClick = () => {
        setAlert_error(true);
    };

    const error_handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setAlert_error(false);
    };

    // for show liked or not liked icons
    const [liked, setLiked] = useState(false);

    // get initial value for increase and decrease
    const [liksValue, setLiksValue] = useState(liks);

    // mutations for increase and decrease
    const [in_de_crease] = useMutation(iNCREASE_AND_DECREASE_LIKS);

    const de_clickHandler = () => {
        if (userId) {
            setLiked(false);
            setLiksValue((prev) => prev - 1);
            in_de_crease({
                variables: {
                    liks: liksValue - 1,
                    slug,
                },
            });

            // submit to user likedContent
            likedContent = likedContent.filter((item) => item !== slug);
            submitToLocal_Graph();

            war_handleClick();
        } else {
            error_handleClick();
        }
    };

    const in_clickHandler = () => {
        if (userId) {
            setLiked(true);
            setLiksValue((prev) => prev + 1);
            in_de_crease({
                variables: {
                    liks: liksValue + 1,
                    slug,
                },
            });

            // submit to user likedContent
            likedContent.push(slug);
            submitToLocal_Graph();

            succ_handleClick();
        } else {
            error_handleClick();
        }
    };

    // for submit and clean code
    const submitToLocal_Graph = () => {
        localStorage.setItem("likedContent", JSON.stringify(likedContent));
        sendUserLikedContent({
            variables: {
                userId,
                likedContent,
            },
        });
    };

    return (
        <>
            <Grid
                item
                display="flex"
                flexDirection="row"
                alignItems="center"
                p="8px 10px"
                borderRadius="20px"
                bgcolor={mode === "dark" ? "#3A3A3A" : "#ececec"}
                gap="7px"
            >
                {!liked && !thisItemLiked ? (
                    <FavoriteBorderIcon
                        color="favMovie"
                        sx={{ fontSize: "20px" }}
                        onClick={() => in_clickHandler()}
                    />
                ) : (
                    <FavoriteIcon
                        color="favMovie"
                        sx={{ fontSize: "20px" }}
                        onClick={() => de_clickHandler()}
                    />
                )}

                <Typography>{liksValue}</Typography>
            </Grid>

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={1500}
                onClose={succ_handleClose}
            >
                <Alert severity="success">لایک شما ثبت شد!</Alert>
            </Snackbar>

            <Snackbar
                open={alert_war}
                autoHideDuration={1500}
                onClose={war_handleClose}
            >
                <Alert severity="warning">لایک شما برداشته شد!</Alert>
            </Snackbar>

            <Snackbar
                open={alert_error}
                autoHideDuration={1500}
                onClose={error_handleClose}
            >
                <Alert severity="error">
                    ابتدا باید وارد حساب کاربریتان شوید!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Liks;
