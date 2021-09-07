import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

// lista de middlewares presentes. Basta registrar.
const middlewares = [cart];

// registra todos os middlewares criados
export default function* rootSaga() {
  return yield all(middlewares);
}
