import React from 'react';
import BaseComponent from 'components/BaseComponent';
import PropTypes from 'prop-types';

// Dialog
export default class Dialog extends BaseComponent {
    init() {
        this.baseClass = `dialog`;
    }

    render() {
        return (
            <div {...this.props} className={this.className}>
                {this.props.children}
            </div>
        );
    }
}

Dialog.defaultProps = {
    className: 'e-dialog',
    def: []
};

Dialog.propTypes = {
    className: PropTypes.string,
    def: PropTypes.array,
    activeId: PropTypes.string
};
