import { combineReducers } from "./combineReducers";
import { createStore } from "./createStore";

type T = number;
type A = "Increment" | "Decrement" | "Reset" | "Set";

const counterReducer = (state: T = 0, action: A) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return 0;
    case "Set":
      return 20;
    default:
      return state;
  }
};

const todoReducer = (
  state: string[] = ["todo1", "todo2"],
  action: "add"
): string[] => {
  return state;
};

const store = createStore<any, any>(
  combineReducers({
    counter: counterReducer,
    todos: todoReducer as any,
  }),
  ({ getState }) => {
    return (next) => {
      return (action) => {
        next(action);
        console.log("Middleware", action);
      };
    };
  }
);

store.subscribe((s) => {
  console.log("[FROM Subscriber]", s);
});

store.dispatch("Increment");

setTimeout(() => {
  store.dispatch("Increment");
}, 3000);
