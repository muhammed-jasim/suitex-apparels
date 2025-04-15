"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  width: "100%",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 20px rgba(0, 0, 0, 0.3)"
      : "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.background.paper,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2e7d32",
  color: "white",
  padding: theme.spacing(1.5),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#1b5e20",
  },
}));

export default function ContactPage() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        scrollMarginTop: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s ease",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              color: "#2e7d32",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Get in touch with us for all your tailoring needs. We're here to
            help bring your vision to life.
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
        >
          {/* Google Map */}
          <Box
            flex={{ xs: "1 1 100%", md: "0 0 50%" }}
            sx={{
              height: { xs: 300, md: 450 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 4px 20px rgba(0,0,0,0.4)"
                  : "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.057764536959!2d76.3676074!3d10.094353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0809e168dc06ff%3A0xbbbdf84ee71e86e7!2sSuitex%20Apparels!5e0!3m2!1sen!2sin!4v1744739180137!5m2!1sen!2sin"
            />
          </Box>

          {/* Contact Info */}
          <Box
            flex={{ xs: "1 1 100%", md: "0 0 50%" }}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationOnIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Address"
                    secondary="123 Main Street, City Name, State, Country - 12345"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={
                      <>
                        info@suitexapparels.com
                        <br />
                        support@suitexapparels.com
                      </>
                    }
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: "#2e7d32" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary={
                      <>
                        +1 (234) 567-8900
                        <br />
                        +1 (234) 567-8901
                      </>
                    }
                  />
                </ListItem>
              </List>
            </StyledPaper>

            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Business Hours
              </Typography>
              <Grid container spacing={1}>
                {[
                  ["Monday - Friday:", "9:00 AM - 6:00 PM"],
                  ["Saturday:", "10:00 AM - 4:00 PM"],
                  ["Sunday:", "Closed"],
                ].map(([label, time], index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="body2">{label}</Typography>
                  </Grid>
                ))}
                <Grid item xs={6}>
                  <Typography variant="body2">{""}</Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
