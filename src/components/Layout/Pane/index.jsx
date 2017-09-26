import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class Pane extends BaseComponent {
    constructor(...args) {
        super(...args);
        // properties
        this.baseClass = 'pane';
    }

    componentDidMount() {
        console.log(this.props.children)
    }

    onClick(e) {
        console.log(e.currentTarget, this, e.target);
    }

    render() {
        let {className, children, spliter, isVertical} = this.props,
            cls = this.baseClass + (`${isVertical ? ` verticalPane` : ''}`) + (` ${className}`);

        return (
            <div {...this.props} onClick={this.handleEvent} className={cls}>
                {children}
                {spliter ? spliter : ''}
            </div>
        );
    }
}

Pane.defaultProps = {
    liveSplitters: false,
    isVertical: true,
    className: ''
};

Pane.propTypes = {
    className: PropTypes.string,
    isVertical: PropTypes.bool,
    liveSplitters: PropTypes.bool,
    spliter: PropTypes.element
};