import React from "react";

// MUI
import { Box } from "@mui/material";

// component
import EveryComment from "./EveryComment";

const ShowComments = ({ comments }) => {
    return (
        <Box display={"flex"} flexDirection={"column-reverse"}>
            {comments.map((item) => {
                return <EveryComment key={item.id} item={item} />;
            })}
        </Box>
    );
};

export default ShowComments;
