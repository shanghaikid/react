import BaseComponent from 'components/BaseComponent';

let popupManager = {
    types: ['Dialog'],
    eventType: 'keydown',
    stack: [],
    eventHandler: null,
    add(component) {
        this.stack.push(component);

        if (this.stack.length > 0 && !this.eventHandler) {
            this.eventHandler = document.addEventListener(this.eventType, this);
        }
    },
    remove(component) {
        this.stack = this.stack.filter(savedComponent => savedComponent !== component);

        if (this.stack.length === 0) {
            document.removeEventListener(this.eventType, this);
            delete this.eventHandler;
        }
    },
    has(component) {
        return this.stack.includes(component);
    },
    handleEvent(e) {
        if (e.code === 'Escape') {
            let component = this.stack[this.stack.length - 1];
            this.remove(component);
            component.close();
        }
    },
    handle(component) {
        let name = component.constructor.name,
            isOpen = component.state.isOpen;

        if (!this.has(component) && isOpen === true) {
            this.add(component);
            return;
        }

        if (this.has(component) && isOpen === false) {
            this.remove(component);
            return;
        }
    },
    // a popup must implement close and open
    isPopup(component) {
        return this.types.includes(component.constructor.name) && typeof component.close === 'function';
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

    open(e = {}, t = this) {
        const {onOpen} = this.props;

        this.setState({
            isOpen: true
        });

        if (onOpen) {
            onOpen(e, this);
        }
    }

    close(e = {}, t = this) {
        const {onClose} = this.props;

        this.setState({
            isOpen: false
        });

        if (onClose) {
            onClose(e, t);
        }
    }
    // componentWillUnmount() {}
    // forceUpdate() {}

}
