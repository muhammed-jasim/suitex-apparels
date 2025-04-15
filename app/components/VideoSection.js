"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TestimonialsSection from "./TestimonialCarousel";

// Custom animations
const fadeInKeyframes = {
  "@keyframes fadeInLeft": {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "@keyframes fadeInRight": {
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "@keyframes fadeInTop": {
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

export default function SustainableTextile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const features = [
    {
      title: "Eco-Friendly",
      description: "Sustainable production methods",
      highlighted: false,
    },
    {
      title: "Quality First",
      description: "Premium grade materials",
      highlighted: false,
    },
    {
      title: "Innovation",
      description: "Advanced manufacturing",
      highlighted: false,
    },
    {
      title: "Global Reach",
      description: "Worldwide distribution",
      highlighted: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Box ref={sectionRef} sx={{ py: 5, ...fadeInKeyframes }}>
        <Container maxWidth="lg">
          {/* Top: Video + Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Left: Video (60%) */}
            <Box
              sx={{
                flex: { md: "0 0 60%" },
                width: "100%",
                height: isMobile ? "300px" : "400px",
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeInLeft 1s ease forwards" : "none",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/a4FSo9Z3Xtc?si=yZJTIxnxkjPmiIS7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>

            {/* Right: Text (40%) */}
            <Box
              sx={{
                flex: { md: "0 0 40%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                opacity: visible ? 1 : 0,
                animation: visible
                  ? "fadeInRight 1s ease forwards 0.3s"
                  : "none",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#336600",
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  mb: 2,
                }}
              >
                Sustainable Textile Manufacturing
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                We are committed to sustainable practices in textile
                manufacturing, combining traditional craftsmanship with modern
                eco-friendly technologies. Our focus is on producing
                high-quality, environmentally responsible fabrics for a better
                future. We prioritize reduced water usage, energy efficiency,
                and minimal waste throughout our production processes. By
                choosing our textiles, you're supporting a cleaner planet and
                ethical manufacturing practices.
              </Typography>
            </Box>
          </Box>

          {/* Bottom: Feature Cards */}
          {/* Bottom: Feature Cards */}
          {isMobile ? (
            // Mobile View: Separate full-width cards
            <Box
              sx={{ mt: 6, display: "flex", flexDirection: "column", gap: 3 }}
            >
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  sx={{
                    p: 2,
                    // border: feature.highlighted
                    //   ? "2px solid #2196f3"
                    //   : "1px solid #e0e0e0",
                    borderRadius: 2,
                    boxShadow: feature.highlighted
                      ? "0 4px 12px rgba(33, 150, 243, 0.2)"
                      : "none",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.06)",
                    },
                    opacity: visible ? 1 : 0,
                    animation: visible
                      ? "fadeInTop 0.7s ease forwards"
                      : "none",
                    animationDelay: `${0.5 + idx * 0.2}s`,
                    animationFillMode: "forwards",
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#336600",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            // Desktop View: Grid layout
            <Grid container spacing={3} sx={{ mt: 6 }}>
              {features.map((feature, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={idx}
                  sx={{ display: "flex", alignItems: "stretch" }}
                >
                  <Card
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      // border: feature.highlighted
                      //   ? "2px solid #2196f3"
                      //   : "1px solid #e0e0e0",
                      borderRadius: 2,
                      boxShadow: feature.highlighted
                        ? "0 4px 12px rgba(33, 150, 243, 0.2)"
                        : "none",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.08)",
                      },
                      opacity: visible ? 1 : 0,
                      animation: visible
                        ? "fadeInTop 0.7s ease forwards"
                        : "none",
                      animationDelay: `${0.5 + idx * 0.2}s`,
                      animationFillMode: "forwards",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#336600",
                          fontWeight: "bold",
                          mb: 1,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </>
  );
}
