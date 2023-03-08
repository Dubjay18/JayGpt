import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  persistStore,
  persistReducer,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "../../reducers/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const initialState = {};

const persistedReducer = persistReducer(
  persistConfig,
  reducers
);
const store = configureStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);
const persistor = persistStore(store);

export default { store, persistor };
