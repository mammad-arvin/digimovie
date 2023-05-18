import * as React from "react";

import { Link } from "react-router-dom";

// mui
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// images
import Image from "mui-image";
import darkLogo from "../../../assets/image/layout-images/dark_logo.webp";
import lightLogo from "../../../assets/image/layout-images/light-logo.webp";


// icons
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

// menu items Lists
import { movieItem, seriesItem } from "./listOfItems";

export default function SideMenu() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const {
        palette: { mode },
    } = useTheme();

    const logo = mode !== "dark" ? darkLogo : lightLogo;
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box width="85vw" role="presentation">
            <Box display="flex" justifyContent="center" mt={2}>
                <Image src={logo} width="58%" height="80px" />
            </Box>
            <CancelIcon
                color="favMovie"
                onClick={toggleDrawer(anchor, false)}
                sx={{
                    position: "absolute",
                    top: "15px",
                    left: "10px",
                    fontSize: "35px",
                }}
            />

            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {[
                    { t: "خانه", l: "/" },
                    { t: "دانلود فیلم", l: "/movies" },
                    { t: "دانلود سریال", l: "/series" },
                    { t: "هنرمندان", l: "/artists" },
                    { t: "تماس با ما", l: "/contact" },
                ].map((text) => (
                    <>
                        {text.t === "دانلود فیلم" ? (
                            <ListItem
                                nested
                                sx={{
                                    my: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                disablePadding
                            >
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    onClick={() => setOpen(!open)}
                                >
                                    <Typography
                                        level="inherit"
                                        sx={{
                                            fontWeight: open
                                                ? "bold"
                                                : undefined,
                                            color: open ? "#EB8307" : "inherit",
                                        }}
                                    >
                                        {text.t}
                                    </Typography>
                                    <KeyboardDoubleArrowDownIcon color="favMovie" />
                                </ListItem>
                                {open && (
                                    <List>
                                        {movieItem.map((items) =>
                                            items.map((item) => (
                                                <>
                                                    <Link to={item.slug}>
                                                        <ListItem
                                                            onClick={toggleDrawer(
                                                                anchor,
                                                                false
                                                            )}
                                                        >
                                                            <ListItemButton>
                                                                {item.title}
                                                            </ListItemButton>
                                                        </ListItem>
                                                    </Link>
                                                    <Divider />
                                                </>
                                            ))
                                        )}
                                    </List>
                                )}
                            </ListItem>
                        ) : text.t === "دانلود سریال" ? (
                            <ListItem
                                nested
                                sx={{
                                    my: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                disablePadding
                            >
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    onClick={() => setOpen2(!open2)}
                                >
                                    <Typography
                                        level="inherit"
                                        sx={{
                                            fontWeight: open2
                                                ? "bold"
                                                : undefined,
                                            color: open2
                                                ? "#EB8307"
                                                : "inherit",
                                        }}
                                    >
                                        {text.t}
                                    </Typography>
                                    <KeyboardDoubleArrowDownIcon color="favMovie" />
                                </ListItem>
                                {open2 && (
                                    <List>
                                        {seriesItem.map((items) =>
                                            items.map((item) => (
                                                <>
                                                    <Link to={item.slug}>
                                                        <ListItem
                                                            onClick={toggleDrawer(
                                                                anchor,
                                                                false
                                                            )}
                                                        >
                                                            <ListItemButton>
                                                                {item.title}
                                                            </ListItemButton>
                                                        </ListItem>
                                                    </Link>
                                                    <Divider />
                                                </>
                                            ))
                                        )}
                                    </List>
                                )}
                            </ListItem>
                        ) : (
                            <Link to={text.l} className="sideMenuLinks">
                                <ListItem
                                    key={text.t}
                                    disablePadding
                                    onClick={toggleDrawer(anchor, false)}
                                >
                                    <ListItemButton sx={{ textAlign: "right" }}>
                                        <ListItemText primary={text.t} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        )}
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} color="text">
                        <MenuIcon fontSize="large" />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </>
    );
}
