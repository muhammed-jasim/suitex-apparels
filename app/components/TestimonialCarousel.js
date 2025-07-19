"use client";

import { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Afin Jaffer",
    position: "Wander Holidays",
    rating: 5,
    // image: "/images/avatar.jpg",
    quote:
      "We ordered embroidered T-shirts from Suitex Apparels for our travel team, and the results were fantastic. The embroidery was clean, durable, and gave a premium feel to our branding. Comfortable and delivered on time—highly recommended for quality custom apparel!",
  },
  {
    name: "Abhinav",
    position: " Inspire Ink Creatives, Co-founder",
    rating: 5,
    // image: "/images/avatar.jpg",
    quote:
      "As a creative agency, we’re particular about every detail—especially our team's appearance. Suitex Apparels consistently delivers high-quality uniforms that reflect our brand’s identity. The fabric, fit, and timely delivery show their professionalism—proud to have them as our apparel partner.",
  },
  {
    name: "Abdul Rashad",
    position: "Al Barakah Travels, Kuwait",
    rating: 5,
    // image: "/images/avatar.jpg",
    quote:
      "We ordered customized embroidered uniforms from Suitex Apparels for our travel team in Kuwait and were extremely satisfied with the quality. The stitching, fabric, and embroidery were detailed and well-crafted. Suitex was professional, clear in communication, and delivered on time—we look forward to working with them again.",
  },
  {
    name: "Muhammed Jasim k",
    position: "Founder - Webryxon",
    rating: 5,
    // image: "/images/avatar.jpg",
    quote:
      "As a web agency, we value quality, precision, and strong branding—and Suitex Apparels delivered exactly that. I had the chance to visit their production unit, which uses modern machinery and efficient processes. The custom apparel was top-notch, and their team was professional and timely—highly recommended!",
  },
  // {
  //   name: "Robert Kim",
  //   position: "Financial Advisor",
  //   rating: 5,
  //   image: "/images/avatar.jpg",
  //   quote:
  //     "As someone who wears suits daily, quality matters. Suitex Apparels delivers exceptional craftsmanship that stands the test of time.",
  // },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{ position: "relative", overflow: "hidden", mb: 6 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#2A5A14",
              mb: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            Client Stories
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.2s",
            }}
          >
            Hear what our clients have to say about their experience
          </Typography>
        </Box>

        <Box sx={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card
                  elevation={2}
                  sx={{
                    p: 3,
                    minHeight: 250,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{ color: "#2A5A14", mb: 1 }}
                    />
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {testimonial.quote}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#2A5A14" }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #2a5a14;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #2a5a14;
          background: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background: #f9f9f9;
          transform: translateY(-2px);
        }
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        @media (max-width: 768px) {
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </Box>
  );
}
