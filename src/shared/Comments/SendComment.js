import React, { useEffect, useState } from "react";

// MUI
import { Stack, FormControlLabel, Checkbox, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

// mui alert
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// icons
import SendIcon from "@mui/icons-material/Send";

// mutation
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT_IN_NEWS } from "../../graphql/mutations";
import { useParams } from "react-router-dom";

// for alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SendComment = () => {
    const {
        palette: { text, mode },
    } = useTheme();

    // state for spoil and text
    const [comentText, setComentText] = useState("");
    const [spoil, setSpoil] = useState(false);

    // mutation
    const { LocalSlug } = useParams();
    const userId = localStorage.getItem("userId");

    const [sendComment, { loading, data, error }] = useMutation(
        CREATE_COMMENT_IN_NEWS,
        {
            variables: {
                comentText,
                spoil,
                userId,
                slug: LocalSlug,
            },
        }
    );

    // alert
    const [alert_succ, setAlert_succ] = useState(false);
    const [alert_error, setAlert_error] = useState(false);

    useEffect(() => {
        data && setAlert_succ(true);
    }, [loading]);

    useEffect(() => {
        error && setAlert_error(true);
    }, [error]);

    return (
        <Stack>
            <textarea
                value={comentText}
                onChange={({ target: { value } }) => setComentText(value)}
                rows={6}
                placeholder="متن دیدگاه خود را وارد کنید"
                style={{
                    width: "100%",
                    fontSize: "13.6px",
                    fontFamily: "iranYekan",
                    marginTop: "30px",
                    padding: "10px",
                    border: "none",
                    borderRadius: "6px",
                    outline: "none",
                    background: mode === "dark" ? "#272727" : "#CCCCCC",
                    color: text.primary,
                }}
            ></textarea>
            <FormControlLabel
                fontSize="12px"
                control={
                    <Checkbox
                        color="warning"
                        value={spoil}
                        onChange={() => setSpoil(!spoil)}
                    />
                }
                label="این دیدگاه حاوی اسپویل است"
            />
            <Box height={"45px"} position={"relative"}>
                {comentText && !loading ? (
                    <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        sx={{
                            width: "137px",
                            height: "41px",
                            position: "absolute",
                            left: "0",
                            color: "#FFF",
                            textAlign: "center",
                            borderRadius: "35px",
                        }}
                        onClick={() => sendComment()}
                    >
                        ارسال دیدگاه
                        <SendIcon
                            sx={{
                                fontSize: "18px",
                                color: "#000",
                                transform: "rotateZ(180deg)",
                                marginRight: "8px",
                            }}
                        />
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        sx={{
                            width: "137px",
                            height: "41px",
                            position: "absolute",
                            left: "0",
                            color: "#FFF",
                            textAlign: "center",
                            borderRadius: "35px",
                        }}
                        disabled
                    >
                        {loading ? "درحال ارسال..." : "ارسال دیدگاه"}
                        <SendIcon
                            sx={{
                                fontSize: "18px",
                                color: "#000",
                                transform: "rotateZ(180deg)",
                                marginRight: "8px",
                            }}
                        />
                    </Button>
                )}
            </Box>

            {/* show alert */}
            <Snackbar
                open={alert_succ}
                autoHideDuration={2000}
                onClose={() => setAlert_succ(false)}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    دیدگاه شما ارسال و منتظر تایید است
                </Alert>
            </Snackbar>

            <Snackbar
                open={alert_error}
                autoHideDuration={2000}
                onClose={() => setAlert_error(false)}
            >
                <Alert severity="error">
                    مشکلی رخ داده است دوباره تلاش کنید.
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default SendComment;
