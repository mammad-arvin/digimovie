import React, { useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

const style = {
    p: "10px",
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

const ShowTrailer = ({ link, suggest }) => {
    const {
        palette: { mode },
    } = useTheme();

    const [open, setOpen] = useState(false);

    return (
        <div
            style={{ textAlign: "center", position: "absolute", width: "100%" }}
        >
            <Button
                disableRipple
                onClick={() => setOpen(true)}
                sx={{
                    background: "none",
                    height: !suggest ? "45px" : "60px",
                    width: !suggest ? "40px" : "100%",
                    zIndex: "3",
                    ":hover": { background: "none" },
                }}
            ></Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="trailer-modal"
                aria-describedby="trailer-modal"
            >
                <Box
                    bgcolor={mode === "dark" ? "#1D1D1D" : "#cccccc"}
                    sx={{ ...style, width: { xs: "90%", md: "70%" } }}
                >
                    <video
                        src={link}
                        controls
                        width={"100%"}
                        style={{ borderRadius: "15px" }}
                    >
                        اسکریپت مرورگر را فعال کنید
                    </video>
                </Box>
            </Modal>
        </div>
    );
};

export default ShowTrailer;
