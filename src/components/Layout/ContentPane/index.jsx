import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class ContentPane extends BaseComponent {
    init() {
        this.baseClass = 'contentPane';
    }
    render() {
        return (
            <div {...this.props} className={this.baseClass + ' ' + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

ContentPane.propTypes = {
    className: PropTypes.string
};