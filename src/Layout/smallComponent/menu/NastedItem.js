import React from "react";

import { Link } from "react-router-dom";

//  mui
import { Grid } from "@mui/material";
import Image from "mui-image";
import { useTheme } from "@emotion/react";

// styles
const ulStyle = {
    height: "100%",
    display: "flex",
    listStyleType: "none",
    flexDirection: "column",
    gap: "10px",
};

const NastedItem = ({ items, itemImage }) => {
    const {palette:{mode}}=useTheme();
    return (
        <>
            <Grid
                container
                sx={{
                    width: "685px",
                    minHeight: "252px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    position: "absolute",
                    top: "43px",
                    left: "-450px",
                    borderRadius: "8px",
                    background: `${mode === "dark" ? "rgba(29, 29, 29, .86)" : "#FFF"}`,
                    zIndex:2,
                    "::before": {
                        content: '""',
                        display: "inline-block",
                        width:"15px",
                        height:"15px",
                        position: "absolute",
                        top:"-5px",
                        right:"180px",
                        transform:"rotateZ(-45deg)",
                        background: `${mode === "dark" ? "rgba(29, 29, 29, .86)" : "#FFF"}`,
                    },
                }}
            >
                <Grid item>
                    <Grid container>
                        <Grid item ml={10}>
                            <ul style={ulStyle}>
                                {items[0].map((item) => (
                                    <Link
                                        to={item.slug}
                                        key={item.slug}
                                        className="liItems"
                                    >
                                        <li>{item.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item>
                            <ul style={ulStyle}>
                                {items[1].map((item) => (
                                    <Link
                                        to={item.slug}
                                        key={item.slug}
                                        className="liItems"
                                    >
                                        <li>{item.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Image
                        src={itemImage}
                        width="186px"
                        height="212px"
                        duration={500}
                        fit="cover"
                        sx={{
                            marginLeft: "20px",
                            position: "relative",
                            bottom: "-20px",
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default NastedItem;
