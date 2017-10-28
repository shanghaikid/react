import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';
import Tooltip from '../Widgets/Tooltip';


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
            this.state = {
                showTooltip: true
            };
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);

            // get tooltip container
            let tooltipContainer = document.body.querySelector('div.tooltip');
            // if not exist, create once
            if (!tooltipContainer) {
                tooltipContainer = document.createElement('div');
                tooltipContainer.className = 'tooltip';

                document.body.appendChild(tooltipContainer);
            }
            // assign it to component local prop
            this.tooltipContainer = tooltipContainer;

            // bind events
            this.bindEvents();
        }

        bindEvents() {
            this.domNode.addEventListener('mouseenter', this);
            this.domNode.addEventListener('mouseleave', this);
        }

        componentWillUnmount(...args) {
            super.componentWillUnmount && super.componentWillUnmount(...args);
            document.body.removeChild(this.tooltipContainer);
            this.domNode.removeEventListener('mouseenter', this);
            this.domNode.removeEventListener('mouseleave', this);
        }

        componentDidUpdate(...args) {
            super.componentDidUpdate && super.componentDidUpdate(...args);

            const { tooltip } = this.props;

            ReactDom.render(<Tooltip tooltip={tooltip} />, this.tooltipContainer);
        }

        onMouseEnter(e) {
            console.log(e);
        }

        onMouseLeave(e) {
            console.log(e);
        }

        render() {
            return (
                    <Component showTooltip={this.state.showTooltip}
                    {...this.props}
                    ref={this.processRef}
                    />
            );
        }
    }

    ComponentWithTooltip.defaultProps = Object.assign({}, Tooltip.defaultProps, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({}, Tooltip.propTypes);

    return ComponentWithTooltip;
}
