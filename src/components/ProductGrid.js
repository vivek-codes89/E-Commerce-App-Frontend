import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,

  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <Dialog
      open={!!product}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          overflow: "hidden",
        },
      }}
    >
      {product && (
        <>
          <DialogTitle
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.5rem",
              backgroundColor: "#f5f5f5",
              py: 2,
              position: "relative",
            }}
          >
            {product.name}
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#ff4444",
              }}
            >
              ✕
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ py: 3, px: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* Full-Size Image */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  maxHeight: "60vh",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              {/* Product Details */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  p: 3,
                }}
              >
                <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
                  ₹{product.price}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {product.description}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => onAddToCart(product)}
                  sx={{
                    backgroundColor: "#4caf50",
                    "&:hover": {
                      backgroundColor: "#388e3c",
                    },
                    mt: 2,
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default ProductModal;