import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Box,
  TextField,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart,
  AccountCircle,
  Search,
  Notifications,
  Delete,
  Home,
  ContactMail,
  Info,
  Work,
  Close,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/actions/cartActions";
import { setSearchTerm } from "../redux/actions/productAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart || {});
  const cartItems = cart.cartItems || [];
  const notifications = useSelector((state) => state.notifications || []);
  const notificationCount = notifications.length;

  const searchTerm = useSelector((state) => state.products.searchTerm);
  const [accountMenuOpen, setAccountMenuOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // state for Contact Us modal
  const [aboutOpen, setAboutOpen] = useState(false); // state for About Us modal
  const [careersOpen, setCareersOpen] = useState(false); // state for Careers modal

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
    if (event.target.value.trim()) {
      navigate("/"); // Navigate to homepage on search
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Function to handle E-commerce menu item click and navigate to home page
  const handleEcommerceClick = () => {
    dispatch(setSearchTerm('')); // Clear search term
    navigate("/"); // Navigate to the homepage to show all products
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#025048", color: "#fff", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Menu Button */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>

          {/* Website Name */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px", cursor: "pointer" }}
            onClick={() => {
              dispatch(setSearchTerm('')); // Clear search term
              navigate("/"); // Navigate to the homepage
            }}
          >
            MyStore
          </Typography>

          {/* Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search Products..."
              fullWidth
              sx={{
                maxWidth: 500,
                backgroundColor: "#fff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
                "@media (max-width: 600px)": {
                  maxWidth: 200,
                },
              }}
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <Search sx={{ color: "#025048", fontSize: { xs: "20px", sm: "24px" } }} />
                ),
              }}
            />
          </Box>

          {/* Cart Icon */}
          <Tooltip title="View Cart" arrow>
            <IconButton color="inherit" onClick={() => setCartDrawerOpen(true)}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Notifications Icon */}
          <Tooltip title="Notifications" arrow>
            <IconButton color="inherit">
              <Badge badgeContent={notificationCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Account Icon */}
          <Tooltip title="Account Menu" arrow>
            <IconButton color="inherit" onClick={(event) => setAccountMenuOpen(event.currentTarget)}>
              <AccountCircle />
            </IconButton>
          </Tooltip>

          {/* Account Menu */}
          <Menu anchorEl={accountMenuOpen} open={Boolean(accountMenuOpen)} onClose={() => setAccountMenuOpen(null)}>
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
            <MenuItem onClick={() => setAccountMenuOpen(null)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            E-commerce
          </Typography>
          <List>
            <ListItem button onClick={handleEcommerceClick}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setAboutOpen(true)}>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button onClick={() => setContactOpen(true)}>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={() => setCareersOpen(true)}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Careers" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Shopping Cart</Typography>
            <IconButton onClick={() => setCartDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          {cartItems.length === 0 ? (
            <Typography sx={{ textAlign: "center", my: 2 }}>Your cart is empty</Typography>
          ) : (
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Avatar src={item.image} alt={item.name} />
                  <ListItemText primary={item.name} secondary={`₹${item.price}`} />
                  <IconButton size="small" onClick={() => handleRemoveFromCart(item.id)}>
                    <Delete color="error" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button onClick={() => setCartDrawerOpen(false)} color="primary">
              Continue Shopping
            </Button>
            {cartItems.length > 0 && (
              <Button variant="contained" color="success" onClick={() => navigate("/cart")}>
                Checkout
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>

      {/* Contact Us Modal */}
      <Dialog open={contactOpen} onClose={() => setContactOpen(false)} maxWidth="md">
        <DialogTitle sx={{ backgroundColor: "#025048", color: "#fff" }}>Contact Us</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f7f7f7", color: "#333" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Get in Touch with MyStore
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Have questions or need assistance? Our customer service team is here to help you. You can reach us through the following channels:
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Email:</strong> support@mystore.com
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Phone:</strong> +123-456-7890
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Address:</strong> 123 MyStore St, E-Commerce City, Country.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#025048" }}>
          <Button onClick={() => setContactOpen(false)} sx={{ color: "#fff" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* About Us Modal */}
      <Dialog open={aboutOpen} onClose={() => setAboutOpen(false)} maxWidth="md">
        <DialogTitle sx={{ backgroundColor: "#025048", color: "#fff" }}>About Us</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f7f7f7", color: "#333" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Welcome to MyStore
          </Typography>
          <Typography sx={{ mt: 2 }}>
            MyStore is your one-stop shop for the best deals on products. From electronics to fashion, we have something for everyone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#025048" }}>
          <Button onClick={() => setAboutOpen(false)} sx={{ color: "#fff" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Careers Modal */}
      <Dialog open={careersOpen} onClose={() => setCareersOpen(false)} maxWidth="md">
        <DialogTitle sx={{ backgroundColor: "#025048", color: "#fff" }}>Careers</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f7f7f7", color: "#333" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Join the MyStore Team
          </Typography>
          <Typography sx={{ mt: 2 }}>
            We are always looking for talented individuals to join our growing team. If you're passionate about e-commerce and technology, check out our current openings on our careers page.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#025048" }}>
          <Button onClick={() => setCareersOpen(false)} sx={{ color: "#fff" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
