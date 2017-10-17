import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';

const initState = {
    message: '',
    mod: ''
};

// validatable
export default function validatable(Component) {
    class ValidatableComponent extends Component {
        get messageDef() {
            return {
                error: this.props.invalidMessage,
                missing: this.props.missingMessage,
                imcomplete: this.props.promptMessage,
                '': ''
            }
        }

        init(...props) {
            super.init(...props);
            // handler
            this.onBlur = this.onBlur.bind(this);
            this.onFocus = this.onFocus.bind(this);
            // state
            this.state = Object.assign({}, this.state, initState);
            // local variable should not be used as trigger tag
            this._hasBeenBlurred = false;
        }

        getMessage(mod) {
            return this.messageDef[mod];
        }

        componentWillReceiveProps(nextProps) {
            super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);

            const { disabled, inputValue} = this.props,
                nextDisabled = nextProps.disabled === true && disabled === false,
                nextEnabled = nextProps.disabled === false && disabled === true,
                valueChanged = nextProps.inputValue !== inputValue;

            if (nextDisabled)  {
                this.setState({
                    mod: '',
                    message: ''
                });
            }

            if (nextEnabled) {
                this.validate();
            }

            if (valueChanged) {
                if (this._hasBeenBlurred) {
                    this.validate(nextProps.inputValue);
                }
            }
        }

        processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }

        onBlur(e) {
            // set blur flag
            this._hasBeenBlurred = true;
            this.validate();
        }

        onFocus(e, t) {
            this.setState({
                mod: '',
                message: ''
            });
            if (this.props.onFocus) {
                this.props.onFocus(e);
            }
        }

        reset() {
            this.setState(Object.assign({}, this.state, initState));
            this._hasBeenBlurred = false;
        }

        isValid(value) {
            const {regExp, validator} = this.props;

            if (!regExp && !validator) return true;

            return regExp && regExp.test(value) || validator(value);
        }

        validate(inputValue = this.props.inputValue) {
            const { required, onValidated } = this.props,
                isValueEmpty = isEmpty(inputValue),
                notValid = !this.isValid(inputValue),
                mod = (isValueEmpty && required) ? 'missing' : notValid ? 'error' : '',
                message = this.getMessage(mod);

            this.setState({ mod, message }, () => {
                onValidated && onValidated({mod, message, ok: mod === ''}, this);
            });
        }

        render() {
            const newProps = {
                mod: this.state.mod,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                message: this.state.message,
                tooltip: this.state.message
            };

            return (<Component
                    {...this.props}
                    {...newProps}
                    ref={this.processRef.bind(this)}
                    />);
        }
    }

    ValidatableComponent.defaultProps = Object.assign({}, Component.defaultProps, {
        required: false,
        promptMessage: '',
        invalidMessage: 'This field is not valid',
        missingMessage: 'This field is required.'
    });

    ValidatableComponent.propTypes = Object.assign({}, Component.propTypes, {
        required: PropTypes.bool,
        promptMessage: PropTypes.string,
        invalidMessage: PropTypes.string,
        missingMessage: PropTypes.string,
        regExp: PropTypes.regExp,
        validator: PropTypes.func,
        onValidated: PropTypes.func
    });

    return ValidatableComponent;
}
