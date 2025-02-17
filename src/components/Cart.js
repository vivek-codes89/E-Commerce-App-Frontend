import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartAction";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.title}
                secondary={`Price: ₹${item.price}`}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cart;
