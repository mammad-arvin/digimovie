import React from "react";

// MUI
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Title from "./Title";

const Comments = () => {
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
            p={"30px"}
            sx={{
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* title */}
            <Title />
        </Grid>
    );
};

export default Comments;
