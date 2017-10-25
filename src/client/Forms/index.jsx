import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';
import Checkbox from 'components/Form/Checkbox';

import Header from 'components/BasicUI/Header';
import {Dropdown, DropdownItem} from 'components/Form/Dropdown';

const validator = function(v) {
        return v.includes('s');
}
const initState = {
    nameField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Name',
        name: 'nameField',
        validator: validator,
        required: true
    },
    pwdField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Password',
        type: 'password',
        validator: validator,
        name: 'pwdField'
    },
    dropdown: {
        disabled: false,
        tooltip: 'disabled dropdown'
    },
    disableCheckbox: {
        name: 'disableCheckbox',
        checked: false
    },
    hidden: true
};

// Form page
export default class Forms extends BaseComponent {
    init() {
        this.state = this.transformState(initState);
        this.dropdownItem = [
            { label: 'Item 1', value: 'i1'},
            { label: 'Item 2', value: 'i2'},
            { label: 'Item 3', value: 'i3'}
        ];
    }

    toggleFieldDisable(name) {
        this.setState({
            [name]: {
                disabled: !this.getState(name, 'disabled')
            }
        });
    }

    resetAll() {
        this.setState(this.transformState(initState), ()=> {
            this.nameField.reset();
            this.pwdField.reset();
        });
    }

    

    onChange(e) {
        this.setState({
            [e.target.name]: {
                inputValue: e.target.value,
                checked: e.target.checked
            }
        });

        if (e.target.name === 'disableCheckbox') {
            this.setState({
                dropdown: {
                    disabled: !this.getState('dropdown',  'disabled')
                }
            });
        }
    }

    onValidated({message, mod, ok}) {
        console.info(message, mod, ok);
        // TODO: update tooltip or some message box
    }

    onDropdownChange(e) {
        console.log(e);
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        },
        [i1, i2, i3, dropdownProps] = this.getStates(['nameField', 'pwdField', 'disableCheckbox', 'dropdown']);

        i1.onValidated = this.onValidated.bind(this);

        return (
            <div style={style} className="forms">
                <form onChange={this.handleEvent}>
                    <Header text="Buttons" />
                    <Button showTooltipOnLoad={false} onClicked={this.toggleFieldDisable.bind(this, 'nameField')} text="Toggle Disable Name Field" />
                    <Button onClicked={this.toggleFieldDisable.bind(this, 'pwdField')} text="Toggle Disable Password Field" />
                    <Button onClicked={this.resetAll.bind(this)} text="Reset All" />
                    <Button disabled={true} tooltip="Disabled tooltip" text="Disabled" />
                    <Header text="ValidationTextBox" />
                    <div><TextInput {...i1} ref={name => this.nameField = name} /></div>
                    <div><TextInput tooltipText={"normal tooltip"} {...i2} ref={name => this.pwdField = name} /></div>
                    <div><TextInput disabled={true} tooltipText={"Disabled tooltip"} inputValue="I am disabled" /></div>
                    <small>Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</small>

                    <Header text="Dropdown" />
                    <Dropdown items={this.dropdownItem} onChange={this.onDropdownChange.bind(this)} {...dropdownProps} />
                    <Header text="Checkbox" />
                    <Checkbox label="Disable drop down" {...i3} />
                </form>
            </div>
        );
    }
}
