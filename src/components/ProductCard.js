import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { addToCart } from "../redux/actions/cartActions";
import { useState } from "react";
import ProductModal from "./ProductModal"; // Assuming your modal component is here

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null); // For managing selected product
  const [openModal, setOpenModal] = useState(false); // For controlling modal visibility

  const handleOpenModal = () => {
    setSelectedProduct(product); // Set the selected product
    setOpenModal(true); // Open modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close modal
    setSelectedProduct(null); // Reset the selected product
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            },
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={product.image} // Ensure you have an image URL
            alt={product.title}
            sx={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={handleOpenModal} // Trigger modal on image click
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", padding: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} noWrap>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              ₹{product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(addToCart(product))}
              sx={{
                backgroundColor: "#025048",
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Product Modal Component */}
      {openModal && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={(product) => {
            dispatch(addToCart(product));
            handleCloseModal(); // Close modal after adding to cart
          }}
        />
      )}
    </>
  );
};

export default ProductCard;
