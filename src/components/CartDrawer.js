import React from "react";
import {
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Button,
  Badge,
  Tooltip,
} from "@mui/material";
import { ShoppingCart, Delete, Close, Menu } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart || {});
  const cartItems = cart.cartItems || [];

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      {/* Stylish Menu Icon */}
      <Tooltip title="Open Menu" arrow>
        <IconButton onClick={onClose} sx={{ color: "#fff", position: "fixed", top: 20, left: 20, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", borderRadius: 2, padding: "10px", "&:hover": { background: "rgba(255,255,255,0.4)" } }}>
          <Menu sx={{ fontSize: 30 }} />
        </IconButton>
      </Tooltip>

      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box
          sx={{
            width: 350,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            padding: 2,
            borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 2,
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              Shopping Cart
            </Typography>
            <IconButton onClick={onClose} sx={{ color: "#fff" }}>
              <Close />
            </IconButton>
          </Box>

          {/* Cart Items */}
          <List sx={{ flexGrow: 1, overflowY: "auto", marginTop: 1 }}>
            {cartItems.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center", color: "#fff", marginTop: 2 }}>
                Your cart is empty.
              </Typography>
            ) : (
              cartItems.map((item) => (
                <ListItem key={item.id} sx={{ display: "flex", justifyContent: "space-between", background: "rgba(255,255,255,0.2)", marginBottom: 1, borderRadius: 2 }}>
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} sx={{ width: 50, height: 50 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: "bold", color: "#fff" }}>{item.name}</Typography>}
                    secondary={<Typography sx={{ color: "#ddd" }}>₹{item.price}</Typography>}
                  />
                  <IconButton size="small" onClick={() => handleRemoveFromCart(item.id)} sx={{ color: "#ff4d4d" }}>
                    <Delete />
                  </IconButton>
                </ListItem>
              ))
            )}
          </List>

          {/* Footer Section */}
          {cartItems.length > 0 && (
            <Box sx={{ padding: 2, borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", textAlign: "center", marginBottom: 2 }}>
                Total: ₹{cartItems.reduce((acc, item) => acc + item.price, 0)}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ background: "#ff8c00", color: "#fff", fontWeight: "bold", borderRadius: "30px", padding: "10px 0" }}
                onClick={() => {
                  navigate("/checkout");
                  onClose();
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
