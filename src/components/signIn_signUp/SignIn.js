import React, { useEffect, useState } from "react";

// MUI
import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

// image
import Image from "mui-image";
import SignInImage from "../../assets/image/signIn.webp";
import { Link, useNavigate } from "react-router-dom";

// component
import LinerLoading from "../../shared/LinerLoading";

// query
import { useLazyQuery } from "@apollo/client";
import { GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL } from "../../graphql/queries";
import { GET_DATA_OF_USER_FOR_LOGE_IN_WITH_USERNAME } from "../../graphql/queries";

// for Alert
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = ({ modal }) => {
    const {
        palette: { text },
    } = useTheme();

    const [name_email, setName_email] = useState("");
    const [passWord, setPassWord] = useState("");

    // FOR ALERT
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_war, setAlert_war] = useState(false);
    const [alert_err, setAlert_err] = useState(false);

    // detect query for email or userName
    let query;
    if (name_email.includes("@")) {
        query = GET_DATA_OF_USER_FOR_LOGE_IN_WITH_EMAIL;
    } else {
        query = GET_DATA_OF_USER_FOR_LOGE_IN_WITH_USERNAME;
    }

    // QUERY
    const [sendQuery, { loading, data }] = useLazyQuery(query, {
        variables: {
            name_email,
        },
    });

    // redirect to home if user loged in
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        userId && navigate("/");
    }, []);

    useEffect(() => {
        if (data) {
            if (data.registeredUser !== null) {
                if (data.registeredUser.psassword === passWord) {
                    localStorage.setItem("userId", data.registeredUser.id);
                    localStorage.setItem(
                        "likedContent",
                        JSON.stringify(data.registeredUser.likedContent)
                    );
                    localStorage.setItem(
                        "favoriteMovies",
                        JSON.stringify(data.registeredUser.favoriteMovies)
                    );
                    setAlert_succ(true);
                    setTimeout(() => window.location.reload(), 2200);
                } else {
                    setAlert_err(true);
                }
            } else {
                setAlert_war(true);
            }
        }
    }, [data]);

    const signInHandler = () => {
        if (name_email && passWord) {
            sendQuery();
        } else {
            setAlert_war(true);
        }
    };

    // margin button
    const margBott = modal ? "0px" : { xs: "100px", md: "20px" };

    return (
        <>
            <Box
                mt={!modal && "50px"}
                sx={{
                    width: "100%",
                    mb: margBott,
                }}
                zIndex={1}
            >
                <Grid container width={"96%"} color={text.primary}>
                    <Grid
                        item
                        xs={12}
                        sm={!modal ? 6.2 : 12}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            gap="20px"
                            sx={{ width: { xs: "90%", sm: "80%", md: "72%" } }}
                        >
                            <Box fontSize="23px" mb="15px">
                                <Divider textAlign="center">
                                    ورود به سایت
                                </Divider>
                            </Box>

                            <TextField
                                value={name_email}
                                onChange={({ target: { value } }) =>
                                    setName_email(value)
                                }
                                id="user_Email_Name"
                                label="نام کاربری یا آدرس ایمیل"
                            />
                            <TextField
                                value={passWord}
                                onChange={({ target: { value } }) =>
                                    setPassWord(value)
                                }
                                id="passWord"
                                label="رمز عبور"
                            />
                            {!loading ? (
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="large"
                                    onClick={signInHandler}
                                >
                                    ورود
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="large"
                                    disabled
                                >
                                    ورود
                                </Button>
                            )}

                            {!modal && (
                                <>
                                    <Box fontSize="23px" mt="15px" mb="15px">
                                        <Divider textAlign="center">
                                            یا{" "}
                                        </Divider>
                                    </Box>
                                    <Button variant="outlined" href="/signup">
                                        ثبت نام در سایت
                                    </Button>
                                </>
                            )}
                            <Link
                                to="#?"
                                onClick={() => alert("توسعه داده نشده است")}
                            >
                                آیا رمز عبور خود را فراموش کرده اید؟
                            </Link>
                        </Box>
                    </Grid>
                    {!modal && (
                        <Grid
                            item
                            sm={5.8}
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            <Image
                                src={SignInImage}
                                duration={1000}
                                width={"100%"}
                                height="100%"
                                sx={{
                                    borderRadius: "15px",
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={2000}
                onClose={() => setAlert_succ(false)}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    شما وارد شدید
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_war}
                autoHideDuration={2000}
                onClose={() => setAlert_war(false)}
            >
                <Alert severity="warning" sx={{ width: "100%" }}>
                    اطلاعات خود را برسی و مجددا تلاش کنید.
                </Alert>
            </Snackbar>
            <Snackbar
                open={alert_err}
                autoHideDuration={2000}
                onClose={() => setAlert_err(false)}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    رمز عبور اشتباه است
                </Alert>
            </Snackbar>

            {/* liner Loading */}
            {loading && <LinerLoading />}
        </>
    );
};

export default SignIn;
