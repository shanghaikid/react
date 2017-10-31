import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';
import Tooltip from '../Widgets/Tooltip';
import { States } from '../../Constants';

// withTooltip
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        get focused() {
            return this.domNode.contains(document.activeElement);
        }

        init(...props) {
            super.init(...props);
            this.onTooltipMouseEnter = this.onTooltipMouseEnter.bind(this);
            this.tooltipOnMouseLeave = this.tooltipOnMouseLeave.bind(this);
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
            const {x, y, width, height, offsetHeight} = this.domNode.getBoundingClientRect(),
                {tooltipPosition, tooltipPositions, minWidth:tooltipWidth, minHeight:tooltipHeight, padding} = this.props;

            let left = -9999,
                top = -9999;

            switch(tooltipPositions[tooltipPosition]) {
                case 'after':
                    left = x + width;
                    top = y;
                    break;

                case 'before':
                    left = x - tooltipWidth - padding * 2;
                    top = y;
                    break;

                case 'above':
                    left = x;
                    top = y - tooltipHeight - padding * 2;
                    break;

                case 'below':
                    left = x;
                    top = y + height;
                    break;

                case 'below-centered': 
                    left = x + ((width - tooltipWidth - padding * 2) / 2);
                    top = y + height;
                    break;

                case 'above-centered': 
                    left = x + ((width - tooltipWidth - padding * 2) / 2);
                    top = y - tooltipHeight - padding * 2;
                    break;
            }


            return {left, top};
        }

        onMouseEnter(e) {
            const pos = this.getTooltipPos(),
                newProps = {
                    state: States[this.props.state],
                    onMouseEnter: this.onTooltipMouseEnter,
                    onMouseLeave: this.tooltipOnMouseLeave
                };

            ReactDom.render(<Tooltip {...this.props} {...newProps} {...pos}/>, this.tooltipContainer);
        }

        onTooltipMouseEnter(e) {
            this._tooltipShowing = this.props.tooltipCanBeEntered;
        }

        onMouseLeave(e) {
            if (!this._tooltipShowing) {
                this._leaveTimeout = setTimeout(() => {
                    ReactDom.render(<Tooltip {...this.props} tooltip="" />, this.tooltipContainer);
                    this._tooltipShowing = false;
                }, this.props.tooltipCanBeEntered ? 500: 1);
            }
        }

        tooltipOnMouseLeave(e) {
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

    ComponentWithTooltip.defaultProps = Object.assign({
        tooltipPositions: {
            'after': 'after',
            'before': 'before',
            'above': 'above',
            'below': 'below',
            'below-centered': 'below-centered',
            'above-centered': 'above-centered'
        },
        tooltipCanBeEntered: false,
        tooltipPosition: 'after',
        state: 'NORMAL'
    }, Tooltip.defaultProps, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltipPosition: PropTypes.string,
        tooltipPositions: PropTypes.object,
        tooltipCanBeEntered: PropTypes.bool,
        state: PropTypes.string,
    }, Tooltip.propTypes);

    return ComponentWithTooltip;
}
