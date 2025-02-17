import axios from "axios";
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL, SET_SEARCH_TERM } from "../../components/productConstants";

// Fetch products from the API
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Set the search term (to filter products)
export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
};
