import BaseComponent from 'components/BaseComponent';

let popupManager = {
    types: ['Dialog'],
    eventType: 'keydown',
    stack: [],
    eventHandler: null,
    add(id) {
        this.stack.push(id);

        if (this.stack.length > 0 && !this.eventHandler) {
            this.eventHandler = document.addEventListener(this.eventType, this);
        }
    },
    remove(id) {
        this.stack = this.stack.filter(stackId => stackId !== id);

        if (this.stack.length === 0) {
            document.removeEventListener(this.eventType, this);
            delete this.eventHandler;
        }
    },
    has(id) {
        return this.stack.includes(id);
    },
    handleEvent(e) {
        console.log(e);
    },
    handle(component) {
        let id = component.componentId,
            name = component.constructor.name,
            isOpen = component.state.isOpen;

        if (!this.has(id) && isOpen === true) {
            this.add(id);
            return;
        }

        if (this.has(id) && isOpen === false) {
            this.remove(id);
            return;
        }
    }
};

export default class PopupComponent extends BaseComponent {
    // componentWillMount() {}
    // componentDidMount() {}
    // componentWillReceiveProps() {}
    // shouldComponentUpdate() {}
    // componentWillUpdate() {}
    componentDidUpdate() {
        super.componentDidUpdate && super.componentDidUpdate();
        if (popupManager.types.includes(this.constructor.name)) {
            popupManager.handle(this);
        }
    }
    // componentWillUnmount() {}
    // forceUpdate() {}

}
