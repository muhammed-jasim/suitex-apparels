"use client";

import Slider from "react-slick";
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    heading:
      "Delivering Excellence Through Unmatched Quality and Thoughtful Craftsmanship in ",
    headingSub: "Every Stitch",
    subtext: "Tailored to your unique style",
  },
  {
    id: 2,
    image: "/images/hero4.jpg",
    heading:
      "Blending Innovation, Quality, and Craft to Build Meaningful Digital Solutions",
    headingSub: "Style with Confidence",
    subtext: "Custom-made elegance",
  },
  {
    id: 3,
    image: "/images/hero5.jpg",
    heading:
      "Where Vision Becomes Reality Through Quality-First Design and Expert Craft",
    headingSub: "Every Stitch",
    subtext: "Tailored to your unique style",
  },
];

export default function HeroSlider() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <Box
        component="ul"
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          textAlign: "center",
          p: 0,
          m: 0,
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          bgcolor: "#fff",
          borderRadius: "50%",
          display: "inline-block",
          mx: "4px",
          opacity: 0.5,
        }}
      />
    ),
  };

  return (
    <Box sx={{ overflow: "hidden", position: "relative" }} id="home">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              height: "100vh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
            }}
          >
            {/* Background Image Layer */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.5)", // darken image only
                zIndex: 1,
              }}
            />

            {/* Overlay for smooth color blend */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
                zIndex: 2,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                // pb: { xs: 6, sm: 8, md: 10 },
                width: "100%",
                // border: "1px solid red",
                pt: 10,
              }}
            >
              <Container
                maxWidth="md"
                sx={{
                  textAlign: "start",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                    textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.heading}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                    textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.headingSub}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                    color: "#e0e0e0",
                    mt: 1,
                  }}
                >
                  {slide.subtext}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleScroll("contact")}
                    sx={{
                      backgroundColor: "#2A5A14",
                      borderRadius: "8px",
                      width: { xs: "100%", sm: "160px" },
                      fontWeight: "bold",
                      color: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => handleScroll("collections")}
                    sx={{
                      borderRadius: "8px",
                      width: { xs: "100%", sm: "180px" },
                      fontWeight: "bold",
                      color: "#fff",
                      borderColor: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    View Collections
                  </Button>
                </Box>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
