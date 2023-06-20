import React from "react";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";

// icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const style = {
    width: { xs: "350px", sm: "420px" },
    p: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    boxShadow: 24,
};

const SignWithModal = () => {
    const {
        palette: { mode },
    } = useTheme();

    const [openIn, setOpenIn] = React.useState(false);
    const [openUp, setOpenUp] = React.useState(false);

    return (
        <div style={{ textAlign: "center" }}>
            <Button onClick={() => setOpenUp(true)}>
                <PersonAddAltIcon />
                ثبت نام
            </Button>
            <Button onClick={() => setOpenIn(true)}>
                <ExitToAppIcon />
                وارد شوید
            </Button>

            {/* In modal */}
            <Modal
                open={openIn}
                onClose={() => setOpenIn(false)}
                aria-labelledby="sign_in_modal"
                aria-describedby="sign_in_modal"
            >
                <Box
                    bgcolor={mode === "dark" ? "#1D1D1D" : "#cccccc"}
                    sx={style}
                >
                    <SignIn modal={true} />
                </Box>
            </Modal>

            {/* up Modal */}
            <Modal
                open={openUp}
                onClose={() => setOpenUp(false)}
                aria-labelledby="sign_up_modal"
                aria-describedby="sign_up_modal"
            >
                <Box
                    bgcolor={mode === "dark" ? "#1D1D1D" : "#cccccc"}
                    sx={style}
                >
                    <SignUp modal={true} />
                </Box>
            </Modal>
        </div>
    );
};

export default SignWithModal;
