"use client";

import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext } from "../layout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = ["Home", "About", "Collections"];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Image
          src="/images/suitex-logo.png"
          alt="Logo"
          width={isMobile ? 100 : 200}
          height={isMobile ? 50 : 60}
          style={{ objectFit: "contain" }}
        />

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => (
              <Button key={link} sx={{ color: "#2A5A14" }}>
                {link}
              </Button>
            ))}
            <Button
              variant="contained"
              color="success"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                backgroundColor: "#2A5A14",
              }}
            >
              Contact us
            </Button>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </Box>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Theme Toggle */}
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>

            {/* Drawer Toggle */}
            <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
              <MenuIcon />
            </IconButton>

            {/* Drawer */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ width: 250 }} role="presentation">
                {/* Close Icon */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Divider />

                <List onClick={toggleDrawer(false)}>
                  {navLinks.map((text) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      sx={{ textTransform: "none", backgroundColor: "#2A5A14" }}
                    >
                      Contact us
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
