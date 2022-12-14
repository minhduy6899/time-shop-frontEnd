import { GET_PRODUCT_ITEM, GET_ALL_PRODUCTS, GET_PRODUCT_FILTER_ITEM, GET_PRODUCTS_PENDING } from "../constants/getAllProducts";

const limit = 6

const initialState = {
  currentProduct: "ALL",
  productsFilter: [],
  productsList: [],
  loading: false,
  noAllPage: 1,
}

export default function getAllProductsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_ITEM:
      return {
        ...state,
        currentProduct: action.payload
      }
    case GET_PRODUCT_FILTER_ITEM:
      return {
        ...state,
        productsFilter: action.payload
      }
    case GET_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        productsList: action.payload,
        noAllPage: Math.ceil(action.payload.length / limit)
      }
    default:
      return state;
  }
}

