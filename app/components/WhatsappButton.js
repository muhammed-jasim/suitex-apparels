// components/WhatsAppButton.js
import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, Fade, keyframes } from "@mui/material";

const WhatsAppButton = () => {
  const phoneNumber = "9037879855";
  const message = "Hello! I'm interested in your services.";

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Slide up + fade in for popup
  const slideFadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  // Breathing animation for button
  const breathing = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  `;

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Fade in={showPopup}>
        <Box
          sx={{
            position: "fixed",
            bottom: 90,
            right: 30,
            backgroundColor: "#fff",
            color: "#333",
            borderRadius: 2,
            px: 2,
            py: 1,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            fontSize: 14,
            animation: `${slideFadeIn} 0.5s ease`,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Chat with us on WhatsApp!
          </Typography>
        </Box>
      </Fade>

      <Box
        onClick={handleClick}
        title="Chat with us on WhatsApp"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          p: 1.5,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: `${breathing} 2.5s ease-in-out infinite`,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: 30 }} />
      </Box>
    </>
  );
};

export default WhatsAppButton;
