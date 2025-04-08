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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  width: "100%",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2e7d32",
  color: "white",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: "#1b5e20",
  },
}));

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        scrollMarginTop: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
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
          alignItems="flex-start"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
        >
          {/* Form */}
          <Box flex={{ xs: "1 1 100%", md: "0 0 50%" }}>
            <StyledPaper component="form" onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Send us a message
              </Typography>

              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message}
              />

              <Box mt={3}>
                <StyledButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </StyledButton>
              </Box>
            </StyledPaper>
          </Box>

          {/* Info */}
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
                <Grid item xs={6}>
                  <Typography variant="body2">Monday - Friday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Saturday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">10:00 AM - 4:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Sunday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Closed</Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
