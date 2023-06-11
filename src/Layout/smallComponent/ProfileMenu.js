import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

// styles

const itemStyles = {
    width: "210px",
    fontSize: "13.6px",
    padding: "0px 18px",
    margin: "0px",
    "&:hover": {
        background: "none",
    },
};

export default function ProfileMenuItem() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // exit Handler
    const exitHnadler = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("likedContent");
        window.location.reload();
    };

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                disableElevation
                disableRipple
                sx={{
                    position: "absolute",
                    inset: "-7px",
                    "&:hover": { background: "none" },
                }}
            ></Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                sx={{
                    position: "absolute",
                    top: "30px",
                    left: { xs: "0px", md: "-60px" },
                }}
            >
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    داشبورد
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    خرید اشتراک
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    تیکت ها
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    درخواست فیلم / سریال
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    لیست ها
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    لیست علاقه مندی
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem sx={itemStyles} disableRipple onClick={handleClose}>
                    ویرایش پروفایل
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem
                    sx={itemStyles}
                    disableRipple
                    onClick={() => exitHnadler()}
                >
                    خروج
                </MenuItem>
            </Menu>
        </>
    );
}
