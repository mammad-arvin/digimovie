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
            succ_handleClick();
        } else {
            error_handleClick();
        }
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
                {!liked ? (
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
                <Alert
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    لایک شما ثبت شد!
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_war}
                autoHideDuration={1500}
                onClose={war_handleClose}
            >
                <Alert
                    severity="warning"
                    sx={{ width: "100%" }}
                >
                    لایک شما برداشته شد!
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_error}
                autoHideDuration={1500}
                onClose={error_handleClose}
            >
                <Alert
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    ابتدا باید وارد حساب کاربریتان شوید!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Liks;
