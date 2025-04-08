"use client";

import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

// Styled component for top green cards
const GreenCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#2A5A14",
  color: "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#245010",
  },
}));

// Feature card styles
const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textAlign: "center",
  padding: theme.spacing(3),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

export default function AboutSection() {
  return (
    <Box sx={{ pt: 5, px: 2, scrollMarginTop: "50px" }} id="about">
      <Typography
        variant="h4"
        align="center"
        fontWeight={600}
        color="#2A5A14"
        gutterBottom
      >
        About Suitex Apparels
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 900, mx: "auto", mb: 4 }}
      >
        We specialize in premium tailoring services, combining traditional
        craftsmanship with modern techniques. Our commitment to quality and
        attention to detail ensures perfect fits and satisfied customers.
      </Typography>

      {/* Top 3 Green Highlights */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {[
          {
            title: "Expert Tailors",
            desc: "Our team of skilled professionals brings years of experience.",
          },
          {
            title: "Quality Materials",
            desc: "We use only the finest fabrics and materials.",
          },
          {
            title: "Perfect Fit",
            desc: "Guaranteed satisfaction with every garment.",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GreenCard>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </GreenCard>
          </Grid>
        ))}
      </Grid>

      {/* Feature Cards with Icons */}
      <Grid container spacing={3} justifyContent="center">
        {[
          {
            icon: "/images/tailoring.png",
            title: "Custom Tailoring",
            desc: "Personalized fit and style",
          },
          {
            icon: "/images/premiumfabric.png",
            title: "Premium Fabrics",
            desc: "Finest materials sourced globally",
          },
          {
            icon: "/images/expertcraft.png",
            title: "Expert Craftsmen",
            desc: "25+ years of experience",
          },
          {
            icon: "/images/perfectfit.png",
            title: "Perfect Fit",
            desc: "Guaranteed satisfaction",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureCard elevation={1}>
              <Box mb={2}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
