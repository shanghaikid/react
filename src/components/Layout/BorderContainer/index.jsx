import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class BorderContainer extends BaseComponent {
    init() {
        this.baseClassName = `borderContainer`;
    }

    render() {
        let {className, children} = this.props;
        return (
            <div {...this.props} className={this.className}>
                {children}
            </div>
        );
    }
}

BorderContainer.defaultProps = {
    persist: false,
    className: ''
};

BorderContainer.propTypes = {
    className: PropTypes.string,
    persist: PropTypes.bool
};