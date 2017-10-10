import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';
import Header from 'components/BasicUI/Header';

import { toggleDisable } from './FormsAction';

// Dialogs page
export default class Forms extends BaseComponent {
    init() {
        this.state = this.transformState({
            nameField: {
                disbled: false
            },
            pwdField: {
                disabled: false
            }
        });
    }

    toggleDisableNameField(e, button) {
        this.setState(toggleDisable('nameField'), ()=>{
            this.nameField.domNode.focus();
        });
    }

    toggleDisablePwdField(e, button) {
        this.setState(toggleDisable('pwdField'));
        setTimeout(()=>{this.pwdField.domNode.focus()});
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style} className="forms">
                <form>
                    <Header text="Buttons" />
                    <Button onClicked={this.toggleDisableNameField.bind(this)} text="Toggle Disable Name Field" />
                    <Button onClicked={this.toggleDisablePwdField.bind(this)} text="Toggle Disable Password Field" />
                    <Header text="ValidationTextBox" />
                    <div><TextInput ref={name => this.nameField = name} disabled={this.state.nameFieldDisabled} name="name" placeholder="Name" /></div>
                    <div><TextInput ref={name => this.pwdField = name} disabled={this.state.pwdFieldDisabled} type="password" name="pwd" placeholder="Password" /></div>
                    <small>Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</small>
                </form>
            </div>
        );
    }
}
