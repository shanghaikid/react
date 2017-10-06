import {Component} from 'react';
import {isObj, e} from '../utils';

// all components share one event handler
Component.prototype.handleEvent = (function () {
    // all known React.Component events
    var map = {
        click: 'onClick',
        change: 'onChange',
        mouseover: 'onMouseOver',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        mouseout: 'onMouseOut',
        mousedown: 'onMouseDown',
        mouseup: 'onMouseUp',
        mousemove: 'onMouseMove',
        focus: 'onFocus',
        blur: 'onBlur'
    };

    // fallback helper
    function capitalize(type) {
        return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
    }

    // one handleEvent to rule them all
    return function handleEvent(e) {
        var method = map[e.type] || capitalize(e.type);
        console.info(method, this.constructor.name);
        if (method in this.props) this.props[method](e);
        if (method in this) this[method](e);
    };
}());

// use for componentId
let registry = {};
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

export default class BaseComponent extends Component {
    constructor(...args) {
        super(...args);
        // TODO: find a better way to save memory
        this.handleEvent = this.handleEvent.bind(this);
        this.libClassPrefix = 'e';
        this.baseClassName = 'component';

        this.init();
        this.register();
        this.postRegister();
    }

    // componentWillMount() {}
    // componentDidMount() {}
    // componentWillReceiveProps() {}
    // shouldComponentUpdate() {}
    // componentWillUpdate() {}
    componentDidUpdate() {
        if (popupManager.types.includes(this.constructor.name)) {
            popupManager.handle(this);
        }
    }
    // componentWillUnmount() {}
    // forceUpdate() {}

    get className() {
        return `${this.libClassPrefix}-${this.baseClassName} ${this.props.className || ''}`;
    }

    register() {
        let name = this.constructor.name;
        // ensure we have register
        registry[name] = registry[name] || 0;
        // add one
        registry[name] = registry[name] + 1;
        // assign name
        this.componentId = name.charAt(0).toLowerCase() + name.slice(1) + registry[name];
    }

    setState(obj) {
        super.setState(obj);
    }

    transformState(stateObj) {
        return e(stateObj);
    }

    getLibPrefixedClass(cls) {
        return `${this.libClassPrefix}-${cls}`;
    }

    // stubs
    init() {}
    postRegister() {}
}
