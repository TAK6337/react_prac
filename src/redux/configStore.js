
// import {
//     legacy_createStore as createStore,
//     combineReducers,
//     applyMiddleware,
//   } from "redux";
//   import thunk from "redux-thunk";
  
//   import Words from "./modules/Words";
  
//   const middlewares = [thunk];
//   const enhancer = applyMiddleware(...middlewares);
//   const rootReducer = combineReducers({ Words });
  
//   const store = createStore(rootReducer, enhancer);
  
//   export default store;

import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import Words from "./modules/Word";
import thunk from "redux-thunk";

const rootReducer = combineReducers({Words});
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;