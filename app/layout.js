"use client";

import { useMemo, useState, createContext } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "./theme";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppButton from "./components/WhatsappButton";

// Create Color Mode Context
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

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon1.ico" />
        <meta
          name="description"
          content="Suitex Apparels - Premium tailoring and apparel services."
        />
        <title>Suitex Apparels</title>
      </head>
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <WhatsAppButton />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
