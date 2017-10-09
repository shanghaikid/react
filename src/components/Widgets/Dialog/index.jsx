import React from 'react';
import ReactDOM from 'react-dom';

import PopupComponent from '../../PopupComponent';
import Button from '../../Form/Button';
import PropTypes from 'prop-types';
import { getCenterPosition , getClsName} from '../../../utils';
import { zIndexs } from '../../../Constants';

let zIndex = zIndexs.Dialog;
// draggable
function draggable(Component) {
    class DraggableComponent extends Component {
        init(props) {
            super.init(props);
            // handler
            this.mouseupHandler = this.onMouseUp.bind(this);
            this.mousemoveHandler = this.onMouseMove.bind(this);
            this.mousedownHandler = this.onMouseDown.bind(this);
            // state
            this.state = {
                left: 0,
                top: 0
            };
        }

        processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }

        componentWillReceiveProps(nextProps) {
            super.componentWillReceiveProps(nextProps);

            const { repositionOnOpen, isOpen} = this.props,
                nextOpen = nextProps.isOpen === true && isOpen === false;

            if (nextOpen && repositionOnOpen)  {
                this.reposition();
            }
        }

        componentDidMount() {
            super.componentDidMount && super.componentDidMount();
            this.reposition();
        }

        reposition() {
            let {left, top} = getCenterPosition(window, this.domNode);
            this.setState({left, top});
        }

        onMouseUp(e) {
            document.removeEventListener('mousemove', this.mousemoveHandler);
        }

        onMouseMove(e) {
            let ComponentBeingMoved = this.domNode,
                rect = ComponentBeingMoved.getBoundingClientRect(),
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

        onMouseDown(e) {
            // only click on the header , we start draging the dialog
            if (e.currentTarget !== e.target) return;
            this.lastMouseX = e.clientX;
            this.lastMouseY = e.clientY;
            document.addEventListener('mousemove', this.mousemoveHandler);
            document.addEventListener('mouseup', this.mouseupHandler);
        }

        render() {
            const style = {
                position: 'fixed',
                left: this.state.left,
                top: this.state.top
            };

            return (<Component 
                        {...this.props} 
                        ref={this.processRef.bind(this)}
                        styleObj={style} 
                        onMouseDown={this.mousedownHandler}
                        onMouseUp={this.mouseupHandler} />);
        }
    }

    DraggableComponent.defaultProps = Object.assign({
        repositionOnOpen: true
    }, Component.defaultProps);

    DraggableComponent.propTypes = Object.assign({
        repositionOnOpen: PropTypes.bool
    });

    return DraggableComponent;
}

// Dialog
export class DialogView extends PopupComponent {
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
        // state
        this.state = {
            zIndex: zIndex++
        };
    }

    componentWillReceiveProps(nextProps) {
        const { open, close, repositionOnOpen, isOpen} = this.props,
            nextOpen = nextProps.isOpen === true && isOpen === false,
            nextClose = nextProps.isOpen === false && isOpen === true;

        if (nextOpen)  {
            open({}, this);
            this.setState({
                zIndex: zIndex++
            });
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
                css = Object.assign(styleObj, {
                    zIndex: this.state.zIndex
                });

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
    zIndex: PropTypes.number,
    styleObj: PropTypes.object
};

const Dialog = draggable(DialogView);
export default Dialog;