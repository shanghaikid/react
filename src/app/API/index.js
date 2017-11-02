let wsConnected = false;

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
                this._dispatch(event);
            });

            wsConnected = true;
        }
    },

    wsSend(data) {
        return Promise.all([this.wsOPenPromise]).then(() => {
            this.ws.send(data);
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