import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL, SET_SEARCH_TERM } from "../../components/productConstants";

const initialState = { products: [], error: null, searchTerm: "", filteredProducts: [] };

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, error: action.payload };
    case SET_SEARCH_TERM:
      // Filter products based on the search term
      const filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, searchTerm: action.payload, filteredProducts };
    default:
      return state;
  }
};
