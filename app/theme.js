// theme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#2E7D32" },
            secondary: { main: "#9e9e9e" },
            background: {
              default: "#f9f9f9",
              paper: "#ffffff",
            },
            text: {
              primary: "#1a1a1a",
              secondary: "#333333",
            },
          }
        : {
            primary: { main: "#81c784" },
            secondary: { main: "#e0e0e0" },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "#cccccc",
            },
          }),
    },
    typography: {
      fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
};

export default getTheme;
