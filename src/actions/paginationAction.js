import {
  CHANGE_PAGE_PAGINATION,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_PENDING
} from "../constants/pagination";

export function changePagePagination(value) {
  return {
    type: CHANGE_PAGE_PAGINATION,
    payload: value
  };
}

export const getProductsAction = (dataFilter) => async dispatch => {

  const { skip, limit, productName, promotionPrice, productCategories, productColor, productSize, sortProducts } = dataFilter
  const minPrice = dataFilter.promotionPrice[0]
  const maxPrice = dataFilter.promotionPrice[1]
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }
  try {
    const response = await fetch(
      `https://timekeeper-back-end.herokuapp.com/products?skip=${skip}&limit=${limit}&productName=${productName}&minPrice=${minPrice}&maxPrice=${maxPrice}&productCategories=${productCategories}&productColor=${productColor}&productSize=${productSize}&sortProducts=${sortProducts}`, requestOptions
    );

    const data = await response.json();
    return dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      data: data.products
    });
  } catch (err) {
    alert(err);
  }

}

