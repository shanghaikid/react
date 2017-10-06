import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Dialog from 'components/Widgets/Dialog';
import Overlay from 'components/Widgets/Overlay';
import Button from 'components/Form/Button';

import { toggleDialogOpen } from './DialogsAction';
import { zIndexs } from '../../Constants';

// Dialogs page
export default class Dialogs extends BaseComponent {
    init() {
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);

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

    onDialogClose(e, dialog) {
        this.setState(toggleDialogOpen(dialog.props.componentId, false));
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
                <Dialog isOpen={this.state.dialog1IsOpen} componentId="dialog1" title="dialog1" onClose={this.onDialogClose} />
                <Dialog isOpen={this.state.dialog2IsOpen} componentId="dialog2" title="dialog2" repositionOnShow={false} onClose={this.onDialogClose} />
            </div>
        );
    }
}
