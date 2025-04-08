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
    image: "/images/banner-placeholder.png",
    heading: "Quality and Craft in",
    headingSub: "Every Stitch",
    subtext: "Tailored to your unique style",
  },
  {
    id: 2,
    image: "/images/banner-placeholder.png",
    heading: "Elevate Your Wardrobe",
    heading: "Elevate Your",
    subtext: "Custom-made elegance",
  },
  {
    id: 3,
    image: "/images/banner-placeholder.png",
    heading: "Quality and Craft in",
    headingSub: "Every Stitch",
    subtext: "Tailored to your unique style",
  },
];

export default function HeroSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          bgcolor: "#ccc",
          borderRadius: "50%",
          display: "inline-block",
          mx: "4px",
          transition: "all 0.3s ease",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box sx={{ overflow: "hidden", position: "relative" }} id="home">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              height: { xs: "100vh", md: "100vh" },
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "100vh", md: "90vh" },
              }}
            >
              <Container
                maxWidth="md"
                sx={{
                  textAlign: "start",
                  ...(!isMobile && { mr: 6, pt: 5 }),
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                >
                  {slide.heading}
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                >
                  {slide.headingSub}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {slide.subtext}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "start",
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "150px",
                      backgroundColor: "#2A5A14",
                      borderRadius: "8px",

                      // maxWidth: {
                      //   xs: "100%",
                      //   sm: "auto",
                      //   backgroundColor: "#2A5A14",
                      // },
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    fullWidth
                    sx={{
                      maxWidth: { xs: "100%", sm: "auto" },
                      width: "170px",
                      borderRadius: "8px",
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
