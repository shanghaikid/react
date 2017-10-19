import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable , withTooltip } from '../../Helper';
import { getClsName } from '../../../utils';

export class Dropdown extends BaseComponent {
    init() {
        // class
        this.baseClassName = `dropdown`;
        this.placeHolderClass = this.getLibPrefixedClass('placeholder');
    }

    render() {
        const { children, placeHolder } = this.props;

        return (
            <div className={this.className}>
                <DropdownItem className={this.placeHolderClass}>{placeHolder}</DropdownItem>
                <DropdownWrapper>{children}</DropdownWrapper>
            </div>
        );
    }
}

export class DropdownWrapper extends BaseComponent {
    init() {
        this.baseClassName = `dropdownWrapper`;
    }

    render() {
        const {children, className} = this.props;

            return (
            <div className={this.className}>{children}</div>
        );
    }
}

export class DropdownItem extends BaseComponent {
    init() {
        this.baseClassName = `dropdownItem`;
    }

    render() {
        const {children, className} = this.props;

            return (
            <div className={this.className}>{children}</div>
        );
    }
}

Dropdown.defaultProps = {
    placeHolder: 'Please Select...'
};

Dropdown.propTypes = {
    placeHolder: PropTypes.string
};

export default Dropdown;