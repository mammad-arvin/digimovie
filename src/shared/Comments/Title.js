import React from "react";

// MUI
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// Icons
import CommentIcon from "@mui/icons-material/Comment";

const Title = () => {
    const {
        palette: { mode },
    } = useTheme();

    return (
        <>
            {/* left top shape */}
            <Box
                width={"180px"}
                height={"180px"}
                borderRadius={"20px"}
                bgcolor={mode === "dark" ? "#141414" : "#F0F0F0"}
                sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-50px",
                    transform: "rotate(-45deg)",
                }}
            ></Box>

            {/* title */}
            <Box
                component="div"
                display={"flex"}
                justifyContent={"space-between"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap="8px"
                >
                    <CommentIcon fontSize="large" color="favMovie" />
                    <Typography variant="p">نظرات کاربـران</Typography>
                </Box>

                {/* comments */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    zIndex={1}
                >
                    <Typography
                        variant="p"
                        fontSize={"27.2px"}
                        color="favMovie.main"
                    >
                        7
                    </Typography>
                    <Typography variant="p" fontSize={"14.4px"}>
                        COMMENTS
                    </Typography>
                </Box>
            </Box>

            {/* description for commenting */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap="15px"
                mt="15px"
                sx={{
                    lineHeight: "23px",
                }}
            >
                <li style={{ zIndex: "1" }}>
                    قبل از مطرح کردن هرگونه سوال ، بخش سوالات متداول را مطالعه
                    نمایید.
                </li>
                <li style={{ zIndex: "1" }}>
                    در صورت وجود هرگونه مشکل از طریق بخش تیکت ها ، مشکل خود را
                    پیگیری نمایید.
                </li>
                <li>
                    کامنت خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات
                    رکیک یا توهین آمیز خودداری نمایید. در صورت مشاهده کامنت
                    تایید نمیشود.
                </li>
                <li>
                    در صورتی که نظر شما دارای اسپویل میباشد ، حتما تیک گزینه
                    کامنت حاوی اسپویل میباشد را بزنید.
                </li>
            </Box>
        </>
    );
};

export default Title;
