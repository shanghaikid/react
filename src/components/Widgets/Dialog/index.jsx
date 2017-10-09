import React from 'react';
import PopupComponent from '../../PopupComponent';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';
import { getCenterPosition , getClsName} from '../../../utils';
import { zIndexs } from '../../../Constants';

let zIndex = zIndexs.Dialog;

// Dialog
export default class Dialog extends PopupComponent {
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
        this.mousemoveHandler = this.onMouseMove.bind(this);
        this.mouseupHandler = this.onMouseUp.bind(this);
        // state
        this.state = {
            left: 0,
            top: 0,
            zIndex: zIndex++
        };
    }

    componentDidMount() {
        this.reposition();
    }

    reposition() {
        let {left, top} = getCenterPosition(window, this.domNode);
        this.setState({left, top});
    }

    componentWillReceiveProps(props) {
        const { open, close, repositionOnOpen, isOpen} = this.props,
            nextOpen = props.isOpen === true && isOpen === false,
            nextClose = props.isOpen === false && isOpen === true;

        if (nextOpen)  {
            open({}, this);
            this.setState({
                zIndex: zIndex++
            });

            if (repositionOnOpen) {
                this.reposition();
            }
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

    onMouseDown(e) {
        // only click on the header , we start draging the dialog
        if (e.currentTarget !== e.target) return;
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
        const {mod, title, body, cancelLabel, confirmLabel, closeBtnLabel} = this.props,
                cls = getClsName(this.className, mod, (!this.props.isOpen ? 'hidden' : '')),
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

Dialog.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    body: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close',
    isOpen: false,
    repositionOnOpen: true,
    close: () => {}
};

Dialog.propTypes = {
    mod: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    helpLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    closeBtnLabel: PropTypes.string,
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    open: PropTypes.func,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    zIndex: PropTypes.number,
    repositionOnOpen: PropTypes.bool
};
