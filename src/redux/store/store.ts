import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { adminApis, companyApi } from "../api/api";
import rootReducer from "../rootReducer/rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authSlice", "getHiredSlice"], // reducers which you want to persist
  blacklist: [adminApis.reducerPath, companyApi.reducerPath], // reducers which you don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // @ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(companyApi.middleware, adminApis.middleware),
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
