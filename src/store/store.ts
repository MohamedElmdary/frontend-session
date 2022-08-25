export type Reducer<T, A> = (state: T, action: A) => T;
export type Subscriber<T> = (state: T) => void;
export type Next<A> = (action: A) => void;
export type Middleware<T, A> = (
  store: Store<T, A>
) => (next: Next<A>) => Next<A>;

export class Store<T, A> {
  private state?: T;
  private subscribers: Set<Subscriber<T>> = new Set<Subscriber<T>>();
  private middleware?: Next<A>;

  constructor(private reducer: Reducer<T, A>, middleware?: Middleware<T, A>) {
    this.next = this.next.bind(this);
    this.reducer = this.reducer.bind(this);
    this.getState = this.getState.bind(this);

    this.middleware = middleware ? middleware(this)(this.next) : undefined;

    this.dispatch({ type: "@@INIT" } as unknown as A);
  }

  getState() {
    return this.state!;
  }

  dispatch(action: A) {
    if (this.middleware) {
      return this.middleware(action);
    }

    this.next(action);
  }

  subscribe(subscriber: Subscriber<T>) {
    this.subscribers.add(subscriber);
    subscriber(this.state!);

    return () => {
      this.subscribers.delete(subscriber);
    };
  }

  private next(action: A) {
    this.state = this.reducer(this.state!, action);
    this.subscribers.forEach((fn) => fn(this.state!));
  }
}
