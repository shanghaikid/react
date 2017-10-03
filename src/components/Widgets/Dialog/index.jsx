import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';

// Dialog
export default class Dialog extends BaseComponent {
    init() {
        // class
        this.baseClassName = `dialog`;
        this.headerClass = this.getLibPrefixedClass('dialog-header');
        this.closeBtnClass = this.getLibPrefixedClass('dialog-btn-close');
        this.bodyClass = this.getLibPrefixedClass('dialog-body');
        this.footerClass = this.getLibPrefixedClass('dialog-footer');
        this.denyBtnClass = this.getLibPrefixedClass('dialog-btn-deny');
        this.confirmBtnClass = this.getLibPrefixedClass('dialog-btn-confirm');
        // handlers
        this.onDenyBtnClicked = this.onDenyBtnClicked.bind(this);
        this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
        this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
    }

    onCloseBtnClicked(e) {
        const {onClose} = this.props;

        if (onClose) {
            onClose(e);
        }

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
        const {mod, title, message, denyLabel, confirmLabel, closeBtnLabel, opened} = this.props,
                cls = this.className + ' ' + mod + (!opened ? 'hidden' : '');

        return (
            <div className={cls}>
                <div className={this.headerClass}>
                    {title}
                    <Button title={closeBtnLabel} text={closeBtnLabel} onClicked={this.onCloseBtnClicked} className={this.closeBtnClass} />
                </div>
                <div className={this.bodyClass}>
                    {message}
                </div>
                <div className={this.footerClass}>
                    <Button onClicked={this.onDenyBtnClicked} text={denyLabel} className={this.denyBtnClass} />
                    <Button onClicked={this.onConfirmBtnClicked} text={confirmLabel} className={this.confirmBtnClass} />
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
    closeBtnLabel: 'Close',
    opened: false
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
    onConfirm: PropTypes.func,
    opened: PropTypes.bool
};
