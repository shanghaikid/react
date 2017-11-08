import PropTypes from 'prop-types';
import { zIndexs } from '../../Constants';
import PopupManager from './PopupManager';

// popupable
export default function popupable(Component) {
    let zIndex = zIndexs[Component.type] || 0;

    class PopupComponent extends Component {
        init(...props) {
            super.init(...props);
            // state
            this.state = {
                zIndex: zIndex++
            };
        }

        componentDidUpdate() {
            super.componentDidUpdate && super.componentDidUpdate();
            PopupManager.handle(this);
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
            const newProps = {
                styleObj : {zIndex: this.state.zIndex},
                zIndex: this.state.zIndex
            };
            return (<Component {...this.props} {...newProps} ref={this.processRef.bind(this)} />);
        }
    }

    return PopupComponent;
}