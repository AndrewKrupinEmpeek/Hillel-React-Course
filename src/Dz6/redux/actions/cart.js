export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId
});

export const removeFormCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});
