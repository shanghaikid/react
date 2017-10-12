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
            [e.target.name + '$value']: e.target.value
        });
    }

    f(component, name, key, value) {
        for(const key in component.defaultProps) {
            
            console.log(key, component.defaultProps[key])
        }
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        },
        inputProps1= {
            inputValue: this.state.nameField$value,
            validator: this.validator,
            required: true,
            disabled:this.state.nameField$disabled,
            placeholder: this.state.nameField$placeHolder,
            name:"nameField"
        },
        inputProps2= {
            inputValue: this.state.pwdField$value,
            validator: this.validator,
            required: true,
            disabled:this.state.pwdField$disabled,
            placeholder: this.state.pwdField$placeHolder,
            name:"pwdField",
            type: "password"
        };

        this.f(TextInput);

        return (
            <div style={style} className="forms">
                <form onChange={this.handleEvent}>
                    <Header text="Buttons" />
                    <Button onClicked={this.toggleDisableNameField.bind(this)} text="Toggle Disable Name Field" />
                    <Button onClicked={this.toggleDisablePwdField.bind(this)} text="Toggle Disable Password Field" />
                    <Button onClicked={this.resetAll.bind(this)} text="Reset All" />
                    <Header text="ValidationTextBox" />
                    <div><TextInput {...inputProps1}  ref={name => this.nameField = name} /></div>
                    <div><TextInput {...inputProps2} ref={name => this.pwdField = name} /></div>
                    <small>Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</small>
                </form>
            </div>
        );
    }
}
