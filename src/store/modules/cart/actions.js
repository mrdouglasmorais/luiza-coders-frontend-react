// action base que recebe o ID do produto
// e será processada entre os middlewares do
// redux-saga
export function addToCartRequest(productId) {
  return {
    type: "@cart/ADD_REQUEST",
    productId,
  };
}

// action final que será ouvido pelos reducers
// definidos, com um produto totalmente populado
// e suas informações carregadas
export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: "@cart/REMOVE",
    productId,
  };
}

export function updateAmountRequest(productId, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    productId,
    amount,
  };
}

export function updateAmountSuccess(productId, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    productId,
    amount,
  };
}
