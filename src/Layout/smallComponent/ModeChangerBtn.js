import React from "react";

// mui
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CircleIcon from "@mui/icons-material/Circle";

//context
import { ColorModeContext } from "../../mui/ThemeChanger";

// style
import styled from "styled-components";

const CircleIconOfFavIconStyle = styled.div`
    width: 35px;
    height: 35px;
    left: ${(props) => (props.mode === "dark" ? "1px" : "46px")};
    transition: 0.3s ease-in;
    z-index: 10;
`;

const ModeChangerBtn = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Grid
            style={{
                height: "35px",
                width: "83px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "25px",
                padding: "5px",
                borderRadius: "50px",
                backgroundColor: "#252525",
                position: "relative",
                cursor: "pointer",
            }}
            onClick={() => {colorMode.toggleColorMode();}}
        >
            <WbSunnyIcon style={{ color: "#F9D949" }} />
            <CircleIconOfFavIconStyle
                mode={theme.palette.mode}
                style={{
                    position: "absolute",
                }}
            >
                <CircleIcon fontSize="large" />
            </CircleIconOfFavIconStyle>
            <NightlightIcon
                style={{
                    color: "#e8962c",
                    transform: "rotateZ(-25deg)",
                }}
            />
        </Grid>
    );
};

export default ModeChangerBtn;
