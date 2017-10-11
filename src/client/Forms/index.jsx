import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';
import Header from 'components/BasicUI/Header';

import { toggleDisable } from './FormsAction';

const initState = {
    nameField: {
        disabled: false,
        value: '',
        placeHolder: 'Name'
    },
    pwdField: {
        disabled: false,
        value: '',
        placeHolder: 'Password'
    }
};

// Dialogs page
export default class Forms extends BaseComponent {
    init() {
        this.state = this.transformState(initState);
    }

    toggleDisableNameField(e, button) {
        this.toggleFieldDisable('nameField');
    }

    toggleDisablePwdField(e, button) {
        this.toggleFieldDisable('pwdField');
    }

    toggleFieldDisable(name) {
        this.setState(toggleDisable(name), ()=> {
            this[name].domNode.focus();
        });
    }

    resetAll() {
        this.setState(this.transformState(initState), ()=> {
            this.nameField.reset();
            this.pwdField.reset();
        });
    }

    validator(v) {
        return v.includes('s');
    }

    onChange(e) {
        this.setState({
            [e.target.name + 'Value']: e.target.value
        });
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style} className="forms">
                <form onChange={this.handleEvent}>
                    <Header text="Buttons" />
                    <Button onClicked={this.toggleDisableNameField.bind(this)} text="Toggle Disable Name Field" />
                    <Button onClicked={this.toggleDisablePwdField.bind(this)} text="Toggle Disable Password Field" />
                    <Button onClicked={this.resetAll.bind(this)} text="Reset All" />
                    <Header text="ValidationTextBox" />
                    <div><TextInput inputValue={this.state.nameFieldValue} validator={this.validator} required={true} ref={name => this.nameField = name} disabled={this.state.nameFieldDisabled} name="nameField" placeholder={this.state.nameFieldPlaceHolder} /></div>
                    <div><TextInput inputValue={this.state.pwdFieldValue} ref={name => this.pwdField = name} disabled={this.state.pwdFieldDisabled} type="password" name="pwdField" placeholder={this.state.pwdFieldPlaceHolder} /></div>
                    <small>Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</small>
                </form>
            </div>
        );
    }
}
