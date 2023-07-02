import React from "react";

// mui
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

// icon
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const Path = ({ category, title, slug }) => {
    const {
        palette: { text },
    } = useTheme();

    return (
        <Grid container display={"flex"} justifyContent={"center"}>
            <Grid
                item
                xs={12}
                lg={10.8}
                height="60px"
                display="flex"
                alignItems="center"
                color={text.primary}
                gap="10px"
                zIndex={1}
                sx={{
                    fontSize: { xs: "10px", sm: "13.6px" },
                }}
            >
                <FmdGoodIcon
                    fontSize="small"
                    sx={{ color: "#EB8307", position: "relative", top: "-3px" }}
                />
                <Typography variant="p">
                    <Link to="/">دیجی موویز</Link>
                </Typography>
                <ArrowBackIosIcon fontSize="small" />
                <Typography variant="p">
                    <Link to={category.l}>{category.t}</Link>
                </Typography>
                <ArrowBackIosIcon fontSize="small" />
                <Typography variant="p">
                    <Link to={category.l + "/" + slug}>{title}</Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Path;
