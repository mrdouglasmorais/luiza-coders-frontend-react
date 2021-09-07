import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

import reactotronSaga from "reactotron-redux-saga";

// reactotron para desenvolvimento
if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    // acesso ao log de transição do SAGA dentro do reactotron
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
