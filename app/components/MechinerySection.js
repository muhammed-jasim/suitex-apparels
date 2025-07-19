"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const machines = [
  {
    title: "YiliJet Sublimation Printer",
    description:
      "The YiliJet Sublimation Printer is a high-performance inkjet printer designed for precision and efficiency in sublimation printing. With a sturdy build and spacious dimensions, it ensures consistent and high-quality output. Made in China.",
    image: "/images/mechinery1.jpg",
  },

  {
    title: "The China-Made Sheen-Brand 9-Color 12-Head Embroidery Machine",
    description:
      "The China-Made Sheen-Brand 9-Color 12-Head Embroidery Machine is a high-speed industrial machine for precise, multi-color embroidery on fabrics and garments. Its flatbed design ensures efficient mass production, making it ideal for large-scale embroidery businesses",
    image: "/images/mechinery2.jpg",
  },
  {
    title: " Dicot fusing machine for collar pressing",
    description:
      "The Dicot fusing machine for collar pressing is a high-performance device designed to deliver precise heat and pressure, ensuring crisp, durable collar shapes. Equipped with advanced technology and a stable pressing system, it provides consistent results for professional-quality collar finishing.",
    image: "/images/mechinery3.jpg",
  },
  // {
  //   title:
  //     " JUKI's button machines, buttonhole machines, stitching machines, and lock machines",
  //   description:
  //     "We use JUKI's button machines, buttonhole machines, stitching machines, and lock machines for precise and efficient garment manufacturing. These machines ensure secure button attachment, clean buttonholes, smooth stitching, and strong seams, enhancing productivity and quality in mass production.",
  //   image: "/images/tailoringMechine1.jpg",
  // },
];

export default function MachinerySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
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

  return (
    <Box sx={{ py: 0, mb: 4 }} id="machinery" ref={sectionRef}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          color="#2A5A14"
          gutterBottom
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Our Machinery
        </Typography>
        <Typography
          align="center"
          sx={{
            mb: 4,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          State-of-the-art equipment for premium textile production
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {machines.map((machine, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              width={isMobile ? "100%" : undefined}
              sx={{
                display: { xs: "flex", sm: "flex", md: "block" },
                justifyContent: { xs: "center", sm: "center", md: "initial" },
              }}
            >
              <Card
                elevation={2}
                sx={{
                  borderRadius: 3,
                  width: "100%",
                  maxWidth: 300,
                  transition: "transform 0.3s, opacity 0.6s ease",
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${0.2 + index * 0.05}s`,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={machine.image}
                  alt={machine.title}
                  loading="lazy"
                />
                <CardContent>
                  <Typography fontWeight={600}>{machine.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {machine.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
