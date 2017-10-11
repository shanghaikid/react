import PropTypes from 'prop-types';
import { getCenterPosition } from '../../utils';

// draggable
export default function draggable(Component, classProperty) {
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
            if (this.domNode) {
                let {left, top} = getCenterPosition(window, this.domNode);
                this.setState({left, top});
            }
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
            if (classProperty && !e.target.classList.contains(this[classProperty])) return;
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

            return (
                <div style={style} onMouseDown={this.handleEvent} onMouseUp={this.handleEvent}>
                    <Component 
                        {...this.props} 
                        ref={this.processRef.bind(this)}
                         />
                </div>);
        }
    }

    DraggableComponent.defaultProps = Object.assign({
        repositionOnOpen: true,
        styleObj: {}
    }, Component.defaultProps);

    DraggableComponent.propTypes = Object.assign({
        repositionOnOpen: PropTypes.bool,
        styleObj: PropTypes.object
    });

    return DraggableComponent;
}
