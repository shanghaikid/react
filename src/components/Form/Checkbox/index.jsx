import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable , withTooltip } from '../../Helper';
import { getClsName } from '../../../utils';

export class CheckboxView extends BaseComponent {
    init() {
        this.baseClassName = `checkbox`;
    }

    render() {
        const { disabled, name, checked, label} = this.props,
            cls = getClsName(this.className)

        return (
            <label><input ref={input => this.domNode = input}
                className={cls}
                disabled={disabled}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={this.handleEvent}
                onFocus={this.handleEvent}
                onBlur={this.handleEvent}
                />{label}
            </label>
        );
    }
}

CheckboxView.defaultProps = {
    disabled: false,
    label: ''
};

CheckboxView.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string
};

const Checkbox = withTooltip(CheckboxView);
export default Checkbox;