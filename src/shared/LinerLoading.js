import React from "react";

// Mui
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const LinerLoading = () => {
    return (
        <Box
            sx={{
                width: "100%",
                position: "fixed",
                top: "0",
                right: "0",
                zIndex: "15",
            }}
        >
            <LinearProgress color="warning" />
        </Box>
    );
};

export default LinerLoading;
