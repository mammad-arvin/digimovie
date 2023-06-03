import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { faIR } from "@mui/material/locale";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

export default function ThemeChanger({ children }) {
    const [mode, setMode] = React.useState("dark");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme(
                {
                    typography: {
                        fontFamily: `"iranYekan","lato" ,"roboto"`,
                    },
                    palette: {
                        mode,
                        favMovie: {
                            main: "#EB8307",
                            light: "#EB8307",
                            dark: "#EB8307",
                            contrastText: "#fff",
                        },
                        profileViews: {
                            main: "#cccccc",
                            light: "#fff",
                            dark: "#cccccc",
                            contrastText: "#fff",
                        },
                        menu: {
                            main: "#FBFEFE",
                            light: "#FBFEFE",
                            dark: "#272727",
                            contrastText: "#000",
                        },
                        text: {
                            main: "#8e8e8e",
                        },
                        textColor: {
                            main: "#000",
                            light: "#FFF",
                            dark: "#000",
                            contrastText: "#fff",
                        },
                    },
                },
                faIR
            ),
        [mode]
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}
