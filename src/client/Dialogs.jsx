import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Dialog from 'components/Widgets/Dialog';
import Button from 'components/Form/Button';

// Dialogs page
export default class Dialogs extends BaseComponent {
    init() {
        this.onBtnClicked = this.onBtnClicked.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);

        this.state = this.transformState({
            dialog: {
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

    componentDidMount() {
        // console.log(this.props);
    }

    onBtnClicked(e) {
        console.log(this.state);
        this.setState({
            dialogOpened: true
        });
    }

    onDialogClose(e) {
        console.log(e.target);
        this.setState({
            dialogOpened: false
        });
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                <Button onClicked={this.onBtnClicked} text="Open Dialog" />
                <Dialog opened={this.state.dialogOpened} onClose={this.onDialogClose} />
                <Dialog opened={this.state.dialogOpened} onClose={this.onDialogClose} />
            </div>
        );
    }
}
