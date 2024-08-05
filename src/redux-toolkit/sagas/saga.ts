import { all, call, CallEffect, put, PutEffect, takeEvery } from "redux-saga/effects";

const fetchUsersApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

function* watchGetUsers() {
  yield takeEvery("json/getUsers", getUsers);
}

export default function* rootSaga() {
  yield all([watchGetUsers()]);
}
