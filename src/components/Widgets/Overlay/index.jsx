import React from 'react';
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';
import { zIndexs } from '../../../Constants';

export default class Overlay extends BaseComponent {
    init() {
        this.baseClassName = `overlay`;
    }
    render() {
        const {isOpen} = this.props,
            cls = this.className + ' ' + (!isOpen ? 'hidden' : ''),
            style = {
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundColor: '#000',
                opacity: this.props.opacity,
                left: 0,
                top: 0,
                zIndex: zIndexs.Overlay
            };
        
        return (<div className={cls} style={style}></div>)
    }
}

Overlay.defaultProps = {
    opacity: .5
};

Overlay.propTypes = {
    opacity: PropTypes.number,
    isOpen: PropTypes.bool
};
