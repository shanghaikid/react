import React from 'react'
import BaseComponent from '../../BaseComponent';
import Splitter from '../Splitter';
import PropTypes from 'prop-types';

// TODO: keyboard event
export default class Pane extends BaseComponent {
    constructor(...args) {
        super(...args);
        // properties
        this.baseClass = 'pane';
        this.mousemoveHandler = this.onMouseMove.bind(this);
        this.mouseupHandler = this.onMouseUp.bind(this);
        this.state = {
            left: 0,
            top: 0
        };
    }

    componentDidMount() {
        let {splitter, size, sizeUnit, maxSize, minSize} = this.props,
            {offsetWidth, offsetHeight} = this.domNode.parentElement;

        if (splitter === 'null') return;

        if (splitter === 'vertical') {
            this.maxSize = sizeUnit === '%' ? (Math.floor(offsetWidth * maxSize / 100)) : maxSize;
            this.minSize = sizeUnit === '%' ? (Math.floor(offsetWidth * minSize / 100)) : minSize;

            this.setState({
                left: sizeUnit === '%' ? (Math.floor(offsetWidth * size / 100)) : size
            });
        }

        if (splitter === 'horizontal') {
            this.maxSize = sizeUnit === '%' ? (Math.floor(offsetHeight * maxSize / 100)) : maxSize;
            this.minSize = sizeUnit === '%' ? (Math.floor(offsetHeight * minSize / 100)) : minSize;

            this.setState({
                top: sizeUnit === '%' ? (Math.floor(offsetHeight * size / 100)) : size
            });
        }
    }

    componentWillUnmount() {
        this.onMouseDown();
    }

    onMouseUp(e) {
        document.removeEventListener('mousemove', this.mousemoveHandler);
    }

    onTouchEnd(e) {
        this.onMouseUp(e);
    }

    onMouseDown(e) {
        document.addEventListener('mousemove', this.mousemoveHandler);
        document.addEventListener('mouseup', this.mouseupHandler);
    }

    onTouchStart(e) {
        this.onMouseDown(e);
    }

    onMouseMove(e) {
        const {clientX, clientY} = e,
              {maxSize, minSize} = this,
              left = clientX > maxSize ? maxSize : (clientX < minSize ? minSize : clientX),
              top = clientY > maxSize ? maxSize : (clientY < minSize ? minSize : clientY);

        this.setState({left, top});
    }

    onTouchMove(e) {
        this.onMouseMove(e);
    }

    render() {
        const {className, children, splitter} = this.props,
            cls = this.baseClass + (`${splitter === 'vertical' ? ` verticalPane` : ''}`) + (` ${className}`),
            style = {
            },
            splitterStyle = {
                zIndex: 1
            },
            isVertical = splitter === 'vertical';

            if (splitter === 'vertical') {
                Object.assign(splitterStyle, {
                    left: this.state.left,
                    top: 0,
                    right: 'auto'
                });
                Object.assign(style, {
                    width: this.state.left,
                    minWidth: this.state.left
                });
            }

            if (splitter === 'horizontal') {
                Object.assign(splitterStyle, {
                    top: this.setState.top,
                    left: 0
                });
                Object.assign(style, {
                    height: this.state.top
                });
            }

        return (
            <div ref={(pane) => { this.domNode = pane; }}
                {...this.props} style={style} onClick={this.handleEvent.bind(this)}
                className={cls}>
                    {children}
                    {splitter !== 'null' ? <Splitter 
                                            style={splitterStyle} 
                                            onMouseDown={this.handleEvent.bind(this)} 
                                            onMouseUp={this.handleEvent.bind(this)} 
                                            onTouchStart={this.handleEvent.bind(this)} 
                                            onTouchEnd={this.handleEvent.bind(this)}
                                            isVertical={isVertical} /> : ''}
            </div>
        );
    }
}

Pane.defaultProps = {
    className: '',
    splitter: 'null',
    size: 25,
    minSize: 15,
    maxSize: 50,
    sizeUnit: '%'
};

Pane.propTypes = {
    className: PropTypes.string,
    splitter: PropTypes.string,
    size: PropTypes.number,
    minSize: PropTypes.number,
    maxSize: PropTypes.number
};