import React, { useState } from "react";

// MUI
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// router dom
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const {
        palette: { text },
    } = useTheme();

    // count down
    const [countDown, setCountDown] = useState(7);
    setInterval(() => setCountDown(countDown - 1), 1070);

    // navigate
    const navigate = useNavigate();
    const redirectTimeOut = setTimeout(() => navigate("/"), 7000);

    return (
        <Box
            height="60vh"
            color={text.primary}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            zIndex={1}
        >
            <Typography variant="h5">
                مسیر اشتباه یا توسعه داده نشده است .
            </Typography>
            <Typography variant="h5"> درحال هدایت به صفحه خانه</Typography>
            <Typography variant="h5"> {countDown}</Typography>
        </Box>
    );
};

export default NotFound;
