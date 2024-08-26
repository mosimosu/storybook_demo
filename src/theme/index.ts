import { createTheme } from "@mui/material/styles";
import { Palette } from "../enums/Theme/paletteEnum";
import { ButtonPropsVariantOverrides } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true;
  }
}

const theme = createTheme({
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
      main: Palette.Blue200,
      light: Palette.Blue300,
      dark: Palette.Blue400,
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
          minWidth: "fit-content",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: Palette.Grey300,
          },
          "&:active": {
            backgroundColor: Palette.Grey500,
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Grey400,
          },
        },
        sizeSmall: {
          // 小型按鈕的樣式
          padding: "0.25rem 0.5rem",
          fontSize: "0.8125rem",
        },
        sizeMedium: {
          // 中型按鈕的樣式
          padding: "0.5rem 1rem",
          fontSize: "1rem",
        },
        sizeLarge: {
          // 大型按鈕的樣式
          padding: "0.75rem 1.5rem",
          fontSize: "1.25rem",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: Palette.Blue500,
          },
          "&:active": {
            backgroundColor: Palette.Blue400,
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Grey300,
            color: Palette.White,
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: Palette.Blue300,
          },
          "&:active": {
            backgroundColor: Palette.Blue400,
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Grey300,
            color: Palette.White,
          },
        },
        containedError: {
          "&:hover": {
            backgroundColor: Palette.Red500,
          },
          "&:active": {
            backgroundColor: Palette.Red700,
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Grey300,
            color: Palette.White,
          },
        },
        containedWarning: {
          "&:hover": {
            backgroundColor: Palette.Yellow500,
          },
          "&:active": {
            backgroundColor: Palette.Yellow600,
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Grey300,
            color: Palette.White,
          },
        },
        outlinedPrimary: {
          "&:hover": {
            borderColor: Palette.Blue500,
          },
          "&:active": {
            borderColor: Palette.Blue700,
          },
          "&.Mui-disabled": {
            borderColor: Palette.Grey400,
          },
        },
        outlinedSecondary: {
          color: Palette.Black,
          borderColor: Palette.Grey300,
          "&:hover": {
            borderColor: Palette.Grey300,
          },
          "&:active": {
            borderColor: Palette.Grey300,
            backgroundColor: Palette.Grey200,
          },
          "&.Mui-disabled": {
            borderColor: Palette.Grey300,
          },
        },
      },
      variants: [
        {
          props: {
            variant: "icon",
          },
          style: {
            "&:disabled": {
              color: Palette.Grey300,
              backgroundColor: "transparent",
            },
            "&:hover": {
              backgroundColor: Palette.Grey200,
            },
            "&:active": {
              backgroundColor: "transparent",
            },
            "&.Mui-focusVisible": {
              border: "1px solid",
              borderColor: Palette.Blue600,
              borderRadius: "0",
            },
          },
        },
        {
          props: {
            variant: "icon",
            color: "success",
          },
          style: {
            color: Palette.Green500,
            "&:active": {
              color: Palette.Green700,
            },
          },
        },
        {
          props: {
            variant: "icon",
            color: "primary",
          },
          style: {
            color: Palette.Blue600,
            "&:active": {
              color: Palette.Blue700,
            },
          },
        },
      ],
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
});

export default theme;
