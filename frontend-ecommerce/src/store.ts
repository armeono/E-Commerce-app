import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/CartSlice";
import IDSliceReducer from "./slices/IDSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "id",
  storage,
  blacklist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, IDSliceReducer);

const reducers = combineReducers({
  id: persistedReducer,
  CartSliceReducer: CartSliceReducer,
});

export const store = configureStore({reducer: reducers});

export const persistor = persistStore(store);
