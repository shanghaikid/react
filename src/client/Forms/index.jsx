import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';
import Header from 'components/BasicUI/Header';

import { toggleDisable } from './FormsAction';

const initState = {
    nameField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Name',
        name: 'nameField',
        required: true
    },
    pwdField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Password',
        type: 'password',
        name: 'pwdField'
    },
    hidden: true
};

// Dialogs page
export default class Forms extends BaseComponent {
    init() {
        this.state = this.transformState(initState);
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

    validator(v) {
        return v.includes('s');
    }

    onChange(e) {
        this.setState({
            [e.target.name]: {
                inputValue: e.target.value
            }
        });
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        },
        [i1, i2] = this.getStates(['nameField', 'pwdField']);

        i1.validator = this.validator;
        i2.validator = this.validator;

        return (
            <div style={style} className="forms">
                <form onChange={this.handleEvent}>
                    <Header text="Buttons" />
                    <Button onClicked={this.toggleFieldDisable.bind(this, 'nameField')} text="Toggle Disable Name Field" />
                    <Button onClicked={this.toggleFieldDisable.bind(this, 'pwdField')} text="Toggle Disable Password Field" />
                    <Button onClicked={this.resetAll.bind(this)} text="Reset All" />
                    <Header text="ValidationTextBox" />
                    <div><TextInput {...i1}  ref={name => this.nameField = name} /></div>
                    <div><TextInput {...i2} ref={name => this.pwdField = name} /></div>
                    <small>Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</small>
                </form>
            </div>
        );
    }
}
