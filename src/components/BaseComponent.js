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
        // console.info(method, this.constructor.name);
        if (method in this.props) this.props[method](e);
        if (method in this) this[method](e);
    };
}());

export default class BaseComponent extends Component {
    constructor(...args) {
        super(...args);
        // TODO: find a better way to save memory
        this.handleEvent = this.handleEvent.bind(this);
        this.libClassPrefix = 'e';
        this.baseClassName = 'component';

        this.init();
    }

    get className() {
        return `${this.libClassPrefix}-${this.baseClassName} ${this.props.className || ''}`;
    }

    setState(obj) {
        // console.log(obj, this.transformState(obj));
        super.setState(obj);
    }

    transformState(stateObj) {
        return e(stateObj);
    }

    getLibPrefixedClass(cls) {
        return `${this.libClassPrefix}-${cls}`;
    }

    // initialize stub
    init() {}
}
