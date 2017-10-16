import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';

// withTooltip
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        init(...props) {
            super.init(...props);
            this.state = {
                showTooltip: true,
                containerDisplay: ''
            };
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);
            // copy children display value
            this.setState({containerDisplay: window.getComputedStyle(this.domNode, null).getPropertyValue('display')});
        }

        processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }


        handleTooltip(v) {
            return v;
        }

        onMouseEnter(e) {
            console.log(e, this.props, this.state);
        }

        onMouseLeave(e) {
            console.log(e, this.props);
        }

        render() {
            const { showTooltip, tooltip, showTooltipOnLoad} = this.props,
                tooltipOn = showTooltip && tooltip !== '',
                newProps = {
                    ['data-tooltip']: tooltip,
                    ['data-tooltip-show']: tooltipOn ? 'yes' : 'no'
                },
                style = {
                    display: this.state.containerDisplay
                };

            // make sure the outter is a block container
            // so that we can use ::after or ::before as tooltip element
            return (
                <div {...newProps}
                    style={style}
                    onMouseEnter={this.handleEvent} 
                    onMouseLeave={this.handleEvent}>
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
        showTooltipOnLoad: false
    }, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltip: PropTypes.string,
        showTooltip: PropTypes.bool,
        showTooltipOnLoad: PropTypes.bool
    });


    return ComponentWithTooltip;
}
