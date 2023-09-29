import * as React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#F5F5F5",
    },
    text: {
      primary: "#132347",
      secondary: "#31B889",
    },
  },
  typography: {
    allVariants: {
      color: "#000000",
    },
    h1: {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: "55px",
    },
    h2: {
      fontSize: 35,
      lineHeight: "42.5px",
    },
    h3: {
      fontSize: 25,
      lineHeight: "33.5px",
    },
    h4: {
      fontSize: 22,
      lineHeight: "28px",
    },
    h5: {
      fontSize: 20,
      lineHeight: "21.6px",
    },
    h6: {
      fontSize: 18,
      lineHeight: "23px",
    },
    body1: {
      fontSize: 15,
      lineHeight: "24px",
    },
    body2: {
      fontSize: 14,
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: 13,
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: 12,
      lineHeight: "18px",
    },
    caption: {
      fontSize: 10,
      lineHeight: "41px",
      fontWeight: 400,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 64,
          padding: "15px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "33px !important",
          justifyContent: "space-between",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "capitalize",
        },
        containedPrimary: {
          backgroundColor: "#102348",
          color: "#ffffff",
          fontSize: 13,
          fontWeight: 400,
          lineHeight: "15.28px",
          "&:hover": {
            backgroundColor: "#102348",
          },
        },
        containedSecondary: {
          backgroundColor: "#31B889",
          color: "#132347",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: "21.6px",
          "&:hover": {
            backgroundColor: "#31B889",
          },
        },
        text: {
          color: "#000000",
          fontSize: 11,
          fontWeight: 400,
          lineHeight: "25px",
        },
      },
    },
  },
});

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
