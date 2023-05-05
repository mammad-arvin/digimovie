import React from "react";

// mui component
import { Box, Badge } from "@mui/material";

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
    background: #131313;
    .innerCicle {
        height: 38px;
        width: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #252525;
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
    return (
        <Link to="/favorite">
            <FavMovie>
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
