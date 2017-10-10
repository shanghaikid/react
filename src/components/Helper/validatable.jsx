import PropTypes from 'prop-types';

// validatable
export default function validatable(Component) {
    class ValidatableComponent extends Component {
        init(props) {
            super.init(props);
        }

        processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }

        render() {
            return (<Component  {...this.props} ref={this.processRef.bind(this)} />);
        }
    }

    return ValidatableComponent;
}
