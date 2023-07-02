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

const ShowTrailer = ({ link }) => {
    const {
        palette: { mode },
    } = useTheme();

    const [open, setOpen] = useState(false);

    return (
        <div style={{ textAlign: "center", position: "absolute" }}>
            <Button
                disableRipple
                onClick={() => setOpen(true)}
                sx={{
                    background: "none",
                    height: "45px",
                    width: "40px",
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
                    sx={style}
                >
                    <video src={link} controls style={{ borderRadius: "15px" }}>
                        اسکریپت مرورگر را فعال کنید
                    </video>
                </Box>
            </Modal>
        </div>
    );
};

export default ShowTrailer;
