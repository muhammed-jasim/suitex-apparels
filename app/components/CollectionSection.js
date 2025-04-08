"use client";

import { useEffect, useRef, useState } from "react";
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
import { styled, keyframes } from "@mui/system";

// Categories
const categories = [
  "All Collections",
  "Suits",
  "Uniforms",
  "Wedding",
  "Formal",
];

// Collection items
const collections = [
  {
    title: "Premium Suit Collection",
    price: "$899",
    category: "Suits",
    features: ["100% Wool Blend", "Custom Fitting", "Premium Lining"],
    image: "/images/redSuit.jpg",
  },
  {
    title: "School Uniforms",
    price: "$599",
    category: "Uniforms",
    features: ["Modern cut", "Premium Stitching", "Detailed Embroidery"],
    image: "/images/uniform1.jpg",
  },
  {
    title: "Wedding Collection",
    price: "$1299",
    category: "Wedding",
    features: ["Luxury wedding attire", "Hand Stitched", "Finest Fabric"],
    image: "/images/suit3.jpg",
  },
  {
    title: "Business Formal",
    price: "$799",
    category: "Formal",
    features: [
      "Professional business suits",
      "All Season Fabric",
      "Modern Cut",
    ],
    image: "/images/suit2.jpg",
  },
  {
    title: "Evening Wear",
    price: "$999",
    category: "Formal",
    features: ["Elegant evening collection", "Custom Fit", "Luxe Details"],
    image: "/images/suit3.jpg",
  },
  {
    title: "Summer Collection",
    price: "$699",
    category: "Suits",
    features: ["Breathable Fabric", "Easy Care", "Perfect Fit"],
    image: "/images/uniform2.jpg",
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

// Animation for scroll-in
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled animated card
const AnimatedCard = styled(Card)(({ visible }) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  animation: visible ? `${fadeInUp} 0.6s ease-out` : "none",
  transition: "opacity 0.6s, transform 0.6s",
  borderRadius: 16,
  overflow: "hidden",
}));

export default function CollectionsSection() {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const [visibleCards, setVisibleCards] = useState([]);

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev];
              newVisible[idx] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [activeCategory]);

  const filtered =
    activeCategory === "All Collections"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  return (
    <Box
      sx={{
        // pt: { xs: 6, sm: 10 },
        // pb: { xs: 6, sm: 10 }, // ✅ Fix bottom spacing
        // px: 0,
        mt: 6,
        mb: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

        {/* Responsive Grid with scroll animation */}
        <Grid container spacing={3} justifyContent="center">
          {filtered.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <AnimatedCard
                elevation={4}
                ref={(el) => (cardRefs.current[idx] = el)}
                visible={visibleCards[idx]}
              >
                <CardMedia
                  component="img"
                  height="250"
                  width={250}
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
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
