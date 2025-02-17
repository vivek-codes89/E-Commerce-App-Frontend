import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import ProductCard from "../components/ProductCard";
import { ImageList, ImageListItem, useMediaQuery, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredProducts, error, searchTerm } = useSelector((state) => state.products);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-6">
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          mb: 4,
          textTransform: "uppercase",
        }}
      >
        {searchTerm ? `Search Results for "${searchTerm}"` : "All Products"}
      </Typography>

      {error ? (
        <Typography color="error" align="center">{error}</Typography>
      ) : (
        <ImageList
          variant="masonry"
          cols={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}
          gap={20}
          sx={{ padding: "10px" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ImageListItem key={product.id}>
                <ProductCard product={product} />
              </ImageListItem>
            ))
          ) : (
            <Typography color="text.secondary" align="center" sx={{ width: "100%" }}>
              No products found.
            </Typography>
          )}
        </ImageList>
      )}
    </div>
  );
};

export default Home;
