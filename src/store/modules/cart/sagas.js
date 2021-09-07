import { call, select, put, all, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";
import { formatPrice } from "../../../util/format";

import { addToCartSuccess, updateAmountSuccess } from "./actions";

// interceptador, middleware, generator do redux-saga
function* addToCart({ productId }) {
  // select manipula os states presentes nos reducers...
  // possui uma função que tem acesso a todos os states
  const productExists = yield select(state =>
    state.cart.find(product => product.id === productId)
  );

  const stock = yield call(api.get, `/stock/${productId}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error("Quantidade solicitada fora de estoque");
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(productId, amount));
  } else {
    // faz operações com promises a partir do call
    // ele quem manipula chamadas a partir dos generators
    const response = yield call(api.get, `/products/${productId}`);

    // monta com dados necessários no componente de carrinhos
    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    // put faz um "redirecionamento" de actions, chamando
    // outro reducer a partir do action
    yield put(addToCartSuccess(data));

    toast.info("Produto adicionado ao carrinho");
    history.push("/cart");
  }
}

function* updateAmount({ productId, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${productId}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("Quantidade solicitada for de estoque");
    return;
  }

  yield put(updateAmountSuccess(productId, amount));
}
// takeLatest - apenas ultima "solicitação" atendida.
// ex: usuário clica varias vezes em adicionar ao carrinho em intervalo curto de tempo
export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
]);
