import React from "react";

// MUI
import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

// image
import Image from "mui-image";
import SignInImage from "../../assets/image/signIn.webp";
import { Link } from "react-router-dom";

const SignIn = () => {
    const {
        palette: { text },
    } = useTheme();

    return (
        <>
            <Box
                mt="30px"
                sx={{
                    width: "100vw" ,
                    height: "100vh",
                }}
                zIndex={1}
            >
                <Grid container xs={11.5} color={text.primary} >
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
                                    ورود به سایت
                                </Divider>
                            </Box>

                            <TextField
                                id="user_Email_Name"
                                label="نام کاربری یا آدرس ایمیل"
                            />
                            <TextField id="passWord" label="رمز عبور" />
                            <Button
                                variant="contained"
                                color="warning"
                                size="large"
                                type="submit"
                            >
                                ورود
                            </Button>
                            <Box fontSize="23px" mt="15px" mb="15px">
                                <Divider textAlign="center">یا </Divider>
                            </Box>
                            <Button variant="outlined" href="/signup">
                                ثبت نام در سایت
                            </Button>
                            <Link
                                to="#?"
                                onClick={() => alert("Not Developed")}
                            >
                                آیا رمز عبور خود را فراموش کرده اید؟
                            </Link>
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
        </>
    );
};

export default SignIn;
