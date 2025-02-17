import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "85vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: -1,
          objectFit: "cover",
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2024/09/26/233382_tiny.mp4"
          type="video/mp4"
        />
      </video>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1, color: "#fff" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            animation: "slideInFromTop 1s ease-out",
          }}
        >
          Mega Sale: Up to 70% Off!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Shop the latest trends in fashion, electronics, and more. Don’t miss out on exclusive offers!
        </Typography>
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            px: 4,
            backgroundColor: "#025048",
            color: "white",
            "&:hover": { backgroundColor: "#1A6F61" },
            animation: "scaleUp 0.5s ease-in-out",
          }}
        >
          Start Shopping
        </Button>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideInFromTop {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes scaleUp {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
        `}
      </style>
    </Box>
  );
};

export default Banner;
