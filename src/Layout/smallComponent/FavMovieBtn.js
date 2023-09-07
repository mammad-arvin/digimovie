import React from "react";

// mui component
import { Box, Badge } from "@mui/material";
import { useTheme } from "@emotion/react";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// styled
import styled from "styled-components";
import { Link } from "react-router-dom";

const innerWidth = window.innerWidth;

const FavMovie = styled.div`
    height: ${innerWidth < 460 ? "47px" : "57px"};
    width: ${innerWidth < 460 ? "47px" : "57px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 16px;
    background: ${(props) => (props.mode === "dark" ? "#131313" : "#CCCCCC")};
    .innerCicle {
        height: ${innerWidth < 460 ? "32px" : "38px"};
        width: ${innerWidth < 460 ? "32px" : "38px"};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: ${(props) =>
            props.mode === "dark" ? "#252525" : "#FFF"};
        .favIcon {
            height: ${innerWidth < 460 ? "10px" : "20px"};
            width: ${innerWidth < 460 ? "10px" : "20px"};
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

    // get from local
    const favedMovie = JSON.parse(localStorage.getItem("favoriteMovies"));
    const userId = localStorage.getItem("userId");

    return (
        userId && (
            <Link to="/favorite">
                <FavMovie mode={mode}>
                    <Box className="innerCicle">
                        <Box className="favIcon">
                            <Badge
                                badgeContent={favedMovie.length}
                                color="favMovie"
                                showZero
                                sx={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "5px",
                                }}
                            />
                            <FavoriteBorderIcon
                                sx={{ fontSize: { xs: "large", sm: "25px" } }}
                            />
                        </Box>
                    </Box>
                </FavMovie>
            </Link>
        )
    );
};

export default FavMovieBtn;
