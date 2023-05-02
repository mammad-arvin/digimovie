import React, { useState } from "react";

//  mui
import {
    Divider,
    Avatar,
    ListItemAvatar,
    ListItem,
    List,
    Paper,
    Typography,
    Autocomplete,
    Box,
} from "@mui/material";

// queries
import { GET_FILMS_DETAILS_FOR_SEARCH } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";

// icons
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// helper functions
import { joinGenre } from "../../../helpers/helperFunctions";

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
const Search = () => {
    const { loading, data, error } = useQuery(GET_FILMS_DETAILS_FOR_SEARCH);
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loadingState = open && options.length === 0;

    const [value, setValue] = useState("");
    console.log(value);

    const changeHndler = ({ target: { value } }) => {
        setValue(value);
    };

    React.useEffect(() => {
        let active = true;

        if (!loadingState) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...data.movies]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loadingState]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            <Autocomplete
                id="asynchronous-demo"
                sx={{ width: { xs: "90%", sm: "99%", md: "330px" } }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                }
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loadingState}
                renderInput={(params) => (
                    <Box
                        style={{
                            position: "relative",
                        }}
                    >
                        <input
                            type="text"
                            {...params.inputProps}
                            value={value}
                            onChange={changeHndler}
                            style={{
                                width: "100%",
                                height: "42px",
                                font: "13.6px iranYekan",
                                color: "#FFF",
                                padding: "10px",
                                borderRadius: "30px",
                                border: "none",
                                outline: "none",
                                background: "black",
                                letterSpacing: "1px",
                            }}
                            placeholder="جستجو کنید..."
                        />
                        <SearchIcon
                            sx={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                color: "#D17507",
                            }}
                        />
                        {!loading && open && (
                            <Paper
                                square
                                sx={{
                                    direction: "ltr",
                                    width: "330px",
                                    pb: "1px",
                                    position: "absolute",
                                    top: "43px",
                                    left: 0,
                                    borderRadius: "8px",
                                    maxHeight: "425px",
                                    overflow: "hidden",
                                }}
                            >
                                {loadingState && (
                                    <Typography
                                        variant="p"
                                        component="div"
                                        sx={{
                                            m: 1.5,
                                            width: "330px",
                                            direction: "rtl",
                                            textAlign: "center",
                                        }}
                                    >
                                        درحال جستجو ...
                                    </Typography>
                                )}
                                {!loadingState && (
                                    <List sx={{ mb: 1, padding: "0" }}>
                                        {data &&
                                            data.movies.map(
                                                ({
                                                    id,
                                                    title,
                                                    images,
                                                    manyRerence,
                                                    rate: { rate },
                                                }) =>
                                                    title
                                                        .toLowerCase()
                                                        .includes(
                                                            value.toLocaleLowerCase()
                                                        ) && (
                                                        <React.Fragment
                                                            key={id}
                                                        >
                                                            <ListItem
                                                                sx={{
                                                                    height: "93.18px",
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: "40px",
                                                                        height: "39px",
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        justifyContent:
                                                                            "center",
                                                                        alignItems:
                                                                            "center",
                                                                        mr: 2,
                                                                    }}
                                                                >
                                                                    <StarBorderIcon
                                                                        fontSize="medium"
                                                                        color="warning"
                                                                    />
                                                                    <Typography
                                                                        variant="p"
                                                                        sx={{
                                                                            fontSize:
                                                                                "16px",
                                                                            mt: "7px",
                                                                        }}
                                                                    >
                                                                        {rate}
                                                                    </Typography>
                                                                </Box>
                                                                <ListItemAvatar>
                                                                    <Avatar
                                                                        variant="rounded"
                                                                        alt="Cover Picture"
                                                                        src={
                                                                            images[1]
                                                                                .url
                                                                        }
                                                                        sx={{
                                                                            width: "58.19px",
                                                                            height: "58.19px",
                                                                            mr: "12px",
                                                                        }}
                                                                    />
                                                                </ListItemAvatar>
                                                                <Box width="170px">
                                                                    <Typography
                                                                        variant="p"
                                                                        sx={{
                                                                            font: "16px lato",
                                                                            width: "100%",
                                                                            whiteSpace:
                                                                                "nowrap",
                                                                        }}
                                                                    >
                                                                        {title}
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        sx={{
                                                                            fontSize:
                                                                                "12px",
                                                                            whiteSpace:
                                                                                "nowrap",
                                                                            color: "#616161",
                                                                        }}
                                                                    >
                                                                        {joinGenre(
                                                                            manyRerence
                                                                        )}
                                                                    </Typography>
                                                                </Box>
                                                            </ListItem>
                                                            <Divider />
                                                        </React.Fragment>
                                                    )
                                            )}
                                        {!loadingState && (
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    display: "flex",
                                                    fontSize: "13.6px",
                                                    justifyContent: "center",
                                                    mt: 1,
                                                }}
                                            >
                                                مشاهده همه نتایج
                                            </Typography>
                                        )}
                                    </List>
                                )}
                            </Paper>
                        )}
                    </Box>
                )}
            ></Autocomplete>
        </>
    );
};

export default Search;
