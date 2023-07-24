import React from "react";

// component
import HederOfDetils from "./HederOfDetils";
import InfoOfDetails from "./InfoOfDetails";

// MUI
import { Grid } from "@mui/material";

const Details = ({ data }) => {
    return (
        <>
            {/* header details component */}
            <HederOfDetils data={data} />

            {/* details */}
            <Grid container>
                <InfoOfDetails data={data} />
            </Grid>
        </>
    );
};

export default Details;
