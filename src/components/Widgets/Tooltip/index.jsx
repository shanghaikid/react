import React from 'react';
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class ToolTip extends BaseComponent {
    init() {
        this.baseClassName = `tooltip`;
    }

    render() {
        const {isOpen} = this.props,
            cls = this.className + ' ' + (!isOpen ? 'hidden' : '');
        
        return (<div className={cls}></div>)
    }
}

ToolTip.defaultProps = {
    opacity: .5
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    isOpen: PropTypes.bool
};
