import React, { useEffect, useRef, useState } from "react";

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

    // redirect to home if user loged in
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        userId && navigate("/");
    }, []);

    // STATES FOR ALERT
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_war, setAlert_war] = useState(false);
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
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const phoneRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

    // validation
    const userRef=useRef(null)
    const passRef=useRef(null)
    useEffect(()=>{
        if(!userRegex.test(userName)){
            // userRef.current.style.outLineColor= "2px solid red";            
            userRef.color= "warning";            
        }else{
            userRef.current.style.borderColor= "inherit";            
        }
    
    },[userName, passWord, email, phone, rePassWord])
    const signUpHandler = () => {
       
       console.log();
        // if (name_email && passWord) {
        //     sendQuery();
        // } else {
        //     setAlert_war(true);
        // }
    };

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
                <Grid container xs={11.5} color={text.primary}>
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
                                ref={userRef}
                                label="نام کاربری"
                            />
                            <TextField
                                value={passWord}
                                onChange={({ target: { value } }) =>
                                    setPassWord(value)
                                }
                                id="passWord"
                                label="رمز عبور"
                            />
                            <TextField
                                value={rePassWord}
                                onChange={({ target: { value } }) =>
                                    setRePassWord(value)
                                }
                                id="RePassWord"
                                label="تکرار رمز عبور"
                            />
                            <TextField
                                value={email}
                                onChange={({ target: { value } }) =>
                                    setEmail(value)
                                }
                                id="email"
                                label="ایمیل شما"
                            />
                            <TextField
                                value={phone}
                                onChange={({ target: { value } }) =>
                                    setPhone(value)
                                }
                                id="phone"
                                label="شماره موبایل"
                            />
                            {!loading ? (
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
                                    عضویت در سایت
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

export default SignUp;
