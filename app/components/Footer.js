"use client";
import React from "react";
import { Box, Container, Grid, Typography, Link, Button } from "@mui/material";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        py: 6,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 -2px 6px rgba(59, 59, 59, 0.1)"
            : "0 -2px 6px rgba(0, 0, 0, 0.08)",
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              width="100%"
              flexDirection="column"
              alignItems={{ xs: "start", md: "flex-start" }}
            >
              {/* <img
                src="/images/suitex-logo.png" // Replace with your logo path
                alt="Suitex Apparels Logo"
                style={{ marginBottom: 8 }}
              /> */}
              <Typography
                variant="h6"
                sx={{
                  color: "#2A5A14",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                SUITEX APPARELS
              </Typography>
              <Typography
                variant="body2"
                textAlign={{ xs: "start", md: "left" }}
                sx={{ mt: 1, maxWidth: 300 }}
              >
                Premium tailoring services for the modern gentleman
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {["Home", , "About", "Collections", "Contact"].map((text) => (
                <Box
                  key={text}
                  onClick={() => handleScroll(text)}
                  underline="none"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "#2A5A14",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    },
                  }}
                >
                  {text}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ cursor: "pointer" }}
              onClick={() => handleScroll("contact")}
            >
              Contact Us
            </Typography>
            <Typography variant="body2">Edayapuram Aluva</Typography>
            <Typography variant="body2">Eranakulam kerala 683101</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              +91 9037879855
            </Typography>
            <Typography variant="body2">
              suitexapparelsofficial@gmail.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Suitex Apparels. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
