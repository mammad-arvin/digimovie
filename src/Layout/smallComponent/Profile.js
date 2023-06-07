import React from "react";

// mui
import { Stack, Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";

//components
import ProfileMenuItem from "./ProfileMenu";

// images and icons
import AvatarImg from "../../assets/image/layout-images/avatar.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// helper functions
import { miniName } from "../../helpers/helperFunctions";

// query 
import { useQuery } from "@apollo/client";
import { GET_USER_INFO_FOR_LOGED_IN_USER } from "../../graphql/queries";

const Profile = ({userId}) => {

    // get user info by user id
    const { data } =useQuery(GET_USER_INFO_FOR_LOGED_IN_USER ,{
        variables:{userId}
    })

    const {
        palette: { mode },
    } = useTheme();
    return (
        <>
            <Stack
                direction="row"
                sx={{
                    direction: "rtl",
                    height: "56px",
                    width: "144px",
                    borderRadius: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: `${
                        mode === "dark" ? "#242424" : "#CCCCCC"
                    }`,
                }}
            >
                <Avatar src={AvatarImg} />

                <Stack
                    sx={{
                        position: "relative",
                        color: `${mode === "dark" ? "#FFF" : "#000"}`,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="p"
                            fontWeight={400}
                            fontSize={13.6}
                        >
                            {data && miniName(data.registeredUser.userName)}
                        </Typography>
                        <KeyboardArrowDownIcon fontSize="small" />
                    </Box>
                    <Typography variant="p" fontWeight={300} fontSize={13.6}>
                        خوش آمدید
                    </Typography>
                    <ProfileMenuItem />
                </Stack>
            </Stack>
        </>
    );
};

export default Profile;
