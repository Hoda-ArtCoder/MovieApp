import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesSlice from "./slice/favouriteSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice);

const store = configureStore({
  reducer: {
    favorites: persistedReducer,
  },
});

const persistor = persistStore(store);

// Named exports for store and persistor
export { store, persistor };
