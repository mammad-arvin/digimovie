import React from "react";

// component
import HederOfDetils from "./HederOfDetils";
import InfoOfDetails from "./InfoOfDetails";

// MUI
import { Grid, Typography } from "@mui/material";

const Details = ({ data }) => {
    const { littleDescription } = data;

    return (
        <>
            {/* header details component */}
            <HederOfDetils data={data} />

            {/* details */}
            <Grid container>
                <InfoOfDetails data={data} />
            </Grid>

            {/* little description */}
            <Grid container>
                <Grid item xs={12} p={"0 10px"}>
                    <Typography variant="p" fontSize="12.8px" lineHeight="22px">
                        {littleDescription}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Details;
