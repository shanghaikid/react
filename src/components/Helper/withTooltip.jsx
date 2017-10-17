import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';

// withTooltip
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        init(...props) {
            super.init(...props);
            // handler
            this.onFocus = this.onFocus.bind(this);
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
            // state
            this.state = {
                showTooltip: false,
                tooltip: '',
                containerDisplay: ''
            };
            // local variable
            this.showTooltipTimeout = null;
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);
            // copy children display value
            this.setState({containerDisplay: window.getComputedStyle(this.domNode, null).getPropertyValue('display')});

            if (this.props.showTooltipOnLoad && this.props.tooltip !== '') {
                this.setState({ showTooltip: true, tooltip: this.props.tooltip}, this.hideTooltip.bind(this));
            }
        }

        componentWillReceiveProps(nextProps) {
            super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);

            const {tooltip} = nextProps,
                isActiveElement = this.domNode.contains(document.activeElement),
                showTooltip = isActiveElement;

            if (tooltip !== '' && showTooltip) {
                this.showTooltip(tooltip);
            }

            if (tooltip === '') {
                this.setState({ showTooltip: false, tooltip: ''});
            }
        }

        showTooltip(tooltip, hideAfterShown=true) {
            if (this.showTooltipTimeout) {
                window.clearTimeout(this.showTooltipTimeout);
                this.showTooltipTimeout = null;
            }
            this.showTooltipTimeout = window.setTimeout(() => {
                this.setState({ showTooltip: true, tooltip}, hideAfterShown ? this.hideTooltip.bind(this) : () =>{});
            }, this.props.showTooltipTimeout);
        }

        hideTooltip(clearTooltip) {
            if (this.hideTooltipTimeout) {
                window.clearTimeout(this.hideTooltipTimeout);
                this.hideTooltipTimeout = null;
            }
            this.hideTooltipTimeout = window.setTimeout(() => {
                this.setState({ showTooltip: false, tooltip: clearTooltip ? '' : this.state.tooltip});
            }, this.props.hideTooltipTimeout);
        }

        processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }

        onMouseEnter(e) {
            this.showTooltip(this.state.tooltip || this.props.tooltip, false);
        }

        onMouseLeave(e) {
            this.setState({ showTooltip: false });
        }

        onFocus(e) {
            this.setState({
                showTooltip: false
            });
            if (this.props.onFocus) {
                this.props.onFocus(e);
            }
        }

        render() {
            const {tooltip, showTooltip} = this.state,
                newProps = {
                    ['data-tooltip']: tooltip,
                    ['data-tooltip-show']: showTooltip ? 'yes' : 'no'
                },
                style = {
                    display: this.state.containerDisplay
                };

            // make sure the outter is a block container
            // so that we can use ::after or ::before as tooltip element
            return (
                <div {...newProps}
                    style={style}
                    onMouseEnter={this.onMouseEnter} 
                    onMouseLeave={this.onMouseLeave}
                    onFocus={this.onFocus} >
                    <Component
                    {...this.props}
                    ref={this.processRef.bind(this)}
                    />
                </div>);
        }
    }

    ComponentWithTooltip.defaultProps = Object.assign({
        tooltip: '',
        showTooltip: false,
        showTooltipOnLoad: false,
        showTooltipTimeout: 20,
        hideTooltipTimeout: 1000
    }, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltip: PropTypes.string,
        showTooltip: PropTypes.bool,
        showTooltipOnLoad: PropTypes.bool,
        showTooltipTimeout: PropTypes.number,
        hideTooltipTimeout: PropTypes.number
    });


    return ComponentWithTooltip;
}
