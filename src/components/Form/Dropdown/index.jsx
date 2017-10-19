import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable , withTooltip } from '../../Helper';
import { getClsName } from '../../../utils';

export class Dropdown extends BaseComponent {
    init() {
        this.baseClassName = `dropdown`;
    }

    render() {
        const { children } = this.props,
            cls = getClsName(this.className)

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
}

export class DropdownItem extends BaseComponent {
    init() {
        this.baseClassName = `dropdownItem`;
    }

    render() {
        const {children} = this.props,
            cls = getClsName(this.className)

        return (
            <div className={cls}>{children}</div>
        );
    }
}

Dropdown.defaultProps = {
    
};

Dropdown.propTypes = {
};

export default Dropdown;