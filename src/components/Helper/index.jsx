import PropTypes from 'prop-types';
import { zIndexs } from '../../Constants';
import { getCenterPosition } from '../../utils';

let popupManager = {
    types: ['Dialog'],
    eventType: 'keydown',
    stack: [],
    eventHandler: null,
    add(component) {
        this.stack.push(component);

        if (this.stack.length > 0 && !this.eventHandler) {
            this.eventHandler = document.addEventListener(this.eventType, this);
        }
    },
    remove(component) {
        this.stack = this.stack.filter(savedComponent => savedComponent !== component);

        if (this.stack.length === 0) {
            document.removeEventListener(this.eventType, this);
            delete this.eventHandler;
        }
    },
    has(component) {
        return this.stack.includes(component);
    },
    handleEvent(e) {
        if (e.code === 'Escape') {
            let component = this.stack[this.stack.length - 1];
            this.remove(component);
            // TODO: find a way to decouple
            component.props.close({}, component);
        }
    },
    handle(component) {
        let name = component.constructor.name,
            isOpen = component.props.isOpen;

        if (!this.has(component) && isOpen === true) {
            this.add(component);
            return;
        }

        if (this.has(component) && isOpen === false) {
            this.remove(component);
            return;
        }
    },
    // a popup must implement close and open
    isPopup(component) {
        return this.types.includes(component.constructor.name);
    }
};

// popupable
export function popupable(Component) {
    let zIndex = zIndexs[Component.type] || 0;

    class PopupComponent extends Component {
        init(props) {
            super.init(props);
            // state
            this.state = {
                zIndex: zIndex++
            };
        }

        componentDidUpdate() {
            super.componentDidUpdate && super.componentDidUpdate();
            popupManager.handle(this);
        }

        componentWillReceiveProps(nextProps) {
            super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);

            const {isOpen} = this.props,
                nextOpen = nextProps.isOpen === true && isOpen === false;

            if (nextOpen)  {
                this.setState({
                    zIndex: zIndex++
                });
            }
        }

        render() {
            const styleObj = Object.assign({}, this.props.styleObj, {
                zIndex: this.state.zIndex
            });
            return (<Component {...this.props} styleObj={styleObj} />);
        }
    }

    return PopupComponent;
}
// draggable
export function draggable(Component) {
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
            super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);

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
            const style = Object.assign({}, this.props.styleObj, {
                position: 'fixed',
                left: this.state.left,
                top: this.state.top
            });

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
