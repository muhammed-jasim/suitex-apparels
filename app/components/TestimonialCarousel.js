"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Rating,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "David Anderson",
    position: "Business Professional",
    rating: 5,
    image: "/images/avatar.jpg",
    quote:
      "The quality of tailoring at Suitex Apparels is exceptional. Their attention to detail and customer service made the entire experience outstanding.",
  },
  {
    name: "Sarah Williams",
    position: "Corporate Executive",
    rating: 5,
    image: "/images/avatar.jpg",
    quote:
      "I've been a loyal customer for over 3 years. Their consistent quality and professional service keeps me coming back.",
  },
  {
    name: "Michael Chen",
    position: "Entrepreneur",
    image: "/images/avatar.jpg",
    rating: 5,
    quote:
      "Finding the perfect fit was always a challenge until I discovered Suitex Apparels. Their expertise in tailoring is unmatched.",
  },
  {
    name: "Jennifer Lopez",
    position: "Marketing Director",
    rating: 5,
    image: "/images/avatar.jpg",
    quote:
      "Their attention to current trends while maintaining classic elegance is what sets Suitex Apparels apart from other tailors I've worked with.",
  },
  {
    name: "Robert Kim",
    position: "Financial Advisor",
    image: "/images/avatar.jpg",
    rating: 5,
    quote:
      "As someone who wears suits daily, quality matters. Suitex Apparels delivers exceptional craftsmanship that stands the test of time.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Set up Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Trigger when at least 20% of the element is visible
      }
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

  // Determine how many testimonials to show based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      let count = 1;
      if (window.innerWidth >= 768) count = 2;
      if (window.innerWidth >= 1024) count = 3;

      const visibleItems = [];
      for (let i = 0; i < count; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleItems.push(testimonials[index]);
      }
      setVisibleTestimonials(visibleItems);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Create custom keyframes for the testimonials appearing
  const fadeInStyles = {
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translateY(40px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "@keyframes fadeInLeft": {
      from: {
        opacity: 0,
        transform: "translateX(-30px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
    "@keyframes fadeInRight": {
      from: {
        opacity: 0,
        transform: "translateX(30px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: 8,
        position: "relative",
        ...fadeInStyles,
      }}
    >
      <Container maxWidth="lg" ref={containerRef} sx={{ position: "relative" }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="600"
          color="#2A5A14"
          gutterBottom
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Client Stories
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mb: 6,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-15px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s", // Delayed animation
          }}
        >
          Hear what our clients have to say about their experience
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              elevation={0}
              sx={{
                flex: 1,
                maxWidth: 360,
                minWidth: 280,
                p: 4,
                borderRadius: 2,
                // border: "1px solid #f0f0f0",
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? idx === 0
                    ? "fadeInLeft 0.8s ease forwards"
                    : idx === visibleTestimonials.length - 1
                    ? "fadeInRight 0.8s ease forwards"
                    : "fadeInUp 0.8s ease forwards"
                  : "none",
                animationDelay: `${0.3 + idx * 0.2}s`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <Rating
                value={testimonial.rating}
                readOnly
                sx={{ color: "#2A5A14", mb: 2, fontSize: 16 }}
              />

              <Box sx={{ position: "relative", mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "#555",
                    pl: 3,
                    pr: 1,
                    position: "relative",
                    // "&::before": {
                    //   content: '"""',
                    //   fontFamily: "serif",
                    //   fontSize: 48,
                    //   position: "absolute",
                    //   color: "#2A5A14",
                    //   opacity: 0.7,
                    //   left: -10,
                    //   top: -20,
                    // },
                  }}
                >
                  {testimonial.quote}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "#f0f0f0",
                    borderRadius: "50%",
                    overflow: "hidden", // Ensures image stays within circle
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt="User"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Keeps aspect ratio
                    }}
                  />
                </Box>

                <Box>
                  <Typography fontWeight="500" color="#2A5A14" variant="body1">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Navigation arrows - also animate on scroll */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: 2, md: 10 },
            top: "52%",

            // transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
            boxShadow: 1,
            opacity: isVisible ? 1 : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.6s ease 0.8s, background-color 0.2s ease", // Delayed appearance
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 2, md: 10 },
            top: "52%",
            // transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
            boxShadow: 1,
            zIndex: 2,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.8s, background-color 0.2s ease", // Delayed appearance
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </IconButton>

        {/* Navigation dots - also animate on scroll */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            gap: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 1s, transform 0.6s ease 1s", // Last element to appear
          }}
        >
          {testimonials.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => goToSlide(idx)}
              sx={{
                width: idx === currentIndex ? 16 : 8,
                height: 8,
                borderRadius: "10px",
                bgcolor: idx === currentIndex ? "#2A5A14" : "#e0e0e0",
                cursor: "pointer",
                transition: "background-color 0.3s ease, width 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
