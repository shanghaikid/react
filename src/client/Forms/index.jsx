import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import Header from 'components/BasicUI/Header';

// Dialogs page
export default class Forms extends BaseComponent {
    init() {
        this.state = this.transformState({
            dialog1: {
                isOpen: false
            },
            dialog2: {
                isOpen: false
            },
            grid: {
                button: {
                    hidden: true
                },
                layout: {
                    menu: {
                        expand: true
                    }
                },
                hidden: false
            }
        });
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                <Header text="Buttons" />
                <Button dialog="dialog1" onClicked={this.onButtonClicked} text="I am a Button" />
                <Header text="ValidationTextBox" />
                <Header text="Toggle Button" />
                <Header text="DropDowns" />
            </div>
        );
    }
}
