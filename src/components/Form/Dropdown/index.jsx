import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import TextInput from '../TextInput';

import { validatable , withTooltip, popupable } from '../../Helper';
import { getClsName } from '../../../utils';

export class Dropdown extends BaseComponent {
    init() {
        // class
        this.baseClassName = `dropdown`;
        this.placeholderClass = this.getLibPrefixedClass('placeholder');
        // handlers
        this.close = this.close.bind(this);
        // state
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        document.addEventListener('click', (this._clickOrFocusAnywhereHandler = e => this._clickOrFocusAnywhere(e)));
    }

    _clickOrFocusAnywhere(e) {
        // if the click was within self, ignore; otherwise, close self
        if (!this.domNode.contains(e.target)) {
            this.close();
        }
    }

    onClick(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(e.target);
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const { children, placeholder } = this.props;

        return (
            <div className={this.className} ref={this.processRef} onClick={this.handleEvent}>
                <DropdownItem className={this.placeholderClass + ' none'}>
                    <TextInput placeholder={placeholder} />
                </DropdownItem>
                <DropdownWrapper isOpen={this.state.isOpen} close={this.close} >{children}</DropdownWrapper>
            </div>
        );
    }
}

export class DropdownWrapperView extends BaseComponent {
    static get type() {
        return 'Dropdown';
    }

    init() {
        this.baseClassName = `dropdownWrapper`;
    }

    render() {
        const {children, className, styleObj} = this.props,
            cls = getClsName(this.className, (!this.props.isOpen ? 'hidden' : ''));

        return (
            <div className={cls} style={styleObj}>{children}</div>
        );
    }
}

DropdownWrapperView.defaultProps = {
    styleObj: {},
    close: () => {}
}

DropdownWrapperView.propTypes = {
    styleObj: PropTypes.object,
    close: PropTypes.func.isRequired
}

export const DropdownWrapper = popupable(DropdownWrapperView);

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
    placeholder: 'Please Select...'
};

Dropdown.propTypes = {
    placeholder: PropTypes.string
};

export default Dropdown;