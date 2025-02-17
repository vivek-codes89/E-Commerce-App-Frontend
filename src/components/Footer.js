import React, { useState } from "react";
import { Box, Grid, Typography, Link, Container, IconButton, Divider, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Handle modal open/close and set content
  const handleModalOpen = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalContent("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#025048", // Dark Blue to complement the navbar
        color: "#fff", // White text for contrast
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              ABOUT
            </Typography>
            <FooterLink text="Contact Us" handleClick={() => handleModalOpen("Contact Us")} />
            <FooterLink text="About Us" handleClick={() => handleModalOpen("About Us")} />
            <FooterLink text="Careers" handleClick={() => handleModalOpen("Careers")} />
            <FooterLink text="Press" handleClick={() => handleModalOpen("Press")} />
          </Grid>

          {/* Group Companies */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              GROUP COMPANIES
            </Typography>
            <FooterLink text="Myntra" handleClick={() => handleModalOpen("Myntra")} />
            <FooterLink text="Cleartrip" handleClick={() => handleModalOpen("Cleartrip")} />
            <FooterLink text="Shopsy" handleClick={() => handleModalOpen("Shopsy")} />
          </Grid>

          {/* Help Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              HELP
            </Typography>
            <FooterLink text="Payments" handleClick={() => handleModalOpen("Payments")} />
            <FooterLink text="Shipping" handleClick={() => handleModalOpen("Shipping")} />
            <FooterLink text="Cancellation & Returns" handleClick={() => handleModalOpen("Cancellation & Returns")} />
            <FooterLink text="FAQ" handleClick={() => handleModalOpen("FAQ")} />
          </Grid>

          {/* Consumer Policy */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              CONSUMER POLICY
            </Typography>
            <FooterLink text="Terms Of Use" handleClick={() => handleModalOpen("Terms Of Use")} />
            <FooterLink text="Security" handleClick={() => handleModalOpen("Security")} />
            <FooterLink text="Privacy" handleClick={() => handleModalOpen("Privacy")} />
            <FooterLink text="Sitemap" handleClick={() => handleModalOpen("Sitemap")} />
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", my: 4 }} />

        {/* Social Icons */}
        <Box textAlign="center">
          <SocialIcon icon={<Facebook />} href="#" color="#3b5998" />
          <SocialIcon icon={<Instagram />} href="#" color="#E4405F" />
          <SocialIcon icon={<Twitter />} href="#" color="#1DA1F2" />
          <SocialIcon icon={<YouTube />} href="#" color="#FF0000" />
        </Box>

        {/* Copyright */}
        <Typography textAlign="center" mt={2} variant="body2" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Flipkart Clone. All rights reserved.
        </Typography>
      </Container>

      {/* Modal Dialog */}
      <Dialog open={openModal} onClose={handleModalClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ backgroundColor: "#025048", color: "#fff", fontWeight: "bold" }}>
          {modalContent}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f4f4f4" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Welcome to {modalContent} section!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Here, we provide more details and information about the {modalContent}. You can also navigate to other sections of the site from here.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#f4f4f4" }}>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// Styled Footer Link Component
const FooterLink = ({ text, handleClick }) => (
  <Link
    href="#"
    color="inherit"
    display="block"
    onClick={handleClick}
    sx={{
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": { color: "#00897b" }, // Teal hover effect for a fresh look
    }}
  >
    {text}
  </Link>
);

// Styled Social Icon Component
const SocialIcon = ({ icon, href, color }) => (
  <IconButton
    href={href}
    sx={{
      color: "#fff", // White icons to stand out
      mx: 1,
      transition: "transform 0.3s, color 0.3s",
      "&:hover": {
        transform: "scale(1.2)",
        color: color,
      },
    }}
  >
    {icon}
  </IconButton>
);

export default Footer;
