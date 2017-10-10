import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Dialog from 'components/Widgets/Dialog';
import Overlay from 'components/Widgets/Overlay';
import Button from 'components/Form/Button';

import { toggleDialogOpen } from './DialogsAction';

// Dialogs page
export default class Dialogs extends BaseComponent {
    init() {
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.openDialog = this.openDialog.bind(this);

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

    onButtonClicked(e, button) {
        this.setState(toggleDialogOpen(button.props.dialog));
    }

    // this is required to sync internal state
    closeDialog(e, dialog) {
        this.setState(toggleDialogOpen(dialog.props.componentId, false));
    }

    // this is required to sync internal state
    openDialog(e, dialog) {
        this.setState(toggleDialogOpen(dialog.props.componentId, true));
    }

    shouldShowOverlay() {
        return this.state.dialog1IsOpen || this.state.dialog2IsOpen;
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                <Button dialog="dialog1" onClicked={this.onButtonClicked} text="toggle Dialog1" />
                <Button dialog="dialog2" onClicked={this.onButtonClicked} text="toggle Dialog2" />
                <Dialog isOpen={this.state.dialog1IsOpen} componentId="dialog1" title="dialog1" open={this.openDialog} close={this.closeDialog} />
                <Dialog isOpen={this.state.dialog2IsOpen} componentId="dialog2" title="dialog2" open={this.openDialog} close={this.closeDialog} repositionOnOpen={false} />
            </div>
        );
    }
}
