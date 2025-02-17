import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Typography variant="h6" color="error">Product not found!</Typography>;
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
      <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
        <CardMedia component="img" image={product.image} alt={product.title} height="400" />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="body1" color="text.secondary">{product.description}</Typography>
          <Typography variant="h6" color="primary">₹{product.price}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
