"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

// Categories
const categories = [
  "School and College Uniforms",
  "Corporate Uniforms",
  "Hospital Uniforms",
  "Aviation Uniforms",
  "Industrial Uniforms",
  "Jersey / T-Shirt",
];

// Collection items

// aviation uniforms
const collections = [
  {
    title: "Elegant Airline Crew Uniform",
    price: "$599",
    category: "Aviation Uniforms",
    features: [
      "Tailored Fit",
      "Professional Airline Look",
      "Easy Identification",
    ],
    image: "/images/aviation-1.jpg",
  },
  {
    title: "Modern Executive Business Uniform",
    price: "$599",
    category: "Aviation Uniforms",
    features: ["Tailored Suits", "Premium Stitching", "Business Formal Look"],
    image: "/images/aviation-2.jpg",
  },

  // industrial uniforms
  {
    title: "Heavy-Duty Industrial Coveralls for Workshop Crew",
    price: "$599",
    category: "Industrial Uniforms",
    features: [
      "Reflective Strips for Visibility",
      "Easy to Wear and Remove",
      "Industrial-Grade Fabric",
    ],
    image: "/images/industrial-1.jpg",
  },
  {
    title: "Functional Engineering Workwear",
    price: "$599",
    category: "Industrial Uniforms",
    features: [
      "Breathable Material",
      "Utility Pockets",
      "Flexible for Movement",
    ],
    image: "/images/industrial-2.jpg",
  },

  // jersey / t-shirt

  {
    title: "Performance Sports Jersey",
    price: "$1299",
    category: "Jersey / T-Shirt",
    features: [
      "Athletic Fit for Mobility",
      "Ideal for Outdoor and Indoor Sports",
    ],
    image: "/images/jersey-1.jpg",
  },
  {
    title: "T-Shirts ",
    price: "$1299",
    category: "Jersey / T-Shirt",
    features: ["Unisex Standard Fit", "Easy to Wash & Maintain"],
    image: "/images/t-shirt.jpg",
  },

  {
    title: "Sports Team Jersey",
    price: "$1299",
    category: "Jersey / T-Shirt",
    features: ["Lightweight Material", "Stretchable and Durable"],
    image: "/images/jersey-2.jpg",
  },

  // school and college uniforms

  {
    title: "Classic Formal Uniform for Senior Students",
    // price: "$799",
    category: "School and College Uniforms",
    features: ["Minimalist Style", "Professional Look", "Perfect Fit"],
    image: "/images/school-1.jpg",
  },
  {
    title: "Comfortable Everyday School Uniform for Kids",
    // price: "$699",
    category: "School and College Uniforms",
    features: [
      "Casual Comfort",
      "Easy Care",
      "Perfect Fit",
      "Durable Material",
    ],
    image: "/images/school-2.jpg",
  },

  // Hospital uniforms
  {
    title: "Clinical Professionals",
    price: "$999",
    category: "Hospital Uniforms",
    features: ["Lightweight Fabric", "Easy to Clean", "Minimal Design"],
    image: "/images/hospital-1.jpg",
  },
  {
    title: "Hospital Uniforms for Medical Staff",
    price: "$999",
    category: "Hospital Uniforms",
    features: [
      "Clean and Confident Appearance",
      "Multi-Pocket Utility",
      "Blend of Style and Function",
    ],
    image: "/images/hospital-2.jpg",
  },

  // corporate uniforms

  {
    title: "Executive Team Formal Uniform",
    price: "$699",
    category: "Corporate Uniforms",
    features: ["Team-Oriented Styling", "Professional Confidence"],
    image: "/images/corporate-1.jpg",
  },
  {
    title: "Modern Corporate Attire for Professionals",
    price: "$699",
    category: "Corporate Uniforms",
    features: ["Polished Look", "Slim-Fit Design", "Comfortable Fabric"],
    image: "/images/corporate-2.jpg",
  },
];

// Styled green button (optional use)
const GreenButton = styled(Button)({
  backgroundColor: "#2A5A14",
  color: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#256310",
  },
});

// Simple styled card with transition
const StyledCard = styled(Card)({
  transition: "transform 0.3s ease, opacity 0.3s ease",
  borderRadius: 16,
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

export default function CollectionsSection() {
  const [activeCategory, setActiveCategory] = useState(
    "School and College Uniforms"
  );

  const filtered =
    // activeCategory === "School and College Uniforms"
    //   ? collections
    //   :
    collections.filter((item) => item.category === activeCategory);

  return (
    <Box
      sx={{
        mt: 8,
        mb: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollMarginTop: "90px",
      }}
      id="collections"
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          color="#2A5A14"
          gutterBottom
        >
          Our Premium Collections
        </Typography>
        <Typography align="center" sx={{ mb: 4 }}>
          Discover our handcrafted pieces, tailored to perfection with the
          finest materials and expert craftsmanship.
        </Typography>

        {/* Filter Buttons */}
        <Box sx={{ textAlign: "center", mb: 4, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setActiveCategory(cat)}
              variant={activeCategory === cat ? "filled" : "outlined"}
              color={activeCategory === cat ? "success" : "default"}
              sx={{ mx: 0.5, mb: 1 }}
            />
          ))}
        </Box>

        {/* Grid */}
        <Grid container spacing={3} justifyContent="center">
          {filtered.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <StyledCard elevation={4}>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {item.features.map((f, i) => (
                      <li key={i}>
                        <Typography variant="body2">{f}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
