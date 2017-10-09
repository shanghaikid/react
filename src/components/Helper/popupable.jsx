import PropTypes from 'prop-types';
import { zIndexs } from '../../Constants';

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
export default function popupable(Component) {
    let zIndex = zIndexs[Component.type] || 0;

    console.assert(typeof Component.propTypes.styleObj !== 'undefined', 'The component should have an styleObj as prop');

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