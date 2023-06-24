//gallery
import Carousel from "nuka-carousel";

// mui
import { Box, Typography } from "@mui/material";
import Image from "mui-image";

// router-dom
import { Link } from "react-router-dom";

// graphQl
import { useQuery } from "@apollo/client";
import { GET_FOOTER_NEWS_GALLERY } from "../../../graphql/queries";

//  gallery buttons was modified to arrow
// icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// arow Style
const arowStyle = {
    fontSize: "27px",
    color: "#FFF",
    background: "rgba(0, 0, 0 ,.7)",
    borderRadius: "50%",
    p: "5px",
    position: "relative",
    top: "-3px",
    cursor: "pointer",
};

const NewsGallery = () => {
    const { loading, data, error } = useQuery(GET_FOOTER_NEWS_GALLERY);

    return (
        <Box
            display="flex"
            sx={{
                direction: "ltr",
                width: { xs: "90%", sm: "60%", md: "100%" },
                height: "210px",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                    <ArrowBackIosNewIcon
                        sx={arowStyle}
                        onClick={previousSlide}
                    />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <ArrowForwardIosIcon
                        sx={{ ...arowStyle, top: "0" }}
                        onClick={nextSlide}
                    />
                )}
                adaptiveHeight="true"
                autoplay="true"
                autoplayInterval="10000"
            >
                {!loading &&
                    data.newss.map(
                        (item, index) =>
                            index < 5 && (
                                <Link to={"news/" + item.slug} key={index}>
                                    <Image
                                        src={item.image.url}
                                        key={item.id}
                                        width="100%"
                                        height="210px"
                                        fit="cover"
                                        duration={200}
                                    />
                                    <Box
                                        sx={{
                                            direction: "rtl",
                                            color: "#fff",
                                            textAlign: "right",
                                            width: "100%",
                                            minHeight: "43px",
                                            position: "relative",
                                            top: "-40px",
                                            paddingRight: "10px",
                                            background:
                                                "linear-gradient(0deg,rgba(11,11,11,0.6) 50%, rgba(210,210,210,0.1) 100%)",
                                        }}
                                    >
                                        <Typography
                                            width="95%"
                                            fontSize="13.6px"
                                        >
                                            {!error
                                                ? item.title
                                                : "Network Error"}
                                            .
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                    )}
            </Carousel>
        </Box>
    );
};

export default NewsGallery;
