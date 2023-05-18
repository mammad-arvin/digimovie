import React from "react";

// mui component
import { Box, Badge } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// styled
import styled from "styled-components";
import { Link } from "react-router-dom";

const FavMovie = styled.div`
    height: 57px;
    width: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 16px;
    background: ${(props) => (props.mode === "dark" ? "#131313" : "#CCCCCC")};
    .innerCicle {
        height: 38px;
        width: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: ${(props) =>
            props.mode === "dark" ? "#252525" : "#FFF"};
        .favIcon {
            height: 20px;
            width: 20px;
            color: #eb8307;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    position: relative;
`;

const FavMovieBtn = () => {
    const {
        palette: { mode },
    } = useTheme();
    return (
        <Link to="/favorite">
            <FavMovie mode={mode}>
                <Box className="innerCicle">
                    <Box className="favIcon">
                        <Badge
                            badgeContent={9}
                            color="favMovie"
                            showZero
                            sx={{
                                position: "absolute",
                                top: "8px",
                                right: "5px",
                            }}
                        />
                        <FavoriteBorderIcon />
                    </Box>
                </Box>
            </FavMovie>
        </Link>
    );
};

export default FavMovieBtn;
