import React from "react";

// time ago pakage
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fa from "timeago.js/lib/lang/fa";

const ShowTimeAgo = ({ date }) => {
    timeago.register("fa", fa);

    return (
        <>
            <TimeAgo datetime={date} locale="fa" className="timeAgo" />
        </>
    );
};

export default ShowTimeAgo;
