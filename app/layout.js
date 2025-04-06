"use client";

import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createContext } from "react";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Context for theme toggling
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#2E7D32",
          },
          secondary: {
            main: "#9e9e9e",
          },
        },
        typography: {
          fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
        },
      }),
    [mode]
  );

  return (
    <html lang="en">
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
