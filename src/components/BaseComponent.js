import {Component} from 'react';

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
        focus: 'onFocus',
        blur: 'onBlur',
        dragstart: 'onDragStart',
        dragend: 'onDragEnd'
    };

    // fallback helper
    function capitalize(type) {
        return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
    }

    // one handleEvent to rule them all
    return function handleEvent(e) {
        var method = map[e.type] || capitalize(e.type);
        if (method in this.props) this.props[method](e);
        if (method in this) this[method](e);
    };
}());

export default class BaseComponent extends Component {}
