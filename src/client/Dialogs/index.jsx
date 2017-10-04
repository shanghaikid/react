import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Dialog from 'components/Widgets/Dialog';
import Button from 'components/Form/Button';
import { toggleDialogOpen } from './DialogsAction';

// Dialogs page
export default class Dialogs extends BaseComponent {
    init() {
        this.onBtn1Clicked = this.onBtn1Clicked.bind(this);
        this.onBtn2Clicked = this.onBtn2Clicked.bind(this);

        this.state = this.transformState({
            dialog1: {
                opened: false
            },
            dialog2: {
                opened: false
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

    onBtn1Clicked(e) {
        this.setState(toggleDialogOpen('dialog1'));
    }

    onBtn2Clicked(e) {
        this.setState(toggleDialogOpen('dialog2'));
    }

    onDialogClose(dialogName) {
        this.setState(toggleDialogOpen(dialogName, false));
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                <Button onClicked={this.onBtn1Clicked} text="toggle Dialog1" />
                <Button onClicked={this.onBtn2Clicked} text="toggle Dialog2" />
                <Dialog opened={this.state.dialog1Opened} title="dialog1" onClose={this.onDialogClose.bind(this, 'dialog1')} />
                <Dialog opened={this.state.dialog2Opened} title="dialog2" repositionOnShow={false} onClose={this.onDialogClose.bind(this, 'dialog2')} />
            </div>
        );
    }
}
