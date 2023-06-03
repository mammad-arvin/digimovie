import React, { useEffect, useState } from "react";

// pakage  for animate show views
import CountUp from "react-countup";

// mutation
import { useMutation } from "@apollo/client";
import { SEND_PAGE_VIEWS } from "../graphql/mutations";

const PageViews = ({ pageview, slug }) => {
    const [IncreaseViews, setIncreaseViews] = useState(pageview);

    // mutation
    const [sendData] = useMutation(SEND_PAGE_VIEWS, {
        variables: {
            IncreaseViews,
            slug,
        },
    });

    // increase views
    useEffect(() => {
        setIncreaseViews((prev) => prev + 1);
    }, []);

    // send increased views
    useEffect(() => {
        sendData();
    }, [IncreaseViews]);

    return <CountUp end={IncreaseViews} duration={3.75} />;
};

export default PageViews;
