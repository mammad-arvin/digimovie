import React from "react";

// component
import HederOfDetils from "./HederOfDetils";
import InfoOfDetails from "./InfoOfDetails";
import MovieRate from "./MovieRate";

// MUI
import { Grid, Typography } from "@mui/material";

const Details = ({ data }) => {
    const { littleDescription, rate, slug } = data;

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

            {/* our users rate */}
            <Grid container>
                <MovieRate rateData={rate} slug={slug} />
            </Grid>
        </>
    );
};

export default Details;
