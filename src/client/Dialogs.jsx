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
                open: false
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
            dialogOpen: true
        });
    }

    onDialogClose(e) {
        console.log(e.target);
        this.setState({
            dialogOpen: false
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
                <Dialog opened={this.state.dialogOpen} onClose={this.onDialogClose} />
                <Dialog opened={this.state.dialogOpen} onClose={this.onDialogClose} />
            </div>
        );
    }
}
