import { PayloadAction } from "@reduxjs/toolkit";
import { call, CallEffect, fork, put, PutEffect, takeEvery } from "redux-saga/effects";

const fetchUsersApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const fetchPostsApi = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return await response.json();
};

function* getUsers(): Generator<CallEffect<number> | PutEffect<{ type: string; payload?: number | Error }>, void, number> {
    try {
    const data = yield call(fetchUsersApi);
    yield put({ type: "json/getUsersSucces", payload: data });
    } catch (error) {
        if(error instanceof Error){
            yield put({ type: "json/getUsersFailure", payload: error });
        }
  }
}

function* getPosts(
  action: PayloadAction<{ userId: number }>
): Generator<
  CallEffect<number> | PutEffect<{ type: string; payload?: number | Error }>,
  void,
  number
> {
  try {
    const data = yield call(fetchPostsApi, action.payload.userId);
    yield put({ type: "json/getPostsSucces", payload: data });
  } catch (error) {
    if (error instanceof Error) {
      yield put({ type: "json/getPostsFailure", payload: error });
    }
  }
}

function* watchGetUsers() {
  yield takeEvery("json/getUsers", getUsers);
}
function* watchGetPosts() {
  yield takeEvery("json/getPosts", getPosts);
}

export default function* rootSaga() {
  yield fork(watchGetUsers);
  yield fork(watchGetPosts);
}
