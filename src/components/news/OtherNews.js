import React from "react";

// component
import Report from "./Report";

// MUI
import { Grid } from "@mui/material";

// query
import { useQuery } from "@apollo/client";
import { GET_NEWS_SLUGS } from "../../graphql/queries";

const OtherNews = () => {
    const { data } = useQuery(GET_NEWS_SLUGS);

    // create thriple random news
    const report = () => {
        const randomNews = Math.round(Math.random() * (data.newss.length - 1));
        return (
            <Grid
                item
                xs={12}
                sm={5.8}
                md={3.9}
                display={"flex"}
                justifyContent={"center"}
                zIndex={1}
            >
                <Report otherSlug={data.newss[randomNews].slug} />
            </Grid>
        );
    };

    return (
        <>
            {data && report()}
            {data && report()}
            {data && report()}
        </>
    );
};

export default OtherNews;
