import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";
import thunk from 'redux-thunk';
import { rootReducer } from "../reducers";

export function configureStore(initialState) {
  const middleware = composeWithDevTools(applyMiddleware(logger), applyMiddleware(thunk));

  const store = createStore(rootReducer, initialState, middleware);
  if (module.hot) {
    module.hot.accept("./../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
