class Store {
    constructor(reducer){
        this.reducer = reducer;
        this.subscribers = new Set();
        this.state = this.reducer(this.state, {
            type: "@@INIT"
        });
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
    subscribe(subscriber) {
        this.subscribers.add(subscriber);
        return ()=>{
            this.subscribers.delete(subscriber);
        };
    }
}

//# sourceMappingURL=index.87ca90a5.js.map
