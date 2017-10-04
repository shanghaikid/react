import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';
import { getCenterPosition } from '../../../utils';

// TODO:
// 3. overlay
// 4. style

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
        this.mousemoveHandler = this.onMouseMove.bind(this);
        this.mouseupHandler = this.onMouseUp.bind(this);
        // state
        this.state = {
            left: 0,
            top: 0,
            zIndex: 10
        };
    }

    componentDidMount() {
        this.reposition();
    }

    reposition() {
        let {left, top} = getCenterPosition(window, this.domNode);
        this.setState({left, top});
    }

    onCloseBtnClicked(e) {
        const {onClose} = this.props;

        if (onClose) {
            onClose(e, this);
        }

    }

    onDenyBtnClicked(e) {
        const {onDeny} = this.props;

        if (onDeny) {
            onDeny(e, this);
        }
    }

    onConfirmBtnClicked(e) {
        const {onConfirm} = this.props;

        if (onConfirm) {
            onConfirm(e);
        }
    }

    onMouseDown(e) {
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        document.addEventListener('mousemove', this.mousemoveHandler);
        document.addEventListener('mouseup', this.mouseupHandler);
    }

    onMouseMove(e) {
        let dialogBeingMoved = this.domNode,
              rect = dialogBeingMoved.getBoundingClientRect(),
              {clientX, clientY} = e,
              {lastMouseX, lastMouseY} = this,
              leftToMouse = clientX - lastMouseX,
              topToMouse = clientY - lastMouseY,
              left = Math.max(0, this.state.left + leftToMouse),
              top = Math.max(0, this.state.top + topToMouse);

        this.setState({
            left: Math.min(window.innerWidth - rect.width, left),
            top: Math.min(window.innerHeight - rect.height, top)
        });

        this.lastMouseX = clientX;
        this.lastMouseY = clientY;
    }

    onMouseUp(e) {
        document.removeEventListener('mousemove', this.mousemoveHandler);
    }

    render() {
        const {mod, title, message, denyLabel, confirmLabel, closeBtnLabel, opened} = this.props,
                cls = this.className + ' ' + mod + (!opened ? 'hidden' : ''),
                style = {
                    position: 'fixed',
                    left: this.state.left,
                    top: this.state.top,
                    zIndex: this.state.zIndex
                };

        return (
            <div style={style} className={cls} ref={dialog => this.domNode = dialog}>
                <div className={this.headerClass} onMouseDown={this.handleEvent} onMouseUp={this.handleEvent}>
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
    opened: false,
    repositionOnShow: true
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
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    opened: PropTypes.bool,
    zIndex: PropTypes.number,
    repositionOnShow: PropTypes.bool
};
