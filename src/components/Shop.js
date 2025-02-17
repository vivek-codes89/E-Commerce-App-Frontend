import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Navbar from '../components/NavBar'; // Assuming you have this component

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('API response:', response.data); // Log the response

        if (response.data) {
          setProducts(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          Our Products
        </Typography>
        {loading ? (
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Loading products...
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {products.length === 0 ? (
              <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
                No products available at the moment.
              </Typography>
            ) : (
              products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={product.title}
                      height="200"
                      image={product.image}
                    />
                    <CardContent>
                      <Typography variant="h6">{product.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        ${product.price}
                      </Typography>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Shop;
