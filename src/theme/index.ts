import { alpha } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    textXlarge: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
  },
});

export default theme;
