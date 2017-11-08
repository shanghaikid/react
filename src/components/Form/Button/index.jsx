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
        const {text, type, title, disabled} = this.props;

        return (
            <button disabled={disabled} type={type} title={title} className={this.className} onClick={this.handleEvent}>{text}</button>
        );
    }
}

ButtonView.defaultProps = {
    text: 'Button',
    type: 'button',
    title: '',
    disabled: false
};

ButtonView.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    onClicked: PropTypes.func,
    disabled: PropTypes.bool
};

const Button = withTooltip(ButtonView);
export default Button;