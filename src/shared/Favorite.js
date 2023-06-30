import React, { useState } from "react";

// MUI
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

// mutation
import { useMutation } from "@apollo/client";
import { SEND_USER_FAVORITE_MOVIES } from "../graphql/mutations";

// for alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Favorite = ({ slug, gallery }) => {
    // user Registred?
    const userId = localStorage.getItem("userId");

    // for alert
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_war, setAlert_war] = useState(false);
    const [alert_error, setAlert_error] = useState(false);

    // this movie faved?
    const getFromLocal = JSON.parse(localStorage.getItem("favoriteMovies"));
    let favoriteMovies = [];
    if (getFromLocal) {
        favoriteMovies = [...getFromLocal];
    }

    let thisItemFaved;
    if (favoriteMovies) {
        thisItemFaved = favoriteMovies.find((item) => item === slug);
    }

    // mutation
    const [sendFavorite, { loading }] = useMutation(SEND_USER_FAVORITE_MOVIES);

    // for submit and clean code
    const submitToLocal_Graph = () => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        sendFavorite({
            variables: {
                favoriteMovies,
                userId,
            },
        });
    };

    const addHandler = () => {
        if (userId) {
            if (JSON.parse(localStorage.getItem("favoriteMovies"))) {
                favoriteMovies = [
                    ...JSON.parse(localStorage.getItem("favoriteMovies")),
                ];
            }
            favoriteMovies.push(slug);
            submitToLocal_Graph();
            gallery && alert("به لیست علاقه مندی اضافه شد!");
            !gallery && setAlert_succ(true);
        } else {
            !gallery
                ? setAlert_error(true)
                : alert("ابتدا باید وارد حساب کاربریتان شوید!");
        }
    };

    const oddHandler = () => {
        if (userId) {
            if (JSON.parse(localStorage.getItem("favoriteMovies"))) {
                favoriteMovies = [
                    ...JSON.parse(localStorage.getItem("favoriteMovies")),
                ];
            }
            favoriteMovies = favoriteMovies.filter((item) => item !== slug);
            submitToLocal_Graph();
            gallery && alert("از لیست علاقه مندی حذف شد!");
            !gallery && setAlert_war(true);
        } else {
            !gallery
                ? setAlert_error(true)
                : alert("ابتدا باید وارد حساب کاربریتان شوید!");
        }
    };

    return (
        <>
            {!thisItemFaved ? (
                <IconButton
                    sx={{
                        color: "#fff",
                        border: "1px solid #CCCCCC",
                        borderRadius: "50%",
                        position: "relative",
                    }}
                    onClick={() => addHandler()}
                >
                    {loading ? (
                        <CircularProgress
                            size={"1rem"}
                            sx={{ color: "#FFF" }}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            sx={{ fontSize: "17px" }}
                            color="#FFF"
                        />
                    )}
                    <AddCircleRoundedIcon
                        sx={{
                            fontSize: "16px",
                            position: "absolute",
                            top: "0",
                            right: "-8px",
                        }}
                    />
                </IconButton>
            ) : (
                <IconButton
                    sx={{
                        color: "#fff",
                        border: "1px solid #CCCCCC",
                        borderRadius: "50%",
                        position: "relative",
                    }}
                    onClick={() => oddHandler()}
                >
                    {loading ? (
                        <CircularProgress
                            size={"1rem"}
                            sx={{ color: "#FFF" }}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            sx={{ color: "#ea0721", fontSize: "17px" }}
                            color="#FFF"
                        />
                    )}
                    <DoDisturbOnIcon
                        sx={{
                            color: "#ea0721",
                            fontSize: "16px",
                            position: "absolute",
                            top: "0",
                            right: "-8px",
                        }}
                    />
                </IconButton>
            )}

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={1500}
                onClose={() => setAlert_succ(false)}
            >
                <Alert severity="success">به لیست علاقه مندی اضافه شد!</Alert>
            </Snackbar>

            <Snackbar
                open={alert_war}
                autoHideDuration={1500}
                onClose={() => setAlert_war(false)}
            >
                <Alert severity="warning">از لیست علاقه مندی حذف شد!</Alert>
            </Snackbar>

            <Snackbar
                open={alert_error}
                autoHideDuration={1500}
                onClose={() => setAlert_error(false)}
            >
                <Alert severity="error">
                    ابتدا باید وارد حساب کاربریتان شوید!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Favorite;
