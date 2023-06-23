import React from "react";

// component
import EveryComment from "./EveryComment";

const ShowComments = ({ comments }) => {
    return (
        <>
            {comments.map((item) => {
                return <EveryComment key={item.id} item={item} />;
            })}
        </>
    );
};

export default ShowComments;
