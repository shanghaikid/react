let wsConnected = false,
    dataId = 0,
    requests = new Map();

const API = {
    initWS() {
        if (!wsConnected) {
            this.ws = new WebSocket('ws://localhost:8081');
            this.wsListeners = new Map();

            this.wsOPenPromise = new Promise((resolve) => {
                this.ws.addEventListener('open', () => {
                    resolve(true);
                });
            });

            // Listen for messages
            this.ws.addEventListener('message', event => {
                let data = JSON.parse(event.data);

                if (requests.has(data.id)) {
                    let resolver = requests.get(data.id);
                    resolver(data);
                }
                // dispatch
                this._dispatch(data);
            });

            wsConnected = true;
        }
    },

    wsSend(data) {
        return new Promise(resolver => {
            Promise.all([this.wsOPenPromise]).then(() => {
                let id = dataId++;
                this.ws.send(JSON.stringify({id, data}));
                requests.set(id, resolver);
            });
        });
    },

    addWSListener(component) {
        this.wsListeners.set(component.id, component);
    },

    removeWSListener(id) {
        this.wsListeners.delete(id);
    },

    _dispatch(event) {
        this.wsListeners.forEach(listener => listener.onData && listener.onData(event.data, event));
    }
}

export default API;