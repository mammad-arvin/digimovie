import React from "react";

// MUI
import { Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

// components
import Title from "./Title";
import SendComment from "./SendComment";
import SignWithModal from "../../components/signIn_signUp/SignWithModal";
import ShowComments from "./showComment/ShowComments";

const Comments = ({ comments }) => {
    const {
        palette: { text, mode },
    } = useTheme();

    return (
        <Grid
            item
            xs={12}
            md={10.8}
            color={text.primary}
            borderRadius="10px"
            bgcolor={mode === "dark" ? "#1D1D1D" : "#FFFFFF"}
            mb="40px"
            sx={{
                p: { xs: "30px 7px", sm: "30px" },
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* title */}
            <Title counter={comments.length} />

            {/* send comment */}
            {localStorage.getItem("userId") ? (
                <SendComment />
            ) : (
                <Box position={"relative"}>
                    <Typography textAlign={"center"} m={2}>
                        برای انتشار دیدگاه خود ابتدا وارد شوید یا ثبت نام کنید
                    </Typography>
                    <SignWithModal />
                </Box>
            )}

            {/* show comments */}
            <ShowComments comments={comments} />
        </Grid>
    );
};

export default Comments;
