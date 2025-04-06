"use client";

import { useContext } from "react";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import { ColorModeContext } from "../layout";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";

export default function HomePage() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <Navbar />
      <HeroSlider />
    </Box>
  );
}
