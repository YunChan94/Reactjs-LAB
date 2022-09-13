import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// Redux overwrite state, nên khi set state cần set đầy đủ thông tin trong state
// Không nên thay đổi thông tin của state, mà cần overwite nó vì dễ bị lỗi
// Reducer func

//create Store chỉ có 1 store duy nhất
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
