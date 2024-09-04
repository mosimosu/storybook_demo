import { createTheme, alpha } from "@mui/material/styles";
import { Palette } from "../enums/Theme/paletteEnum";
import { zhTW } from "@mui/material/locale";

const theme = createTheme(
    {
        palette: {
            common: {
                white: Palette.White,
                black: Palette.Black,
            },
            primary: {
                main: Palette.Blue600,
                light: Palette.Blue500,
                dark: Palette.Blue700,
                contrastText: Palette.White,
            },
            secondary: {
                main: Palette.Grey200,
                light: Palette.Grey100,
                dark: Palette.Grey500,
                contrastText: Palette.Black,
            },
            warning: {
                main: Palette.Yellow500,
                light: Palette.Yellow400,
                dark: Palette.Yellow600,
                contrastText: Palette.Black,
            },
            error: {
                main: Palette.Red600,
                light: Palette.Red500,
                dark: Palette.Red600,
                contrastText: Palette.White,
            },
            success: {
                main: Palette.Green500,
                light: Palette.Green400,
                dark: Palette.Green600,
                contrastText: Palette.White,
            },
            grey: {
                50: Palette.Grey50,
                100: Palette.Grey100,
                200: Palette.Grey200,
                300: Palette.Grey300,
                400: Palette.Grey400,
                500: Palette.Grey500,
                600: Palette.Grey600,
                700: Palette.Grey700,
                800: Palette.Grey800,
                900: Palette.Grey900,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: "6px",
                    },
                    containedPrimary: {
                        "&.Mui-disabled": {
                            color: Palette.White,
                        },
                    },
                    containedSecondary: {
                        "&.Mui-disabled": {
                            color: Palette.White,
                        },
                    },
                    outlinedPrimary: {
                        borderColor: Palette.Blue600,
                        boxShadow:
                            "0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.10)",
                        "&:hover": {
                            borderColor: Palette.Blue500,
                            boxShadow: "none",
                        },
                        "&.Mui-disabled": {
                            color: Palette.Grey500,
                        },
                    },
                    outlinedSecondary: {
                        color: Palette.Black,
                        borderColor: Palette.Grey600,
                        boxShadow:
                            "0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.10)",
                        "&:hover": {
                            borderColor: Palette.Grey600,
                            backgroundColor: alpha("#000000", 0.05),
                            boxShadow: "none",
                        },
                        "&.Mui-disabled": {
                            borderColor: alpha("#111111", 0.15),
                            color: Palette.Grey500,
                        },
                    },
                    textPrimary: {
                        "&:hover": {
                            borderColor: Palette.Blue500,
                        },
                        "&.Mui-disabled": {
                            color: Palette.Grey500,
                        },
                    },
                    textSecondary: {
                        color: Palette.Black,
                        "&:hover": {
                            borderColor: Palette.Grey600,
                            backgroundColor: alpha("#000000", 0.05),
                        },
                        "&.Mui-disabled": {
                            borderColor: alpha("#111111", 0.15),
                            color: Palette.Grey500,
                        },
                    },
                },
            },
            MuiPagination: {
                styleOverrides: {
                    root: {
                        "& .MuiPaginationItem-root": {
                            backgroundColor: "transparent",
                            borderColor: Palette.Grey300,
                            "&.Mui-selected": {
                                borderColor: Palette.Blue600,
                                backgroundColor: "transparent",
                            },
                        },
                    },
                },
            },
        },
    },
    zhTW
);

export default theme;

export const theme2 = createTheme({
    palette: {
        base: {
            white: "#ffffff",
            black: "#000000",
            divider: alpha("#111111", 0.15),
        },
        gray: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
        },
        blue: {
            50: "#e8f8ff",
            100: "#bee3f8",
            200: "#90cdf4",
            300: "#63b3ed",
            400: "#4299e1",
            500: "#3182ce",
            600: "#2b6cb0",
            700: "#2c5282",
            800: "#2a4365",
            900: "#1a365d",
        },
        green: {
            50: "#f0fff4",
            100: "#c6f6d5",
            200: "#9ae6b4",
            300: "#68d391",
            400: "#48bb78",
            500: "#38a169",
            600: "#25855a",
            700: "#276749",
            800: "#22543d",
            900: "#1c4532",
        },
        yellow: {
            50: "#fefce8",
            100: "#fdedd3",
            200: "#fbdba7",
            300: "#f9c97c",
            400: "#f7b750",
            500: "#f5a524",
            600: "#c4841d",
            700: "#936316",
            800: "#62420e",
            900: "#312107",
        },
        red: {
            50: "#ffff5f",
            100: "#fed7d7",
            200: "#feb2b2",
            300: "#fc8181",
            400: "#f56565",
            500: "#e53e3e",
            600: "#c53030",
            700: "#9b2c2c",
            800: "#822727",
            900: "#63171b",
        },
        purple: {
            50: "#faf5ff",
            100: "#e9d8fd",
            200: "#d6bcfa",
            300: "#b794f4",
            400: "#9f7aea",
            500: "#805ad5",
            600: "#6b46c1",
            700: "#553c9a",
            800: "#44337a",
            900: "#322659",
        },
    },
    typography: {
        fontFamily: "Noto Sans TC",
        textTiny: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
        },
        textSmall: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
        },
        textMedium: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
        },
        textLarge: {
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
        },
        textXLarge: {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
        },
    },
});
