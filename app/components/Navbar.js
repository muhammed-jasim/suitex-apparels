"use client";

import { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ColorModeContext } from "../layout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = ["Home", "About", "Collections"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.7)" // dark mode - translucent dark
              : scrolled
              ? "#ffffff"
              : "rgba(0, 0, 0, 0.7)", // light mode - translucent white

          // height: 70, // small height
          justifyContent: "center",
          // px: { xs: 1.5, md: 3 },
          // backdropFilter: "blur(6px)", // nice blur effect
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 1px 4px rgba(0, 0, 0, 0.4)"
              : "0 1px 4px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
          // zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Image
            src="/images/suitex-logo.png"
            alt="Logo"
            width={isMobile ? 100 : 200}
            height={isMobile ? 50 : 60}
            style={{ objectFit: "contain", cursor: "pointer" }}
            onClick={() => handleScroll("home")}
          />

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  sx={{ color: "default" }}
                  onClick={() => handleScroll(link)}
                >
                  {link}
                </Button>
              ))}
              <Button
                variant="contained"
                color="white"
                onClick={() => handleScroll("Contact")}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  backgroundColor: "#2A5A14",
                }}
              >
                Contact Us
              </Button>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon sx={{ color: "#fdd835" }} /> // Yellow-ish for dark mode
                ) : (
                  <LightModeIcon sx={{ color: "#2A5A14" }} /> // Your brand green for light mode
                )}
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
              <MenuIcon
                sx={{
                  color: theme.palette.mode === "dark" ? "#f5f5f5" : "#2A5A14",
                }}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Top Controls */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 1,
              borderBottom: "1px solid #ddd",
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                colorMode.toggleColorMode();
                setDrawerOpen(false);
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon sx={{ color: "#fdd835" }} /> // Yellow-ish for dark mode
              ) : (
                <LightModeIcon sx={{ color: "#2A5A14" }} /> // Your brand green for light mode
              )}
            </IconButton>
          </Box>

          {/* Nav Links */}
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List>
              {navLinks.map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    handleScroll(text);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <Divider sx={{ my: 1 }} />
              <ListItem>
                <Button
                  onClick={() => {
                    handleScroll("Contact");
                    setDrawerOpen(false);
                  }}
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#2A5A14",
                    color: "#fff",
                  }}
                >
                  Contact Us
                </Button>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
