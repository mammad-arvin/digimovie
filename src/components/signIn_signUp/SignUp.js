import React, { useEffect, useState } from "react";

// router dom
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

// image
import Image from "mui-image";
import SignInImage from "../../assets/image/signIn.webp";

// component
import LinerLoading from "../../shared/LinerLoading";

// mutation
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";

// for Alert
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
    const {
        palette: { text },
    } = useTheme();

    // redirect to home if user loged in or signed up
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        userId && navigate("/");
    }, []);

    // STATES FOR ALERT
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_err, setAlert_err] = useState(false);

    // states FOR form
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [rePassWord, setRePassWord] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // mutation
    const [createUser, { loading, data, error }] = useMutation(CREATE_USER);

    // Regex
    const userRegex = /^[a-zA-Z\-]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const phoneRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

    // field validation
    const regexValidation = (regex, value) => {
        if (value) {
            return !regex.test(value);
        }
    };

    // form  validation
    const formResult = () => {
        if (
            rePassWord === passWord &&
            !regexValidation(userRegex, userName) &&
            !regexValidation(passRegex, passWord) &&
            !regexValidation(emailRegex, email) &&
            !regexValidation(phoneRegex, phone) &&
            userName.length > 3 &&
            passWord.length > 5 &&
            email.length > 4 &&
            phone.length >= 10
        ) {
            return true;
        } else {
            return false;
        }
    };

    // sent data when form validated
    const signUpHandler = () => {
        if (formResult()) {
            createUser({
                variables: {
                    userName,
                    email,
                    passWord,
                    phone,
                },
            });
        }
    };

    // success ? so setItem |   error ? show Alert of error
    useEffect(() => {
        if (data) {
            console.log(data);
            localStorage.setItem("userId", data.publishRegisteredUser.id);
            localStorage.setItem(
                "likedContent",
                JSON.stringify(data.publishRegisteredUser.likedContent)
            );
            setAlert_succ(true);
            setTimeout(() => window.location.reload(), 2800);
        } else if (error) {
            setAlert_err(true);
        }
    }, [data, error]);

    return (
        <>
            <Box
                mt="50px"
                sx={{
                    width: "100vw",
                    mb: { xs: "100px", md: "20px" },
                }}
                zIndex={1}
            >
                <Grid container width={"96%"} color={text.primary}>
                    <Grid
                        item
                        xs={12}
                        sm={6.2}
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
                            sx={{ width: { xs: "90%", sm: "70%" } }}
                        >
                            <Box fontSize="23px" mb="15px">
                                <Divider textAlign="center">
                                    عضویت در سایت
                                </Divider>
                            </Box>

                            <TextField
                                value={userName}
                                onChange={({ target: { value } }) =>
                                    setUserName(value)
                                }
                                label="نام کاربری"
                                autoFocus={true}
                                required={true}
                                helperText="فقط حرف لاتین وارد کنید"
                                error={regexValidation(userRegex, userName)}
                            />
                            <TextField
                                value={passWord}
                                onChange={({ target: { value } }) =>
                                    setPassWord(value)
                                }
                                label="رمز عبور"
                                required={true}
                                helperText="بین 6 تا 16 | عدد و حرف"
                                error={regexValidation(passRegex, passWord)}
                            />
                            <TextField
                                value={rePassWord}
                                onChange={({ target: { value } }) =>
                                    setRePassWord(value)
                                }
                                label="تکرار رمز عبور"
                                required={true}
                                error={rePassWord !== passWord}
                            />
                            <TextField
                                value={email}
                                onChange={({ target: { value } }) =>
                                    setEmail(value)
                                }
                                label="ایمیل شما"
                                required={true}
                                helperText="ایمیل معتبر وارد کنید"
                                error={regexValidation(emailRegex, email)}
                            />
                            <TextField
                                value={phone}
                                onChange={({ target: { value } }) =>
                                    setPhone(value)
                                }
                                label="شماره موبایل"
                                required={true}
                                helperText="شماره تلفن معتبر وارد کنید"
                                error={regexValidation(phoneRegex, phone)}
                            />
                            {!loading && formResult() ? (
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="large"
                                    onClick={signUpHandler}
                                >
                                    عضویت در سایت
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="large"
                                    disabled
                                >
                                    عضویت ( فرم را تکمیل کنید )
                                </Button>
                            )}
                            <Box fontSize="23px" mt="15px" mb="15px">
                                <Divider textAlign="center">یا </Divider>
                            </Box>
                            <Button variant="outlined" href="/signin">
                                ورود به پنل کاربری
                            </Button>
                        </Box>
                    </Grid>
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
                </Grid>
            </Box>

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={2500}
                onClose={() => setAlert_succ(false)}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    ثبت نام شما موفقیت آمیز بود
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_err}
                autoHideDuration={3000}
                onClose={() => setAlert_err(false)}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    نام کاربری موجود میباشد .یا خطایی رخ داده است.
                </Alert>
            </Snackbar>

            {/* liner Loading */}
            {loading && <LinerLoading />}
        </>
    );
};

export default SignUp;
