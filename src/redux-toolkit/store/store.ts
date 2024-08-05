import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReduser from "../redusers/counterReduser";
import { placeholderAPI } from "../API/jsonAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import postsReduser from "../redusers/postsReduser";
import createSagaMiddleware from "@redux-saga/core";
import jsonReduser from "../redusers/jsonReduser";
import rootSaga from "../sagas/saga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReduser,
    posts: postsReduser,
    [placeholderAPI.reducerPath]: placeholderAPI.reducer,
    json: jsonReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/*placeholderAPI.middleware,*/ sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
