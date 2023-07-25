import React, { useState } from "react";

// mui
import { Box, Grid, Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// mutation
import { useMutation } from "@apollo/client";
import {
    UPDATE_RATEDCONTENT_OF_USER,
    UPDATE_RATE_OF_MOVIE,
} from "../../../graphql/mutations";

// for alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MovieRate = ({ rateData, slug }) => {
    // user loged in ?
    const userId = localStorage.getItem("userId");

    // for alert
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_war, setAlert_war] = useState(false);
    const [alert_error, setAlert_error] = useState(false);

    // content Rated?
    const getFromLocal = JSON.parse(localStorage.getItem("ratedContent"));
    let ratedContent = [];
    if (getFromLocal) {
        ratedContent = [...getFromLocal];
    }

    let thisItemRated;
    if (ratedContent) {
        thisItemRated = !!ratedContent.find((item) => item === slug);
    }

    // give rate and counteOfReted to state
    const { rate, countOfRated, id } = rateData;
    const [countOfRatedVal, setCountOfRateVal] = useState(countOfRated);
    const [value, setValue] = useState(rate);

    // Mutations
    const [updateRatedContent] = useMutation(UPDATE_RATEDCONTENT_OF_USER);
    const [updataRate] = useMutation(UPDATE_RATE_OF_MOVIE);

    // RatingHandler
    const RatingHandler = (newValue) => {
        if (userId) {
            if (!thisItemRated) {
                // update rate of movie
                const result =
                    (countOfRated * rate + newValue) / (countOfRated + 1);
                const upCounter = countOfRatedVal + 1;
                setCountOfRateVal(upCounter);
                updataRate({
                    variables: {
                        upCounter,
                        result,
                        slug,
                        id,
                    },
                });

                // update retedContent
                ratedContent.push(slug);
                localStorage.setItem(
                    "ratedContent",
                    JSON.stringify(ratedContent)
                );
                updateRatedContent({
                    variables: {
                        ratedContent,
                        userId,
                    },
                });
                setValue(newValue);
                setAlert_succ(true);
            } else {
                setAlert_war(true);
            }
        } else {
            setAlert_error(true);
        }
    };

    return (
        <Grid
            item
            xs={12}
            mt={2}
            p="0 10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
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
                    {Math.round(rate * 20)}
                </Typography>
                <Typography variant="p">امتیاز منتقدین</Typography>
            </Box>
            <Stack>
                <Box sx={{ direction: "ltr" }}>
                    <Rating
                        name="half-rating"
                        defaultValue={value}
                        precision={0.1}
                        onChange={(event, newValue) =>
                            RatingHandler(event, newValue)
                        }
                    />
                </Box>
                <Typography
                    variant="subtitle2"
                    fontSize="13.6px"
                    sx={{ wordSpacing: "5px", textAlign: "center" }}
                >
                    {rate.toFixed(1)} از {countOfRatedVal} امتیاز
                </Typography>
            </Stack>

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={2000}
                onClose={() => setAlert_succ(false)}
            >
                <Alert severity="success">امتیاز شما ثبت شد.</Alert>
            </Snackbar>

            <Snackbar
                open={alert_war}
                autoHideDuration={2000}
                onClose={() => setAlert_war(false)}
            >
                <Alert severity="warning">
                    قبلا امتیاز داده اید. امتیاز ثبت نشد.
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_error}
                autoHideDuration={2000}
                onClose={() => setAlert_error(false)}
            >
                <Alert severity="error">
                    ابتدا باید وارد حساب کاربریتان شوید!
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default MovieRate;
