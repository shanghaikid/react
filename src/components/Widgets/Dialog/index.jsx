import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from '../../BaseComponent';
import { draggable, popupable } from '../../Helper';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';
import { getClsName } from '../../../utils';

// Dialog
export class DialogView extends BaseComponent {
    static get type() {
        return 'Dialog';
    }
    init() {
        // class
        this.baseClassName = `dialog`;
        this.headerClass = this.getLibPrefixedClass('dialog-header');
        this.closeBtnClass = this.getLibPrefixedClass('dialog-btn-close');
        this.bodyClass = this.getLibPrefixedClass('dialog-body');
        this.footerClass = this.getLibPrefixedClass('dialog-footer');
        this.cancelBtnClass = this.getLibPrefixedClass('dialog-btn-cancel');
        this.confirmBtnClass = this.getLibPrefixedClass('dialog-btn-confirm');
        // handlers
        this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
        this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
        this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
        
    }

    componentWillReceiveProps(nextProps) {
        const { open, close, repositionOnOpen, isOpen} = this.props,
            nextOpen = nextProps.isOpen === true && isOpen === false,
            nextClose = nextProps.isOpen === false && isOpen === true;

        if (nextOpen)  {
            open({}, this);
        }

        if (nextClose) {
            close({}, this);
        }
    }

    onCloseBtnClicked(e) {
        this.props.close(e, this);
        e.stopPropagation();
    }

    onCancelBtnClicked(e) {
        const {onCancel} = this.props;

        this.onCloseBtnClicked(e);

        if (onCancel) {
            onCancel(e, this);
        }
    }

    onConfirmBtnClicked(e) {
        const {onConfirm} = this.props;

        if (onConfirm) {
            onConfirm(e, this);
        }
    }

    render() {
        const {mod, title, body, cancelLabel, confirmLabel, closeBtnLabel, styleObj, onMouseDown, onMouseUp} = this.props,
                cls = getClsName(this.className, mod, (!this.props.isOpen ? 'hidden' : '')),
                css = styleObj;

        return (
            <div style={styleObj} className={cls} >
                <div className={this.headerClass} onMouseDown={onMouseDown} onMouseUp={onMouseUp} >
                    {title}
                    <Button title={closeBtnLabel} text={closeBtnLabel} onClicked={this.onCloseBtnClicked} className={this.closeBtnClass} />
                </div>
                <div className={this.bodyClass}>
                    {body}
                </div>
                <div className={this.footerClass}>
                    <Button onClicked={this.onCancelBtnClicked} text={cancelLabel} className={this.cancelBtnClass} />
                    <Button onClicked={this.onConfirmBtnClicked} text={confirmLabel} className={this.confirmBtnClass} />
                </div>
            </div>
        );
    }
}

DialogView.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    body: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close',
    isOpen: false,
    open: () => {},
    close: () => {},
    styleObj: {},
};

DialogView.propTypes = {
    mod: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    helpLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    closeBtnLabel: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    styleObj: PropTypes.object
};

const Dialog = draggable(popupable(DialogView));
export default Dialog;