import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';
import Tooltip from '../Widgets/Tooltip';

// withTooltip
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        get focused() {
            return this.domNode.contains(document.activeElement);
        }

        init(...props) {
            super.init(...props);
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);

            // get tooltip container
            let tooltipContainer = document.body.querySelector('tooltip');
            // if not exist, create once
            if (!tooltipContainer) {
                tooltipContainer = document.createElement('tooltip');
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

        getTooltipPos() {
            const {x, y, width, height} = this.domNode.getBoundingClientRect(),
                {tooltipPosition, tooltipPositions, width:tooltipWidth, height:tooltipHeight} = this.props;

            let left = -9999,
                top = -9999;

            switch(tooltipPositions[tooltipPosition]) {
                case 'after':
                    left = x + width;
                    top = y;
                    break;

                case 'before':
                    left = x - tooltipWidth;
                    top = y;
                    break;

                case 'above':
                    left = x;
                    top = y - tooltipHeight;
                    break;

                case 'below':
                    left = x;
                    top = y + height;
                    break;

                case 'below-centered': 
                    left = x + ((width - tooltipWidth) / 2);
                    top = y + height;
                    break;

                case 'above-centered': 
                    left = x + ((width - tooltipWidth) / 2);
                    top = y - tooltipHeight;
                    break;
            }

            return {left, top};
        }

        onMouseEnter(e) {
            const pos = this.getTooltipPos();

            ReactDom.render(<Tooltip {...this.props} {...pos} />, this.tooltipContainer);
        }

        onMouseLeave(e) {
            ReactDom.render(<Tooltip {...this.props} tooltip="" />, this.tooltipContainer);
        }

        render() {
            return (
                    <Component
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
