import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';

// withTooltip
// currently I used css peseudo-element as tooltip
// but I feel we may need a better solution
// because it has some limitation:
// for example, peseduo-element only support pure text
// so no HTML is can be shown
// TODO: better solution, maybe another helper to support HTML
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        get focused() {
            return this.domNode.contains(document.activeElement);
        }
        init(...props) {
            super.init(...props);
            // handler
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
            // state
            this.state = Object.assign({}, this.state, {
                showTooltip: false,
                tooltip: '',
                containerDisplay: ''
            });
            // local variable
            this.showTooltipTimeout = null;
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);
            // copy children display value
            this.setState({containerDisplay: window.getComputedStyle(this.domNode, null).getPropertyValue('display')});

            if (this.props.showTooltipOnLoad && this.props.tooltip !== '') {
                this.setState({ showTooltip: true, tooltip: this.props.tooltip }, this.hideTooltip.bind(this));
            }
        }

        componentWillReceiveProps(nextProps) {
            super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);

            const {tooltip, tooltipText} = nextProps;
            this.setState({
                tooltip: typeof tooltip !== 'undefined' ? tooltip : tooltipText
            });
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

        hideTooltip(clearTooltip=false) {
            this.setState({ showTooltip: false});
        }

        onMouseEnter(e) {
            this.showTooltip(this.props.tooltip || this.props.tooltipText, false);
        }

        onMouseLeave(e) {
            this.setState({ showTooltip: false });
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
                    onFocus={this.onFocus}
                     >
                    <Component
                    {...this.props}
                    ref={this.processRef}
                    />
                </div>);
        }
    }

    ComponentWithTooltip.defaultProps = Object.assign({
        tooltipText: '',
        showTooltip: false,
        showTooltipOnLoad: false,
        showTooltipTimeout: 20,
        hideTooltipTimeout: 1000
    }, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltip: PropTypes.string,
        tooltipText: PropTypes.string, // initial tooltip
        showTooltip: PropTypes.bool,
        showTooltipOnLoad: PropTypes.bool,
        showTooltipTimeout: PropTypes.number,
        hideTooltipTimeout: PropTypes.number
    });


    return ComponentWithTooltip;
}
