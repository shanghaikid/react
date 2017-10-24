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
        blur: 'onBlur',
        keydown: 'onKeyDown'
    };

    // fallback helper
    function capitalize(type) {
        return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
    }

    // one handleEvent to rule them all
    return function handleEvent(e) {
        var method = map[e.type] || capitalize(e.type);
        if (method in this.props) {
            this.props[method](e, this);
            return;
        }
        if (method in this) this[method](e, this);
    };
}());

// use for componentId
let registry = {};

export default class BaseComponent extends Component {
    static get type() {
        return this.name;
    }
    constructor(...args) {
        super(...args);
        // TODO: find a better way to save memory
        this.handleEvent = this.handleEvent.bind(this);
        this.processRef = this.processRef.bind(this);
        this.libClassPrefix = 'e';
        this.baseClassName = 'component';

        this.init(...args);
        this.register(...args);
        this.postRegister(...args);
    }

    // componentWillMount() {}
    // componentDidMount() {}
    // componentWillReceiveProps() {}
    // shouldComponentUpdate() {}
    // componentWillUpdate() {}
    // componentDidUpdate() {}
    // componentWillUnmount() {}
    // forceUpdate() {}

    get className() {
        return `${this.libClassPrefix}-${this.baseClassName}${this.props.className ? ` ${this.props.className}` : ''}`;
    }

    processRef(component) {
        this.domNode = ReactDOM.findDOMNode(component);
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

    setState(...args) {
        if (isObj(args[0])) {
            args[0] = this.transformState(args[0], '$', this.state);
        }

        super.setState(...args);
    }

    // get state by name
    // if key is provided, return specified value
    // if key is ignored, return whole state object
    getState(name, key, delmiter = '$') {
        if (typeof key !== 'undefined') {
            return this.state[name + delmiter + key];
        }

        let result = {},
            found = false;

        for (let key in this.state) {
            if (key.startsWith(`${name}${delmiter}`)) {
                result[key.split(`${delmiter}`).splice(-1)] = this.state[key];
                found = true;
            }
        }

        return found ? result : this.state[name];
    }

    // get mulitple children state
    getStates(names = [], delmiter= '$') {
        let result = [];

        for (let key in this.state) {
            names.some((name, i) => {
                if (key.startsWith(`${name}${delmiter}`)) {
                    result[i] = result[i] || {};
                    result[i][key.split(`${delmiter}`).splice(-1)] = this.state[key];
                    return true;
                }
            });
        }

        return result;
    }

    transformState(stateObj, compareObj) {
        return e(stateObj, '$', compareObj);
    }

    getLibPrefixedClass(cls) {
        return `${this.libClassPrefix}-${cls}`;
    }

    // stubs
    init() {}
    postRegister() {}
}
