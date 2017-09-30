import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';

// Dialog
export default class Dialog extends BaseComponent {
    init() {
        this.baseClassName = `dialog`;
        this.onDenyBtnClicked = this.onDenyBtnClicked.bind(this);
        this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
        this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
        this.state = {
            opened: true
        };
    }

    onCloseBtnClicked(e) {
        const {onClose} = this.props;

        if (onClose) {
            onClose(e);
        }

        this.setState({
            opened: false
        });
    }

    onDenyBtnClicked(e) {
        const {onDeny} = this.props;

        if (onDeny) {
            onDeny(e);
        }
    }

    onConfirmBtnClicked(e) {
        const {onConfirm} = this.props;

        if (onConfirm) {
            onConfirm(e);
        }
    }

    render() {
        const {mod, title, message, denyLabel, confirmLabel, closeBtnLabel} = this.props;
        return (
            <div className={this.className + ' ' + mod}>
                <div className={this.getLibPrefixedClass('dialog-header')}>
                    {title}
                    <Button title={closeBtnLabel} onClicked={this.onCloseBtnClicked} className={this.getLibPrefixedClass('dialog-btn-close')} />
                </div>
                <div className={this.getLibPrefixedClass('dialog-body')}>
                    {message}
                </div>
                <div className={this.getLibPrefixedClass('dialog-footer')}>
                    <Button onClicked={this.onDenyBtnClicked} text={denyLabel} className={this.getLibPrefixedClass('dialog-btn-deny')} />
                    <Button onClicked={this.onConfirmBtnClicked} text={confirmLabel} className={this.getLibPrefixedClass('dialog-btn-confirm')} />
                </div>
            </div>
        );
    }
}

Dialog.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    message: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    denyLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close'
};

Dialog.propTypes = {
    mod: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    helpLabel: PropTypes.string,
    denyLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    closeBtnLabel: PropTypes.string,
    onDeny: PropTypes.func,
    onConfirm: PropTypes.func
};
