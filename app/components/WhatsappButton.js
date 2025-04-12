// components/WhatsAppButton.js
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

const WhatsAppButton = () => {
  const phoneNumber = "7510140803";
  const message = "Hello! I'm interested in your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
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
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <WhatsAppIcon sx={{ color: "#fff", fontSize: 30 }} />
    </Box>
  );
};

export default WhatsAppButton;
