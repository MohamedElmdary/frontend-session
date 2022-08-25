import { Reducer } from "./store";

export function combineReducers<T, A>(reducers: {
  [key: string]: Reducer<T, A>;
}): Reducer<T, A> {
  return (state: any, action) => {
    const newState = {} as any;

    const names = Object.keys(reducers);

    for (const name of names) {
      newState[name] = reducers[name](state ? state[name] : undefined, action);
    }

    return newState as T;
  };
}
