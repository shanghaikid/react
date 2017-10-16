import React from 'react';
import BaseComponent from '../../BaseComponent';
import { withTooltip } from '../../Helper';
import PropTypes from 'prop-types';

export class ButtonView extends BaseComponent {
    init() {
        this.baseClassName = `button`;
    }

   onClick(e) {
        const {onClicked} = this.props;

        if (onClicked) {
            onClicked(e, this);
        }
    }

    render() {
        const {text, type, title} = this.props;

        return (
            <button type={type} title={title || text} className={this.className} onClick={this.handleEvent}>{text}</button>
        );
    }
}

ButtonView.defaultProps = {
    text: 'Button',
    type: 'button',
    title: ''
};

ButtonView.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    onClicked: PropTypes.func
};

const Button = withTooltip(ButtonView);
export default Button;