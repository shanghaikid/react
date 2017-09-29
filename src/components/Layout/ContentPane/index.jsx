import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class ContentPane extends BaseComponent {
    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

ContentPane.defaultProps = {
    className: 'contentPane'
};

ContentPane.propTypes = {
    className: PropTypes.string
};