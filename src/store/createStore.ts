import { Middleware, Reducer, Store } from "./store";

export function createStore<T, A>(
  reducer: Reducer<T, A>,
  middleware?: Middleware<T, A>
): Store<T, A> {
  return new Store<T, A>(reducer, middleware);
}
