"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A5A14 0%, #4CAF50 100%)",
        textAlign: "center",
        p: { xs: 3, sm: 4, md: 5 },
        color: "white",
        borderRadius: { md: 4 },
        mx: "auto",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(0.95)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{
          mb: 2,
          fontSize: { xs: "1.5rem", sm: "1.9rem", md: "2rem" },
        }}
      >
        Let’s Tailor Your Perfect Look
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mx: "auto",
          mb: 4,
          fontSize: { xs: "0.9rem", md: "1.125rem" },
          maxWidth: "700px",
        }}
      >
        Our expert tailors are ready to bring your style to life. Schedule an
        appointment and experience Suitex quality.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => handleScroll("Contact")}
        sx={{
          backgroundColor: "#fff",
          color: "#2A5A14",
          fontWeight: "bold",
          px: 5,
          py: 1.5,
          fontSize: "1rem",
          borderRadius: 10,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#f4f4f4",
            transform: "scale(1.05)",
            boxShadow: "0px 6px 18px rgba(0,0,0,0.3)",
          },
        }}
      >
        Book Now
      </Button>
    </Box>
  );
};

export default CallToAction;
