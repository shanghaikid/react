import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class ContentPane extends BaseComponent {
    init() {
        this.baseClassName = `contentPane`;
    }
    render() {
        return (
            <div {...this.props} className={this.className}>
                {this.props.children}
            </div>
        );
    }
}

ContentPane.propTypes = {
    className: PropTypes.string
};